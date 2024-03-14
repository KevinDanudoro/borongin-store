import React from "react";
import type { FC } from "react";
import PriceInput from "./PriceInput";

interface PriceFilterProps {}

const PriceFilter: FC<PriceFilterProps> = ({}) => {
  return (
    <div className="flex flex-row gap-x-4 items-center">
      <PriceInput className="flex-1" placeholder="Minimum price" />
      <span className="h-1 w-4 bg-foreground block rounded-lg" />
      <PriceInput className="flex-1" placeholder="Maximum price" />
    </div>
  );
};

export default PriceFilter;
