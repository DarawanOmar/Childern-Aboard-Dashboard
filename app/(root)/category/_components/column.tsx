"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { DataTableColumnHeader } from "@/components/reusable/data-table-column-header";
import { Category } from "../_lib";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import { EditIcon, TrashIcon } from "@/public/icons";
import AddCategories from "./form/add-category";
import ReusableDeleteDailog from "@/components/reusable/reusable-delete-dialog";
import { deleteCategory } from "../_action";

const column: ColumnDef<Category>[] = [
  {
    accessorKey: "label",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="ناوی ئینگلیزی"
        className="text-right"
      />
    ),
  },
  {
    accessorKey: "label_ar",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="ناوی کوردی"
        className="text-right"
      />
    ),
  },

  {
    accessorKey: "image_url",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وێنە" />
    ),
    cell: ({ row }) => {
      const imageUrl = row.getValue("image_url");
      return (
        <div className="flex justify-center">
          <img
            src={imageUrl as string}
            alt="Category"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      );
    },
  },

  {
    accessorKey: "icon",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ئایکۆن" />
    ),
  },
  {
    accessorKey: "color",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ڕەنگ" />
    ),
  },
  {
    id: "actions",
    cell: function CellComponent({ row }) {
      const [open, setOpen] = React.useState(false);
      const [openSale, setOpenSale] = React.useState(false);
      const handleClose = () => setOpen((prev) => !prev);
      const handleCloseSale = () => setOpenSale((prev) => !prev);
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
                <AddCategories
                  info={(() => {
                    const { id, ...rest } = row.original;
                    return rest;
                  })()}
                  isEdit
                  id={id}
                  handleClose={handleClose}
                />
              </CustomDialog>

              <hr className="border-gray" />
              <ReusableDeleteDailog
                title="دڵنیایت لە سڕینەوەی کاتیگۆری"
                isFreshButtonPass
                button={
                  <button className="flex justify-end gap-2 items-center font-sirwan_reguler  hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-b-lg w-full ">
                    <span className="text-sm">سڕینەوە</span>
                    <TrashIcon height={18} width={18} />
                  </button>
                }
                actionDelete={deleteCategory}
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
