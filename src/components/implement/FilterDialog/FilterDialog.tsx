"use client";

import React from "react";
import type { FC } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import PriceInput from "./PriceInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterSchema } from "@/schema/fitlerSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FilterSearchProps {
  trigger: React.ReactNode;
}

const FilterSearch: FC<FilterSearchProps> = ({ trigger }) => {
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
  });
  const onSubmit = (values: z.infer<typeof filterSchema>) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild={true}>{trigger}</DialogTrigger>
      <DialogContent className="w-[90vw] md:w-[50vw] md:min-w-[500px] max-w-xl max-h-[60vh] overflow-y-auto">
        <DialogHeader className="h-fit">
          <DialogTitle className="text-xl">Filter Options</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-[repeat(3,auto)] gap-2 items-center">
              <h3 className="text-base font-medium col-span-full">By Price</h3>
              <FormField
                control={form.control}
                name="minPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PriceInput
                        className="flex-1"
                        placeholder="Minimum price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="first-letter:uppercase" />
                  </FormItem>
                )}
              />

              <span className="h-1 w-4 bg-foreground block rounded-lg" />

              <FormField
                control={form.control}
                name="maxPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PriceInput
                        className="flex-1"
                        placeholder="Minimum price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="first-letter:uppercase" />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2 items-center">
              <h3 className="text-base font-medium">By Rating</h3>
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className="first-letter:uppercase" />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit">Apply Filter</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FilterSearch;
