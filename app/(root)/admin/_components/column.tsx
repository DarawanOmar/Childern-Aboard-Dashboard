"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { DataTableColumnHeader } from "@/components/reusable/data-table-column-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import { EditIcon, TrashIcon } from "@/public/icons";
import ReusableDeleteDailog from "@/components/reusable/reusable-delete-dialog";
import { deleteAdmin } from "../_action";
import { Admin } from "../_lib";
import AddAdmin from "./form/add-admin";

const column: ColumnDef<Admin>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="ناو"
        className="flex justify-start items-start text-right"
      />
    ),
    cell: ({ row }) => {
      const name = row.original.name;
      const imageUrl = row.original.image_url;
      return (
        <div className="flex items-center gap-2">
          <img
            src={imageUrl as string}
            alt="Category"
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-sm text-foreground ">{name}</span>
        </div>
      );
    },
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
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="کاتی دروستکردن" />
    ),
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");
      return (
        <div className="flex justify-center">
          <span className="text-sm">
            {new Date(createdAt as string).toLocaleDateString()}
          </span>
        </div>
      );
    },
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
                <AddAdmin
                  info={(() => {
                    const { id, password, ...rest } = row.original;
                    return rest;
                  })()}
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
                actionDelete={deleteAdmin}
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
