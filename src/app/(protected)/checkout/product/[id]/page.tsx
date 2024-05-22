"use client";

import React from "react";
import type { FC } from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Heading2 from "@/components/ui/heading2";
import SectionLayout from "@/components/layout/SectionLayout";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { createTransactionSchema } from "@/model/transaction";
import { useGetDetailProduct } from "@/hooks/query/product";
import { createProductTransactionController } from "@/controller/transaction";
import { useToast } from "@/components/ui/use-toast";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: {
    quantity: string;
  };
}

const Page: FC<PageProps> = ({ params, searchParams }) => {
  const quantity = parseInt(searchParams.quantity, 10) ?? 1;
  const { id: productId } = params;

  const { toast } = useToast();
  const form = useForm<z.infer<typeof createTransactionSchema>>({
    resolver: zodResolver(createTransactionSchema),
  });

  const handleOrderProduct = async (
    data: z.infer<typeof createTransactionSchema>
  ) => {
    const transactionResponse = await createProductTransactionController(
      productId,
      quantity ?? 1
    );

    if (!transactionResponse.data?.transactionToken)
      return toast({
        variant: "destructive",
        title: "Transaction token is missing",
        description: "Please try again",
      });

    const snap = window.snap;
    if (!snap)
      return toast({
        variant: "destructive",
        title: "Something went wrong on payment gateway",
        description: "Please try again later",
      });

    snap.pay(transactionResponse.data.transactionToken);
  };

  const { data: product } = useGetDetailProduct(productId);
  const shipping = 30000;

  return (
    <main>
      <Form {...form}>
        <form
          className="flex flex-col my-10 md:flex-row space-y-12"
          onSubmit={form.handleSubmit(handleOrderProduct)}
        >
          <SectionLayout className="space-y-4 flex-1">
            <Heading2>Billing Details</Heading2>

            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:text-red-600 after:ml-1">
                    Firstname
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:text-red-600 after:ml-1">
                    Street
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:text-red-600 after:ml-1">
                    City
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:text-red-600 after:ml-1">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        if (e.target.value.length === 0)
                          return field.onChange("");

                        const value = isNaN(Number(e.target.value))
                          ? field.value.toString()
                          : e.target.value;
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </SectionLayout>

          <SectionLayout className="flex-1 flex flex-col gap-y-6">
            <div className="flex gap-2 items-center">
              <Image
                src={product?.data?.imageUrl[0] ?? ""}
                alt={`${product?.data?.name ?? ""} product image`}
                width={64}
                height={64}
              />
              <p>{product?.data?.name}</p>
              <small className="ml-auto text-sm">
                Rp.{product?.data?.price?.toLocaleString("id-ID") ?? "0"}
                <span className="ml-4">x{quantity}</span>
              </small>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex gap-2 items-center">
                <p>Subtotal</p>
                <small className="ml-auto text-sm">
                  Rp.
                  {((product?.data?.price ?? 0) * quantity)?.toLocaleString(
                    "id-ID"
                  )}
                </small>
              </div>

              <Separator />
              <div className="flex gap-2 items-center">
                <p>Shipping</p>
                <small className="ml-auto text-sm">
                  Rp.{shipping.toLocaleString("id-ID")}
                </small>
              </div>

              <Separator />
              <div className="flex gap-2 items-center">
                <p>Total</p>
                <small className="ml-auto text-sm">
                  Rp.
                  {(
                    (product?.data?.price ?? 0) * quantity +
                    shipping
                  )?.toLocaleString("id-ID")}
                </small>
              </div>
            </div>

            <Button type="submit">Make Order</Button>
          </SectionLayout>
        </form>
      </Form>
    </main>
  );
};

export default Page;
