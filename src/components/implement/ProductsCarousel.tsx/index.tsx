import React from "react";
import type { FC } from "react";
import ProductCarousel from "./ProductCarousel";
import { CarouselProps } from "@/components/ui/carousel";

export interface ProductCarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CarouselProps {
  children?: React.ReactNode[];
}

const Index: FC<ProductCarouselProps> = (props) => {
  return <ProductCarousel {...props} />;
};

export default Index;
