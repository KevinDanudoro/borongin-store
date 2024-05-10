"use client";

import React from "react";
import type { FC } from "react";

import ProductCard from "@/components/implement/ProductCard/ProductCard";
import SectionLayout from "@/components/layout/SectionLayout";
import { Button } from "@/components/ui/button";
import { useGetWishlist } from "@/hooks/query/wishlist";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const { data: products } = useGetWishlist();

  return (
    <main>
      <SectionLayout>
        <div className="w-full flex flex-row justify-between items-center my-10">
          <h2 className="text-xl font-semibold">
            Wishlist ({products?.data?.length ?? 0})
          </h2>
          <Button className="px-8" variant="outline">
            Add All To Cart
          </Button>
        </div>
      </SectionLayout>

      <SectionLayout>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-4 gap-y-8 mb-20">
          {products && products.data
            ? products.data.map((product) => (
                <ProductCard
                  id={product._id}
                  key={product._id}
                  name={product.name}
                  imageSrc={product.imageUrl[0]}
                  rating={product.rating}
                  price={product.price}
                  isWishlist={product.isWishlist ?? false}
                  isCart={product.isCart ?? false}
                />
              ))
            : null}
        </div>
      </SectionLayout>
    </main>
  );
};

export default Page;
