import React from "react";
import { DataTable } from "@/components/reusable/table";
import column from "./column";
import { getFeedbackData } from "../_lib";

async function FeedTable({ searchParams }: SearchParamsTypeUse) {
  const type = ((await searchParams).type as string) || "Other";
  const data = await getFeedbackData(type);
  return (
    <DataTable columns={column} data={data || []} isSearch nameSearch="type" />
  );
}

export default FeedTable;
