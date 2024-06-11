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
import { useGetCart } from "@/hooks/query/cart";
import { createCartTransactionController } from "@/controller/transaction";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface PageProps {}

const Page: FC<PageProps> = () => {
  const form = useForm<z.infer<typeof createTransactionSchema>>({
    resolver: zodResolver(createTransactionSchema),
  });
  const { toast } = useToast();
  const router = useRouter();

  const { data: cartData } = useGetCart();
  const totalPrice = cartData?.data?.length
    ? cartData.data
        .map((data) => data.product.price * data.quantity)
        .reduce((a, b) => a + b)
    : 0;

  const handleOrderProduct = async (
    data: z.infer<typeof createTransactionSchema>
  ) => {
    const transactionResponse = await createCartTransactionController();

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

    snap.pay(transactionResponse.data.transactionToken, {
      onSuccess: (_) => {
        router.replace("/");
      },
      onPending: (_) => {
        toast({
          variant: "destructive",
          title: "Transaction is in pending",
          description: "Please pay your order before expire",
        });
      },
      onError: (result) => {
        toast({
          variant: "destructive",
          title: "Error occured on transaction",
          description: result.status_message,
        });
      },
      onClose: () => {
        toast({
          variant: "destructive",
          title: "Transaction is canceled",
        });
      },
    });
  };

  return (
    <main>
      <Form {...form}>
        <form
          className="flex flex-col my-10 md:flex-row space-y-12"
          onSubmit={form.handleSubmit((value) => handleOrderProduct(value))}
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
            {cartData?.data?.map((cart) => (
              <div className="flex gap-2 items-center" key={cart.product._id}>
                <Image
                  src={cart.product.imageUrl[0] || ""}
                  alt={cart.product.name + " product"}
                  width={64}
                  height={64}
                />
                <p className="text-sm">{cart.product.name} </p>
                <small className="ml-auto text-sm">
                  Rp.{cart.product.price.toLocaleString("id-ID")}
                  <span className="text-xs opacity-70 ml-2">
                    x{cart.quantity}
                  </span>
                </small>
              </div>
            ))}

            <div className="mt-4 space-y-3">
              <div className="flex gap-2 items-center">
                <p>Subtotal</p>
                <small className="ml-auto text-sm">
                  Rp.{totalPrice.toLocaleString("id-ID")}
                </small>
              </div>

              <Separator />
              <div className="flex gap-2 items-center">
                <p>Shipping</p>
                <small className="ml-auto text-sm">Rp.0</small>
              </div>

              <Separator />
              <div className="flex gap-2 items-center">
                <p>Total</p>
                <small className="ml-auto text-sm">
                  Rp.{totalPrice.toLocaleString("id-ID")}
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
