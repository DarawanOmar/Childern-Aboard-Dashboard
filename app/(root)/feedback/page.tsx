import React, { Suspense } from "react";
import TitlePage from "@/components/layout/title-page";
import { TableFallback } from "@/components/layout/select-all-building-with-data";
import FeedTable from "./_components/feed-table";
import { Metadata } from "next";
import TabComponet from "./_components/tab-component";

export const metadata: Metadata = {
  title: "فیدباکەکان",
  description: "فیدباکەکان",
};

async function Category({ searchParams }: SearchParamsTypeUse) {
  const type = ((await searchParams).type as string) || "Other";
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-full">
        <TitlePage text="فیدباکەکان" />
      </div>
      <div className="max-w-3xl mx-auto w-full ">
        <Suspense fallback={<h1>Loading...</h1>}>
          <TabComponet />
        </Suspense>
      </div>
      <div className="my-10">
        <Suspense key={type} fallback={<TableFallback />}>
          <FeedTable searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

export default Category;
