"use client";

import { Suspense } from "react";
import { DataTable } from "../reusable/table";
import column from "@/app/(root)/details/_components/column";

export function TableFallback() {
  return (
    <Suspense>
      <DataTable isLoading data={[]} columns={column} />
    </Suspense>
  );
}
