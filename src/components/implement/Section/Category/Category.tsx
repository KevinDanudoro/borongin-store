import React from "react";
import type { FC } from "react";
import { Phone } from "lucide-react";

import Flag from "@/components/ui/flag";
import Heading2 from "@/components/ui/heading2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "@/components/implement/CategoryCard";
import { CategoryProps } from ".";

const Category: FC<CategoryProps> = ({}) => {
  return (
    <>
      <Flag className="mb-4">{"Categories"}</Flag>
      <Heading2 className="mb-8">Browse By Category</Heading2>

      <Carousel opts={{ dragFree: true, slidesToScroll: "auto" }} className="">
        <CarouselContent className="cursor-grab active:cursor-grabbing select-none m-0">
          {Array.from({ length: 7 }).map((_, i) => (
            <CarouselItem
              className="px-1 md:px-3 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              key={i}
            >
              <CategoryCard icon={Phone} category="SmartPhone" active={false} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex -top-14 right-16 left-auto bg-secondary border-none" />
        <CarouselNext className="hidden md:inline-flex -top-14 right-5 left-auto bg-secondary border-none" />
      </Carousel>
    </>
  );
};

export default Category;
