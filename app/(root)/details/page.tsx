import React, { Suspense } from "react";
import TitlePage from "@/components/layout/title-page";
import ModalAddDetailCategories from "./_components/form/modal-add-detail-category";
import FeedTable from "./_components/feed-table";
import { TableFallback } from "@/components/layout/select-all-building-with-data";
import FilterCategory from "./_components/filter-categories";

async function Category({ searchParams }: SearchParamsTypeUse) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <TitlePage text="دیتەیڵ کاتیگۆری " />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-md w-full">
          <Suspense>
            <FilterCategory />
          </Suspense>
          <ModalAddDetailCategories />
        </div>
      </div>
      <div className="my-10">
        <Suspense fallback={<TableFallback />}>
          <FeedTable searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

export default Category;
