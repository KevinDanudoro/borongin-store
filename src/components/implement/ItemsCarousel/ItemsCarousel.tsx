import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import type { FC } from "react";
import { ItemsCarouselProps } from ".";
import { cn } from "@/lib/utils";

const ItemsCarousel: FC<ItemsCarouselProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Carousel {...props}>
      <CarouselContent
        className={cn(
          "gap-4 md:gap-6 cursor-grab active:cursor-grabbing select-none m-0",
          className
        )}
      >
        {Array.isArray(children) ? (
          children?.map((child, i) => (
            <CarouselItem
              key={i}
              className="pl-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              {child}
            </CarouselItem>
          ))
        ) : (
          <CarouselItem className="pl-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
            {children}
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex -top-14 right-32 left-auto bg-secondary" />
      <CarouselNext className="hidden md:inline-flex -top-14 right-20 left-auto bg-secondary" />
    </Carousel>
  );
};

export default ItemsCarousel;
