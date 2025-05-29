"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { DataTableColumnHeader } from "@/components/reusable/data-table-column-header";
import { AlphaBet } from "../_lib";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical, TrashIcon } from "lucide-react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import { EditIcon } from "@/public/icons";
import AddAlphaBet from "./form/add-alpha-bet";
import ReusableDeleteDailog from "@/components/reusable/reusable-delete-dialog";
import { deleteAlphaBet } from "../_action";

const column: ColumnDef<AlphaBet>[] = [
  {
    accessorKey: "letter",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="پیت"
        className="text-right"
      />
    ),
  },
  {
    accessorKey: "order",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="ڕیزبەندی"
        className="text-right"
      />
    ),
  },

  {
    accessorKey: "meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="مانەکەی" />
    ),
  },
  {
    accessorKey: "example",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نموونە" />
    ),
  },
  {
    accessorKey: "color",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ڕەنگ" />
    ),
  },
  {
    accessorKey: "sentence",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ڕستە بە کوردی" />
    ),
  },
  {
    accessorKey: "sentence_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ڕستە بە ئینگلیزی" />
    ),
  },
  {
    id: "actions",
    cell: function CellComponent({ row }) {
      const [open, setOpen] = React.useState(false);
      const handleClose = () => setOpen((prev) => !prev);
      const { id } = row.original;
      return (
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-1" align="end">
              <CustomDialog
                open={open}
                onOpenChange={setOpen}
                isFreshButtonPass
                title="گۆرانکاری"
                classContent="max-w-3xl"
                button={
                  <button className="flex justify-end gap-2 items-center font-sirwan_reguler  hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-t-lg w-full">
                    <span className="text-sm">گۆرانکاری</span>
                    <EditIcon height={18} width={18} />
                  </button>
                }
              >
                <AddAlphaBet
                  info={row.original}
                  isEdit
                  id={id}
                  handleClose={handleClose}
                />
              </CustomDialog>

              <hr className="border-gray" />
              <ReusableDeleteDailog
                title="دڵنیایت لە سڕینەوەی ئادمین"
                isFreshButtonPass
                button={
                  <button className="flex justify-end gap-2 items-center font-sirwan_reguler  hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-b-lg w-full ">
                    <span className="text-sm">سڕینەوە</span>
                    <TrashIcon height={18} width={18} />
                  </button>
                }
                actionDelete={deleteAlphaBet}
                id={id}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default column;
