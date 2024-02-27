import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import type { FC } from "react";
import { ProductCarouselProps } from ".";

const ProductCarousel: FC<ProductCarouselProps> = ({ children, ...props }) => {
  return (
    <Carousel {...props}>
      <CarouselContent className="mx-10 md:mx-20 gap-4 md:gap-6 cursor-grab active:cursor-grabbing select-none">
        {children?.map((child, i) => (
          <CarouselItem
            key={i}
            className="pl-0 bg-red-200 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex -top-14 right-32 left-auto" />
      <CarouselNext className="hidden md:inline-flex -top-14 right-20 left-auto" />
    </Carousel>
  );
};

export default ProductCarousel;
