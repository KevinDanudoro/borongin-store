"use client";

import React, { useMemo } from "react";
import type { FC } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionLayout from "@/components/layout/SectionLayout";
import CartTotal from "@/components/section/CartTotal/CartTotal";
import CartTable from "@/components/section/CartTable/CartTable";
import Coupon from "@/components/section/Coupon/Coupon";
import useCartTable from "@/hooks/useCartTable";
import { columns, data } from "./table";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const { table, data: tableData } = useCartTable(data, columns);
  const subTotal = useMemo(() => {
    const tableSubData = tableData
      .map((value) => value.price * value.quantity)
      .reduce((a, b) => a + b);

    return tableSubData;
  }, [tableData]);

  return (
    <SectionLayout>
      <h2 className="text-xl my-10 font-semibold searching">Cart (4)</h2>
      <CartTable table={table} />

      <Separator className="h-0 my-10" />

      <Link href={""}>
        <Button variant="outline">Return To Shop</Button>
      </Link>

      <Separator className="h-0 my-10" />

      <div className="grid grid-rows-[auto,auto] md:grid-cols-2 gap-8 md:gap-16">
        <Coupon />

        <CartTotal subTotal={subTotal} />
      </div>

      <Separator className="h-0 mb-10" />
    </SectionLayout>
  );
};

export default Page;
