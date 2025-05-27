import React, { Suspense } from "react";
import TitlePage from "@/components/layout/title-page";
import ModalAddDetailCategories from "./_components/form/modal-add-detail-category";
import FeedTable from "./_components/feed-table";
import { TableFallback } from "@/components/layout/select-all-building-with-data";

async function Category() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitlePage text="دیتەیڵ کاتیگۆری " />
        <ModalAddDetailCategories />
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
