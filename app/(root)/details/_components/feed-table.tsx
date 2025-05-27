import React from "react";
import { DataTable } from "@/components/reusable/table";
import column from "./column";
import { getDetailCategoriesData } from "../_lib";

async function FeedTable({ searchParams }: SearchParamsTypeUse) {
  const category_id = ((await searchParams)?.category_id as string) || "";
  const data = await getDetailCategoriesData(category_id);
  return (
    <DataTable columns={column} data={data || []} isSearch nameSearch="name" />
  );
}

export default FeedTable;
