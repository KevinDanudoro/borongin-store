"use client";

import React from "react";
import type { FC } from "react";
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
import { checkoutSchema } from "@/schema/checkoutSchema";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
  });

  return (
    <main>
      <Form {...form}>
        <form
          className="flex flex-col my-10 md:flex-row space-y-12"
          onSubmit={form.handleSubmit((value) => console.log(value))}
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
                src="/image/showcase1.webp"
                alt="product image"
                width={64}
                height={64}
              />
              <p>PS5 Controller</p>
              <small className="ml-auto text-sm">Rp.100,000</small>
            </div>

            <div className="flex gap-2 items-center">
              <Image
                src="/image/showcase1.webp"
                alt="product image"
                width={64}
                height={64}
              />
              <p>PS5 Controller</p>
              <small className="ml-auto text-sm">Rp.100,000</small>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex gap-2 items-center">
                <p>Subtotal</p>
                <small className="ml-auto text-sm">Rp.200,000</small>
              </div>

              <Separator />
              <div className="flex gap-2 items-center">
                <p>Shipping</p>
                <small className="ml-auto text-sm">Rp.200,000</small>
              </div>

              <Separator />
              <div className="flex gap-2 items-center">
                <p>Total</p>
                <small className="ml-auto text-sm">Rp.200,000</small>
              </div>
            </div>

            <div>
              <FormField
                control={form.control}
                name="payment"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="bank" />
                          </FormControl>
                          <FormLabel className="font-normal">Bank</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="cod" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Cash on Delivery
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Make Order</Button>
          </SectionLayout>
        </form>
      </Form>
    </main>
  );
};

export default Page;