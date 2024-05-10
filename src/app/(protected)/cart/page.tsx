"use client";

import React, { useMemo } from "react";
import type { FC } from "react";
import Link from "next/link";

import SectionLayout from "@/components/layout/SectionLayout";
import CartTotal from "@/components/section/CartTotal/CartTotal";
import CartTable from "@/components/section/CartTable/CartTable";
import Coupon from "@/components/section/Coupon/Coupon";
import useCartTable from "@/hooks/components/useCartTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { columns } from "./table";
import { useGetCart } from "@/hooks/query/cart";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const { data: cartData } = useGetCart();
  const mappedCartData = useMemo(() => {
    return (
      cartData?.data?.map((cart) => ({
        _id: cart.product._id,
        name: cart.product.name,
        price: cart.product.price,
        quantity: cart.quantity,
        image: cart.product.imageUrl[0],
      })) ?? []
    );
  }, [cartData]);

  const { table, data: tableData } = useCartTable(mappedCartData, columns);
  const subTotal = useMemo(() => {
    const tableSubData =
      tableData.length > 0
        ? tableData
            .map((value) => value.price * value.quantity)
            .reduce((a, b) => a + b)
        : 0;

    return tableSubData;
  }, [tableData]);

  return (
    <main>
      <SectionLayout>
        <h2 className="text-xl my-10 font-semibold searching">
          Cart ({tableData.length})
        </h2>
      </SectionLayout>

      <SectionLayout>
        <CartTable table={table} />
      </SectionLayout>

      <Separator className="h-0 my-10" />

      <SectionLayout>
        <Link href={""}>
          <Button variant="outline">Return To Shop</Button>
        </Link>
      </SectionLayout>

      <Separator className="h-0 my-10" />

      <SectionLayout className="grid grid-rows-[auto,auto] md:grid-cols-2 gap-8 md:gap-16">
        <Coupon />
        <CartTotal subTotal={subTotal} />
      </SectionLayout>

      <Separator className="h-0 mb-10" />
    </main>
  );
};

export default Page;
