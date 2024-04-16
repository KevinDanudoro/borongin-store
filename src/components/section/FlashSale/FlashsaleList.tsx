import React from "react";
import type { FC } from "react";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/implement/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { getFlashsaleProductsController } from "@/controller/product";
import cookieParser from "@/lib/cookie";
import FlashsaleListError from "./FlashsaleListError";
import FlashsaleListEmpty from "./FlashsaleListEmpty";

interface FlashsaleListProps {}

const FlashsaleList: FC<FlashsaleListProps> = async ({}) => {
  const { data: products, statusCode } = await getFlashsaleProductsController(
    cookieParser()
  );

  if (statusCode !== 200) return <FlashsaleListError />;

  return products && products.length > 0 ? (
    <>
      <Carousel opts={{ dragFree: true, slidesToScroll: "auto" }}>
        <CarouselContent className="cursor-grab active:cursor-grabbing select-none m-0 mx-10 md:mx-16 mb-8">
          {products.map((product, i) => (
            <CarouselItem
              className="px-1 md:px-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              key={i}
            >
              <ProductCard
                name={product.name}
                price={product.price}
                discount={0.05 * (i + 1)}
                imageSrc={product.imageUrl[0]}
                rating={product.rating}
                isWishlist={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex -top-14 right-32 left-auto bg-secondary border-none" />
        <CarouselNext className="hidden md:inline-flex -top-14 right-20 left-auto bg-secondary border-none" />

        <Link href={"/"} className="w-fit mx-auto block">
          <Button>View All Products</Button>
        </Link>
      </Carousel>
    </>
  ) : (
    <FlashsaleListEmpty />
  );
};

export default FlashsaleList;
