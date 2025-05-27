import { DataTable } from "@/components/reusable/table";
import React from "react";
import column from "./column";
import { getCategoriesData } from "../_lib";

async function FeedTable() {
  const data = await getCategoriesData();
  return (
    <DataTable columns={column} data={data || []} isSearch nameSearch="label" />
  );
}

export default FeedTable;
