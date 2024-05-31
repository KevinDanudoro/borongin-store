"use client";

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
import FlashsaleListEmpty from "./FlashsaleListEmpty";
import { Button } from "@/components/ui/button";
import { useGetProducts } from "@/hooks/query/product";
import FlashsaleListError from "./FlashsaleListError";
import FlashsaleListLoading from "./FlashsaleListLoading";

interface FlashsaleListProps {}

const FlashsaleList: FC<FlashsaleListProps> = ({}) => {
  const { data: response, isLoading } = useGetProducts();

  if (isLoading) return <FlashsaleListLoading />;
  if (!response || response.statusCode !== 200) return <FlashsaleListError />;

  const { data: products } = response;

  return products && products.length > 0 ? (
    <>
      <Carousel opts={{ dragFree: true, slidesToScroll: "auto" }}>
        <CarouselContent className="cursor-grab active:cursor-grabbing select-none m-0 mx-10 md:mx-16 mb-8">
          {products.map((product) => (
            <CarouselItem
              className="px-2 md:px-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              key={product._id}
            >
              <ProductCard
                id={product._id}
                name={product.name}
                price={product.price}
                discount={0}
                imageSrc={product.imageUrl[0]}
                rating={product.rating}
                isWishlist={product.isWishlist ?? false}
                isCart={product.isCart ?? false}
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
