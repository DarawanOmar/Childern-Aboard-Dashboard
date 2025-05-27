"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../reusable/data-table-column-header";

export const columnData: ColumnDef<any>[] = [
  {
    id: "invoice_number",
    accessorKey: "invoice_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ژ.پسووڵە" />
    ),
    cell: ({ row }) => {
      return <div>{Number(row.original.price).toLocaleString()}</div>;
    },
  },
  {
    id: "name",
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ناو" />
    ),
  },
  {
    id: "build_number",
    accessorKey: "build_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ژ.شووقە" />
    ),
    cell: ({ row }) => {
      return <div>{Number(row.original.serviceMode).toLocaleString()}</div>;
    },
  },
  {
    id: "electric",
    accessorKey: "electric",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="کارەبا" />
    ),
    cell: ({ row }) => {
      return <div>{Number(row.original.serviceMode).toLocaleString()}</div>;
    },
  },
  {
    id: "water",
    accessorKey: "water",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ئاو" />
    ),
    cell: ({ row }) => {
      return <div>{Number(row.original.price).toLocaleString()}</div>;
    },
  },
  {
    id: "gaz",
    accessorKey: "gaz",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="گاز" />
    ),
    cell: ({ row }) => {
      return <div>{Number(row.original.recordMonth).toLocaleString()}</div>;
    },
  },
  {
    id: "servic",
    accessorKey: "servic",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="خزمەتگوزاری" />
    ),
    cell: ({ row }) => {
      return <div>{Number(row.original.price).toLocaleString()}</div>;
    },
  },
  {
    id: "other",
    accessorKey: "other",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="خەرجی دیکە" />
    ),
    cell: ({ row }) => {
      return <div>{Number(row.original.recordMonth).toLocaleString()}</div>;
    },
  },
  {
    id: "total",
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="کۆی گشتی" />
    ),
    cell: ({ row }) => {
      return <div>{Number(row.original.price).toLocaleString()}</div>;
    },
  },
  {
    id: "date",
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەروار" />
    ),
  },
];
