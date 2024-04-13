"use client";

import { Input } from "@/components/ui/input";
import useSearchInput from "@/hooks/components/useSearchInput";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import type { FC } from "react";

interface SearchInputProps extends React.HTMLAttributes<HTMLDivElement> {}

const SearchInput: FC<SearchInputProps> = ({ className, ...props }) => {
  const searchInput = useSearchInput();

  return (
    <div className={cn("relative md:max-w-72 text-sm", className)} {...props}>
      <Input
        type="text"
        placeholder="What are you looking for?"
        className="pr-10 overflow-ellipsis bg-secondary search"
        {...searchInput}
      />
      <Search className="absolute right-2 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default SearchInput;
