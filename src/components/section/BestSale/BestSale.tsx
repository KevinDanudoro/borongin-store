import { Button } from "@/components/ui/button";
import Flag from "@/components/ui/flag";
import Heading2 from "@/components/ui/heading2";
import ProductCard from "@/components/implement/ProductCard";
import React from "react";
import type { FC } from "react";

interface BestSaleProps {}

const BestSale: FC<BestSaleProps> = ({}) => {
  return (
    <>
      <Flag className="mb-4">{"This Month"}</Flag>
      <div className="flex flex-row justify-between items-center mb-8">
        <Heading2>Best Selling Products</Heading2>
        <Button className="px-10">View All</Button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-4 gap-y-8 md:flex flex-row justify-between">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCard
            id={"1"}
            key={i}
            name="S Series Chair"
            price={100000 * (i + 1)}
            imageSrc="/image/product.png"
            rating={4.3}
            isWishlist={false}
          />
        ))}
      </div>
    </>
  );
};

export default BestSale;
