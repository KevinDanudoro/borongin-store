import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import type { FC } from "react";

interface ProductCardLoadingProps {}

const ProductCardLoading: FC<ProductCardLoadingProps> = ({}) => {
  return (
    <div className="w-44 space-y-3 hidden [&:nth-child(n+4)]:!block md:[&:nth-child(n+3)]:!block lg:md:[&:nth-child(n)]:!block">
      <Skeleton className="w-full h-44 md:h-52" />
      <Skeleton className="w-ful h-5 md:h-7" />
    </div>
  );
};

export default ProductCardLoading;
