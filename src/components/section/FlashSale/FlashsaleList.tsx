"use client";

import React from "react";
import type { FC } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetFlashsaleProduct } from "@/hooks/query/flashsale";
import ProductCard from "@/components/implement/ProductCard/ProductCard";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FlashsaleListProps {}

const FlashsaleList: FC<FlashsaleListProps> = ({}) => {
  const { data: products, isLoading } = useGetFlashsaleProduct();

  if (isLoading)
    return (
      <div className="w-full flex flex-col items-center justify-center my-10 gap-4">
        <LoaderIcon className="animate-spin w-10 h-10" />
        <p>Loading Product</p>
      </div>
    );

  return products ? (
    <>
      <Carousel
        opts={{ dragFree: true, slidesToScroll: "auto" }}
        className="mb-14"
      >
        <CarouselContent className="cursor-grab active:cursor-grabbing select-none m-0 mx-10 md:mx-16">
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
  ) : null;
};

export default FlashsaleList;
