import { DataTable } from "@/components/reusable/table";
import React from "react";
import column from "./_components/column";
import { getCategoriesData } from "./_lib";
import ModalAddCategories from "./_components/form/modal-add-category";
import TitlePage from "@/components/layout/title-page";

async function Category() {
  const data = await getCategoriesData();
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitlePage text="کاتیگۆری" />
        <ModalAddCategories />
      </div>
      <div className="my-10">
        <DataTable
          columns={column}
          data={data || []}
          isSearch
          nameSearch="label"
        />
      </div>
    </div>
  );
}

export default Category;
