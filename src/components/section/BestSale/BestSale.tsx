import { Button } from "@/components/ui/button";
import Flag from "@/components/ui/flag";
import Heading2 from "@/components/ui/heading2";
import ProductCard from "@/components/implement/ProductCard";
import React from "react";
import type { FC } from "react";
import { getProductsController } from "@/controller/product";

interface BestSaleProps {}

const BestSale: FC<BestSaleProps> = async ({}) => {
  const { data: products, statusCode } = await getProductsController();

  return (
    <>
      <Flag className="mb-4">{"This Month"}</Flag>
      <div className="flex flex-row justify-between items-center mb-8">
        <Heading2>Best Selling Products</Heading2>
        <Button className="px-10">View All</Button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 md:gap-8">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            imageSrc={product.imageUrl[0]}
            rating={0}
            isWishlist={product.isWishlist ?? false}
            isCart={product.isCart ?? false}
          />
        ))}
      </div>
    </>
  );
};

export default BestSale;
