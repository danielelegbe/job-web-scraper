import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container pt-24 flex flex-col">
      <div>
        <h1 className="mb-4 text-3xl md:text-5xl font-bold">
          Find your dream job <span className="text-primary">today</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[500px]">
          We use AI to match you with the best jobs in the market.
        </p>
        <Link href="/register">
          <Button className="mt-4">
            Get Started
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
