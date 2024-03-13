import ProductCard from "@/components/implement/ProductCard/ProductCard";
import SectionLayout from "@/components/layout/SectionLayout";
import { Button } from "@/components/ui/button";
import React from "react";
import type { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <main>
      <SectionLayout>
        <div className="w-full flex flex-row justify-between items-center my-10">
          <h2 className="text-xl font-semibold">Wishlist (4)</h2>
          <Button className="px-8" variant="outline">
            Add All To Cart
          </Button>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-4 gap-y-8 mb-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCard
              key={i}
              name="Gucci duffle bag"
              imageSrc="/product.png"
              isWishlist={true}
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
