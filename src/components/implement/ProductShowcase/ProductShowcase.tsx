"use client";

import Image from "next/image";
import React, { useState } from "react";
import type { FC } from "react";
import ImageMagnifier from "./ImageMagnifier";
import { data } from "./data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  images?: string[];
  name: string;
}

const ProductShowcase: FC<ProductShowcaseProps> = ({
  images,
  name,
  className,
  ...props
}) => {
  const [mainImage, setMainImage] = useState({
    src: images?.[0] ?? "",
    index: 0,
  });
  return (
    <div
      className={cn(
        "grid gap-4 grid-rows-[300px,70px] grid-cols-4 md:grid-rows-[repeat(4,calc(50px+5vw))] md:grid-cols-[calc(50px+5vw),1fr] md:grid-flow-col",
        className
      )}
      {...props}
    >
      <ImageMagnifier
        src={mainImage.src}
        alt={`${name} product image`}
        className="bg-secondary col-span-full md:col-span-1 md:col-start-2 md:row-span-full"
      />

      {images?.map(
        (image, i) =>
          i < 4 && (
            <Button
              key={i}
              onClick={() => setMainImage({ src: image, index: i })}
              className={cn({
                "p-0 h-full w-full bg-transparent md:col-start-1": true,
                "border-2 border-primary": mainImage.index === i,
              })}
            >
              <Image
                src={image}
                alt={`${name} product image`}
                width={115}
                height={79}
                className="bg-secondary object-contain w-full h-full rounded-sm p-2 md:p-4"
              />
            </Button>
          )
      )}
    </div>
  );
};

export default ProductShowcase;
