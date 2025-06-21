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
import AddCategories from "./form/add-detail-category";
import ReusableDeleteDailog from "@/components/reusable/reusable-delete-dialog";
import { deleteDetailCategory } from "../_action";
import { DetailCategory } from "../_type";

const column: ColumnDef<DetailCategory>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="ناوی ئینگلیزی"
        className="text-right"
      />
    ),
  },
  {
    accessorKey: "name_ar",
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
    accessorKey: "category_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="کاتیگۆری" />
    ),
    cell: ({ row }) => {
      const categoryId = row.getValue("category_name") as string;
      return (
        <div className="flex justify-center">
          <span className="text-sm">{categoryId || "-"}</span>
        </div>
      );
    },
  },
  // {
  //   accessorKey: "location",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="ناونیشان ئینگلیزی" />
  //   ),
  // },
  // {
  //   accessorKey: "location_ar",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="ناونیشان کوردی" />
  //   ),
  // },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وەسفی ئینگلیزی" />
    ),
    cell: ({ row }) => {
      const description = row.original.description;
      return (
        <span className="text-sm line-clamp-1 hover:line-clamp-none cursor-s-resize">
          {description || "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "description_ar",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وەسفی کوردی" />
    ),
    cell: ({ row }) => {
      const descriptionAr = row.original.description_ar;
      return (
        <span className="text-sm line-clamp-1 hover:line-clamp-none cursor-s-resize">
          {descriptionAr || "-"}
        </span>
      );
    },
  },
  // {
  //   accessorKey: "long_description",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="وەسفی درێژی ئینگلیزی" />
  //   ),
  //   cell: ({ row }) => {
  //     const longDescription = row.original.long_description;
  //     return (
  //       <span className="text-sm line-clamp-1 hover:line-clamp-none cursor-s-resize">
  //         {longDescription || "-"}
  //       </span>
  //     );
  //   },
  // },
  // {
  //   accessorKey: "long_description_ar",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="وەسفی درێژی کوردی" />
  //   ),
  //   cell: ({ row }) => {
  //     const longDescriptionAr = row.original.long_description_ar;
  //     return (
  //       <span className="text-sm line-clamp-1 hover:line-clamp-none cursor-s-resize">
  //         {longDescriptionAr || "-"}
  //       </span>
  //     );
  //   },
  // },
  {
    accessorKey: "is_course",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ئایە کۆرسە" />
    ),
    cell: ({ row }) => {
      const isCourse = row.getValue("is_course");
      return (
        <div className="flex justify-center">
          <span className="text-sm">{isCourse ? "بەڵێ" : "نەخێر"}</span>
        </div>
      );
    },
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
                actionDelete={deleteDetailCategory}
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
