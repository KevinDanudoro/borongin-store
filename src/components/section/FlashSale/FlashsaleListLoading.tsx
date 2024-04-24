import ProductCardLoading from "@/components/implement/ProductCard/ProductCardLoading";
import React from "react";
import type { FC } from "react";

interface FlashsaleListLoadingProps {}

const FlashsaleListLoading: FC<FlashsaleListLoadingProps> = ({}) => {
  return (
    <div className="w-full mx-10 md:mx-20 flex flex-row gap-4 md:gap-8">
      {Array.from({ length: 5 }).map((_, i) => (
        <ProductCardLoading key={i} />
      ))}
    </div>
  );
};

export default FlashsaleListLoading;
