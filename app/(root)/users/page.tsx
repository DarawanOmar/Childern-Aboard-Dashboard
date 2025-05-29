import React, { Suspense } from "react";
import TitlePage from "@/components/layout/title-page";
import { TableFallback } from "@/components/layout/select-all-building-with-data";
import FeedTable from "./_components/feed-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "بەکارهێنەرەکان",
  description: "بەکارهێنەرەکان",
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

async function Category() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitlePage text="بەکارهێنەرەکان" />
      </div>
      <div className="my-10">
        <Suspense fallback={<TableFallback />}>
          <FeedTable />
        </Suspense>
      </div>
    </div>
  );
}

export default Category;
