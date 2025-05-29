import { DataTable } from "@/components/reusable/table";
import React from "react";
import column from "./column";
import { getUsersData } from "../_lib";

async function FeedTable() {
  const data = await getUsersData();
  return (
    <DataTable columns={column} data={data || []} isSearch nameSearch="name" />
  );
}

export default FeedTable;
