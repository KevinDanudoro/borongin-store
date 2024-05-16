"use client";

import React from "react";
import type { FC } from "react";
import {
  Heart,
  MessageCircle,
  Minus,
  Plus,
  Share,
  ShoppingCart,
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSubmitProduct from "@/hooks/components/useSubmitProduct";
import { Separator } from "@/components/ui/separator";

interface ProductFormProps {
  productId: string;
}

const ProductForm: FC<ProductFormProps> = ({ productId }) => {
  const { form, onSubmit } = useSubmitProduct(productId);

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="grid grid-cols-[1fr,1fr,auto] gap-4">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-row items-center relative">
                    <Button
                      type="button"
                      onClick={() =>
                        field.onChange(
                          field.value > 1 ? field.value - 1 : field.value
                        )
                      }
                      className="flex-1 w-10 p-0 aspect-square absolute left-0 top-0 bottom-0 rounded-r-none"
                    >
                      <Minus />
                    </Button>
                    <Input
                      readOnly={true}
                      className="focus-visible:border-1 focus-visible:border-border text-center"
                      {...field}
                    />
                    <Button
                      type="button"
                      onClick={() => field.onChange(field.value + 1)}
                      className="flex-1 w-10 p-0 aspect-square absolute right-0 top-0 bottom-0 rounded-l-none"
                    >
                      <Plus />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="first-letter:uppercase" />
              </FormItem>
            )}
          />

          <Button type="submit">Buy Now</Button>

          <Button type="button" variant="outline" className="p-2 aspect-square">
            <ShoppingCart />
          </Button>

          <div className="*:text-foreground/80 flex flex-row gap-4 *:text-sm hover:*:text-foreground col-span-full">
            <Button type="button" variant="link" className="p-0">
              <Heart className="mr-2 w-5 aspect-square" /> Wishlist
            </Button>

            <Separator orientation="vertical" />

            <Button type="button" variant="link" className="p-0">
              <Share className="mr-2 w-5 aspect-square" /> Share
            </Button>

            <Separator orientation="vertical" />

            <Button type="button" variant="link" className="p-0">
              <MessageCircle className="mr-2 w-5 aspect-square" /> Chat
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
