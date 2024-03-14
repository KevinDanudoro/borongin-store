import React from "react";
import type { FC } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriceFilter from "./PriceFilter";

interface FilterSearchProps {
  trigger: React.ReactNode;
}

const FilterSearch: FC<FilterSearchProps> = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild={true}>{trigger}</DialogTrigger>
      <DialogContent className="w-[50vw] max-w-xl max-h-[60vh] overflow-y-auto">
        <DialogHeader className="h-fit">
          <DialogTitle className="text-xl">Filter Options</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="account">
          <TabsList className="w-full flex">
            <TabsTrigger className="flex-1" value="price">
              Price
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="rating">
              Rating
            </TabsTrigger>
          </TabsList>

          <TabsContent value="price">
            <PriceFilter />
          </TabsContent>
          <TabsContent value="rating">Change your password here.</TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default FilterSearch;
