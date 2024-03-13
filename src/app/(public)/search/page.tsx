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
import React from "react";
import type { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <main className="pt-8 pb-16">
      <SectionLayout className="flex justify-between items-center">
        <p>dialog</p>

        <Select defaultValue="most-related">
          <SelectTrigger className="max-w-56">
            <SelectValue />
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
