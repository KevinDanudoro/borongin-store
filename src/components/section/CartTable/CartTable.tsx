"use client";

import React from "react";
import type { FC } from "react";
import {
  Table as TableRoot,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Table, flexRender } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { tableCartSchema } from "@/model/cart";

interface CartTableProps {
  table: Table<z.infer<typeof tableCartSchema>>;
}

const CartTable: FC<CartTableProps> = ({ table }) => {
  return (
    <TableRoot>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className="bg-muted *:text-foreground "
          >
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className={cn({
                  "w-auto": header.id !== "sub",
                  "w-36": header.id === "sub",
                  "min-w-48": header.id === "product",
                })}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  );
};

export default CartTable;
