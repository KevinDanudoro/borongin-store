import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import type { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="px-24 w-full md:px-20 md:max-w-xl md:mx-auto space-y-4">
      <Skeleton className="w-full h-20" />
      <Skeleton className="w-1/2 h-5" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <div className="flex flex-row gap-2 md:gap-8 w-full">
        <Skeleton className="grow h-10" />
        <Skeleton className="grow h-10" />
      </div>
    </div>
  );
};

export default Loading;
