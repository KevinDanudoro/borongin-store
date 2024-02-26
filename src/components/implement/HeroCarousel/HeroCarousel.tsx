"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import Pagination from "./Pagination";
import useCarouselPagination from "@/hooks/useCarouselPagination";
import { Apple, ArrowRight } from "lucide-react";

interface HeroCarouselProps {}

const HeroCarousel: FC<HeroCarouselProps> = ({}) => {
  const [api, setApi] = useState<CarouselApi>();
  const pagination = useCarouselPagination(api);

  return (
    <Carousel
      setApi={setApi}
      plugins={[Autoplay({ delay: 5000 })]}
      className="w-full px-10 md:px-20 py-10"
    >
      <CarouselContent className="ml-4 first:ml-0 cursor-grab active:cursor-grabbing">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="flex flex-col md:flex-row justify-between items-center gap-4 bg-foreground text-background w-full h-96 rounded-md mr-4 px-10 md:px-16 py-8 select-none"
          >
            <div className="space-y-2 md:space-y-6 flex-1">
              <h1 className="flex flex-row gap-4 text-base md:text-lg font-normal items-center">
                <Apple className="h-8 w-8 md:h-12 md:w-12" /> iPhone 14 Series
              </h1>

              <h2 className="text-2xl md:text-6xl font-semibold line-clamp-2">
                Up to 10% off Voucher
              </h2>

              <Link
                href="/"
                className="flex flex-row gap-4 font-normal w-fit border-b-2 pb-2 cursor-pointer hover:border-primary transition-colors"
              >
                Shop Now <ArrowRight />
              </Link>
            </div>

            <Image
              src="/hero-carousel.png"
              alt="Iphone 14 Series"
              className="h-full object-contain flex-1"
              height={512}
              width={512}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <Pagination
        currentPage={pagination.currentPage}
        pageSize={pagination.pageSize}
        setPage={(page: number) => api?.scrollTo(page, false)}
      />
    </Carousel>
  );
};

export default HeroCarousel;
