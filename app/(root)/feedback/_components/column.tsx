"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { DataTableColumnHeader } from "@/components/reusable/data-table-column-header";
import { Feedback } from "../_lib";
import { format } from "date-fns";

const column: ColumnDef<Feedback>[] = [
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="جۆر"
        className="text-right"
      />
    ),
    cell: ({ row }) => {
      const type = row.original.type;
      return <div>{type || "-"}</div>;
    },
  },
  {
    accessorKey: "feedbackType",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="جۆری فیدباک"
        className="text-right"
      />
    ),
    cell: ({ row }) => {
      const type = row.original.feedbackType;
      return <div>{type || "-"}</div>;
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="نمرە"
        className="text-right"
      />
    ),
    cell: ({ row }) => {
      const type = row.original.rating;
      return <div>{type || "-"}</div>;
    },
  },

  {
    accessorKey: "message",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نامەکان" />
    ),
    cell: ({ row }) => {
      const type = row.original.message;
      return <div>{type || "-"}</div>;
    },
  },

  {
    accessorKey: "subject",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بابەت" />
    ),
    cell: ({ row }) => {
      const type = row.original.subject;
      return <div>{type || "-"}</div>;
    },
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەروار" />
    ),
    cell: ({ row }) => {
      const date = row.original.timestamp;
      return <div className="">{format(new Date(date), "yyyy-MM-dd")}</div>;
    },
  },
];

export default column;
