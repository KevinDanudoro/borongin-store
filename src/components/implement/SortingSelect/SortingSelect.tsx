"use client";

import React from "react";
import type { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSorting from "@/hooks/useSorting";

interface SortingSelectProps {}

const SortingSelect: FC<SortingSelectProps> = ({}) => {
  const sorting = useSorting();

  return (
    <Select {...sorting}>
      <SelectTrigger className="max-w-56">
        <SelectValue placeholder="Sorting by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup onChange={(e) => console.log(e.target)}>
          <SelectItem value="most-related">Most Related</SelectItem>
          <SelectItem value="most-reviewed">Most Reviewed</SelectItem>
          <SelectItem value="most-expensive">Most Expensive</SelectItem>
          <SelectItem value="most-cheap">Most Cheap</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortingSelect;
