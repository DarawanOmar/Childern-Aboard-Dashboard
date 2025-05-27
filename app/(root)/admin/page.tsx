import React, { Suspense } from "react";
import ModalAddAdmin from "./_components/form/modal-add-admin";
import TitlePage from "@/components/layout/title-page";
import { TableFallback } from "@/components/layout/select-all-building-with-data";
import FeedTable from "./_components/feed-table";

async function Category() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitlePage text="ئادمینەکان" />
        <ModalAddAdmin />
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
