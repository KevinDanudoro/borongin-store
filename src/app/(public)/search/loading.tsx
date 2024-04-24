import React from "react";
import type { FC } from "react";
import ProductCardLoading from "@/components/implement/ProductCard/ProductCardLoading";
import SectionLayout from "@/components/layout/SectionLayout";
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="pt-8 pb-16 space-y-8">
      <SectionLayout className="flex justify-between items-center">
        <Skeleton className="w-48 h-10" />
        <Skeleton className="w-48 h-10" />
      </SectionLayout>

      <SectionLayout className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-4 gap-y-8">
        <ProductCardLoading />
        <ProductCardLoading />
        <ProductCardLoading />
      </SectionLayout>
    </div>
  );
};

export default Loading;
