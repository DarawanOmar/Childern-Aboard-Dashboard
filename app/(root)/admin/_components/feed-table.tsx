import { DataTable } from "@/components/reusable/table";
import React from "react";
import column from "./column";
import { getAdminData } from "../_lib";

async function FeedTable() {
  const data = await getAdminData();
  return (
    <DataTable columns={column} data={data || []} isSearch nameSearch="name" />
  );
}

export default FeedTable;
