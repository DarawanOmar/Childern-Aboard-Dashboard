import { DataTable } from "@/components/reusable/table";
import React from "react";
import column from "./_components/column";
import { getDetailCategoriesData } from "./_lib";
import TitlePage from "@/components/layout/title-page";
import ModalAddDetailCategories from "./_components/form/modal-add-detail-category";

async function Category() {
  const data = await getDetailCategoriesData();
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitlePage text="دیتەیڵ کاتیگۆری " />
        <ModalAddDetailCategories />
      </div>
      <div className="my-10">
        <DataTable
          columns={column}
          data={data || []}
          isSearch
          nameSearch="name"
        />
      </div>
    </div>
  );
}

export default Category;
