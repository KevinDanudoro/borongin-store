"use client";

import Image from "next/image";
import React, { useState } from "react";
import type { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { data } from "./data";

interface CartTableProps {}

const CartTable: FC<CartTableProps> = ({}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted *:text-foreground">
          <TableHead className="w-max">Product</TableHead>
          <TableHead className="w-[250px]">Price</TableHead>
          <TableHead className="w-[250px]">Quantity</TableHead>
          <TableHead className="text-right w-[200px]">Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((value) => (
          <TableRow key={value.name}>
            <TableCell className="font-medium flex flex-row gap-4 items-center">
              <Image
                src={value.image}
                alt={value.name + " image"}
                width={64}
                height={64}
              />
              <p>{value.name}</p>
            </TableCell>
            <TableCell>Rp.{value.price.toLocaleString("id-ID")}</TableCell>
            <TableCell>
              <Input
                type="number"
                className="w-20"
                defaultValue={value.quantity}
                // onChange={}
              />
            </TableCell>
            <TableCell className="text-right">
              Rp.{(value.price * value.quantity).toLocaleString("id-ID")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CartTable;
