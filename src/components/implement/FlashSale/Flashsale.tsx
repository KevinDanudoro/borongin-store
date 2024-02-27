import React from "react";
import type { FC } from "react";
import ProductCarousel from "@/components/implement/ProductsCarousel.tsx";
import Flag from "@/components/ui/flag";
import Countdown from "@/components/ui/countdown";
import Heading2 from "@/components/ui/heading2";
import ProductCard from "../ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FlashsaleProps {}

const Flashsale: FC<FlashsaleProps> = ({}) => {
  return (
    <>
      <div className="px-10 md:px-20 mb-10">
        <Flag className="mb-2">{"Today's"}</Flag>
        <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-start md:items-end md:gap-10">
          <Heading2>Flash Sales</Heading2>
          <Countdown />
        </div>
      </div>
      <ProductCarousel
        opts={{ dragFree: true, slidesToScroll: "auto" }}
        className="mb-14"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCard
            key={i}
            name="S Series Chair"
            price={100000 * (i + 1)}
            discount={0.05 * (i + 1)}
            imageSrc="/product.png"
            rating={4.3}
            isWishlist={false}
          />
        ))}
      </ProductCarousel>
      <Link href={"/"}>
        <Button className="mx-auto block">View All Products</Button>
      </Link>
    </>
  );
};

export default Flashsale;
