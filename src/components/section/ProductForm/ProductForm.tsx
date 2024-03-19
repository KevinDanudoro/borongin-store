"use client";

import React from "react";
import type { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heart, Minus, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import useSubmitProduct from "@/hooks/useSubmitProduct";
import { buyProductSchema } from "@/schema/productSchema";

interface ProductFormProps {}

const ProductForm: FC<ProductFormProps> = ({}) => {
  const { form, onSubmit } = useSubmitProduct();

  const sizeVariant = ["xs", "s", "m", "l", "xl"];

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-row items-center">
          <p className="mr-5">Size: </p>

          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <ToggleGroup
                type="single"
                className="space-x-2"
                onValueChange={(
                  newValue: z.infer<typeof buyProductSchema>["size"]
                ) => field.onChange(newValue)}
                defaultValue={field.value}
              >
                {sizeVariant.map((value) => (
                  <ToggleGroupItem
                    key={value}
                    value={value}
                    className="text-xs aspect-square border border-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-0 uppercase"
                  >
                    {value}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
          />
        </div>

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
          <Button variant="outline" className="p-2 aspect-square">
            <Heart />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
