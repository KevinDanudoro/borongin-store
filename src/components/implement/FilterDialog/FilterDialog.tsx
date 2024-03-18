"use client";

import React from "react";
import type { FC } from "react";

import {
  Dialog,
  DialogClose,
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
import { Button } from "@/components/ui/button";
import PriceInput from "./PriceInput";
import RatingCheckbox from "./RatingCheckbox";
import useFilter from "@/hooks/useFilter";

interface FilterSearchProps {
  trigger: React.ReactNode;
}

const FilterSearch: FC<FilterSearchProps> = ({ trigger }) => {
  const { form, onSubmit } = useFilter();

  return (
    <Dialog>
      <DialogTrigger asChild={true}>{trigger}</DialogTrigger>
      <DialogContent className="w-[90vw] md:w-[50vw] md:min-w-[500px] max-w-xl max-h-[60vh] overflow-y-auto">
        <DialogHeader className="h-fit">
          <DialogTitle className="text-xl">Filter Options</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-[repeat(3,auto)] gap-2 items-center">
              <h3 className="text-base font-medium col-span-full">By Price</h3>
              <FormField
                control={form.control}
                name="minPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PriceInput
                        {...field}
                        value={field.value ?? ""}
                        className="flex-1"
                        placeholder="Minimum price"
                        autoComplete="off"
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
                        {...field}
                        value={field.value ?? ""}
                        className="flex-1"
                        placeholder="Minimum price"
                        autoComplete="off"
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
                render={() => (
                  <FormItem className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] space-y-0 gap-x-8 gap-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <RatingCheckbox
                        key={i}
                        control={form.control}
                        value={`${i + 1}`}
                      />
                    ))}
                    <FormMessage className="col-start-1" />
                  </FormItem>
                )}
              />
            </div>

            <DialogClose asChild={true}>
              <Button type="submit">Apply Filter</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FilterSearch;
