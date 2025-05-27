"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MdHorizontalSplit } from "react-icons/md";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button size="sm" className="hidden h-10 lg:flex">
          <MdHorizontalSplit className="mr-2 h-4 w-4" />
          بینین
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-fit  dark:border-white/5"
      >
        <DropdownMenuLabel>پیشاندانەوەی کۆڵۆم</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            const columnDef = column?.columnDef as ColumnDef<any>;
            let headerTitle = column?.id;
            if (typeof columnDef?.header === "string") {
              headerTitle = columnDef?.header;
            } else if (typeof columnDef?.header === "function") {
              const headerContext = { column, header: column } as any;
              const headerContent = columnDef?.header(headerContext);
              headerTitle = headerContent?.props?.title || column?.id;
            }

            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize font-sirwan_reguler"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {headerTitle}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
