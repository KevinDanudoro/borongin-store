import React from "react";
import type { FC } from "react";
import ProductCard from "@/components/implement/ProductCard/ProductCard";
import SectionLayout from "@/components/layout/SectionLayout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import FilterDialog from "@/components/implement/FilterDialog/FilterDialog";
import { Button } from "@/components/ui/button";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <main className="pt-8 pb-16">
      <SectionLayout className="flex justify-between items-center">
        <FilterDialog
          trigger={
            <Button variant="outline" className="w-44" type="button">
              Filter by
            </Button>
          }
        />

        <Select>
          <SelectTrigger className="max-w-56">
            <SelectValue placeholder="Sorting by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="most-related">Most Related</SelectItem>
              <SelectItem value="most-reviewed">Most Reviewed</SelectItem>
              <SelectItem value="most-expensive">Most Expensive</SelectItem>
              <SelectItem value="most-cheap">Most Cheap</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SectionLayout>

      <Separator className="h-0 my-10" />

      <SectionLayout>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-4 gap-y-8">
          {Array.from({ length: 30 }).map((_, i) => (
            <ProductCard
              key={i}
              name="Gucci duffle bag"
              imageSrc="/product.png"
              isWishlist={false}
              price={100000}
              rating={4.3}
            />
          ))}
        </div>
      </SectionLayout>
    </main>
  );
};

export default Page;
