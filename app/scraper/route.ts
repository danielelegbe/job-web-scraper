import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

export const POST = async (request: NextRequest) => {
  try {
    const { jobTitle } = await request.json();
    puppeteer.use(StealthPlugin());

    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

    await page.setViewport({ width: 1080, height: 1024 });

    await page.goto(
      `https://uk.indeed.com/jobs?q=${jobTitle}&l=United+Kingdom&sort=date`,
    );

    const allJobs = [];

    const jobSelector = ".slider_item";
    const jobDescriptionSelector = "div#jobDescriptionText";

    await page.waitForSelector(jobSelector);

    const jobs = await page.$$(jobSelector);
    console.log(jobs);

    for (const job of jobs) {
      let title;
      let jobDescription;
      let companyName;
      let jobLocation;
      let jobUrl;

      await job.click();

      await page.waitForNetworkIdle({
        idleTime: 1000,
        timeout: 1000 * 10,
      });

      const titleElement = await job.$(".jobTitle");

      if (titleElement) {
        title = await titleElement.evaluate((el) => el.textContent, job);
      }

      const companyNameElement = await job.$('[data-testid="company-name"]');

      if (companyNameElement) {
        companyName = await companyNameElement.evaluate((el) => el.textContent);
      }

      const jobLocationElement = await job.$('[data-testid="text-location"]');

      if (jobLocationElement) {
        jobLocation = await jobLocationElement.evaluate((el) => el.textContent);
      }

      jobDescription = await page.$eval(
        jobDescriptionSelector,
        (el) => el.textContent,
      );

      const anchorElement = await job.$("a");

      if (anchorElement) {
        jobUrl = await anchorElement.evaluate((el) => el.href);
      }

      allJobs.push({
        title,
        companyName,
        jobLocation,
        jobDescription,
        jobUrl,
      });
    }

    await browser.close();

    return NextResponse.json({ data: allJobs });
  } catch (error: unknown) {
    return NextResponse.json(error);
  }
};
