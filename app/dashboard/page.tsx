import React from "react";
import { Search } from "@/components/jobs/search";

const Page = async () => {
  return (
    <main className="container mt-12">
      <h1 className="text-5xl">Search</h1>
      <Search />
    </main>
  );
};

export default Page;
