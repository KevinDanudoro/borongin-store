import React from "react";
import type { FC } from "react";
import Link from "next/link";

import Flag from "@/components/ui/flag";
import Countdown from "@/components/ui/countdown";
import Heading2 from "@/components/ui/heading2";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/implement/ProductCard/ProductCard";
import { getFlashSaleProductController } from "@/controller/product";

interface FlashsaleProps {}

const Flashsale: FC<FlashsaleProps> = async ({}) => {
  const product = await getFlashSaleProductController();
  if (!product) throw new Error("Failed get flash sale product");

  return (
    <>
      <div className="px-10 md:px-20 mb-10">
        <Flag className="mb-2">{"Today's"}</Flag>
        <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-start md:items-end md:gap-10">
          <Heading2>Flash Sales</Heading2>
          <Countdown />
        </div>
      </div>

      <Carousel
        opts={{ dragFree: true, slidesToScroll: "auto" }}
        className="mb-14"
      >
        <CarouselContent className="cursor-grab active:cursor-grabbing select-none m-0 mx-10 md:mx-16">
          {product.map((_, i) => (
            <CarouselItem
              className="px-1 md:px-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              key={i}
            >
              <ProductCard
                name="S Series Chair"
                price={100000 * (i + 1)}
                discount={0.05 * (i + 1)}
                imageSrc="/image/product.png"
                rating={4.3}
                isWishlist={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex -top-14 right-32 left-auto bg-secondary border-none" />
        <CarouselNext className="hidden md:inline-flex -top-14 right-20 left-auto bg-secondary border-none" />
      </Carousel>

      <Link href={"/"} className="w-fit mx-auto block">
        <Button>View All Products</Button>
      </Link>
    </>
  );
};

export default Flashsale;
