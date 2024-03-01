import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import type { FC } from "react";

export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  pageSize,
  currentPage,
  setPage,
}) => {
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: pageSize }).map((_, i) => (
        <Button
          key={i}
          onClick={() => setPage(i)}
          className={cn({
            "w-4 h-4 p-0 mr-2 rounded-full transition-colors duration-200 border-2 -translate-y-8":
              true,
            "border-background": i + 1 === currentPage,
            "border-secondary bg-secondary hover:border-background":
              i + 1 !== currentPage,
          })}
        />
      ))}
    </div>
  );
};

export default Pagination;
