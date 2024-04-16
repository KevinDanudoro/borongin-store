import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import type { FC } from "react";

interface FlashsaleListLoadingProps {}

const FlashsaleListLoading: FC<FlashsaleListLoadingProps> = ({}) => {
  return (
    <div className="w-full mx-10 md:mx-20 flex flex-row gap-4 md:gap-8">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          className="w-44 space-y-3 hidden [&:nth-child(n+4)]:!block md:[&:nth-child(n+3)]:!block lg:md:[&:nth-child(n)]:!block"
          key={i}
        >
          <Skeleton className="w-full h-44 md:h-52" />
          <Skeleton className="w-ful h-5 md:h-7" />
        </div>
      ))}
    </div>
  );
};

export default FlashsaleListLoading;
