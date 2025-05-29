import { DataTable } from "@/components/reusable/table";
import React from "react";
import column from "./column";
import { getAlphabetData } from "../_lib";

async function FeedTable() {
  const data = await getAlphabetData();
  return (
    <DataTable
      columns={column}
      data={data || []}
      isSearch
      nameSearch="letter"
    />
  );
}

export default FeedTable;
