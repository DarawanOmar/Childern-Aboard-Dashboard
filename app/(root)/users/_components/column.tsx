"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { DataTableColumnHeader } from "@/components/reusable/data-table-column-header";
import { User } from "../_lib";

const column: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="ناو"
        className="text-right"
      />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="ئیمەیڵ"
        className="text-right"
      />
    ),
  },

  {
    accessorKey: "age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تەمەن" />
    ),
  },

  {
    accessorKey: "birthday",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="لەدایکبوون" />
    ),
  },
  {
    accessorKey: "state",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="پارێزگا" />
    ),
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ناونیشان" />
    ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ژ.مۆبایل" />
    ),
  },
];

export default column;
