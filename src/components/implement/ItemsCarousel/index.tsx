import React from "react";
import type { FC } from "react";
import ItemsCarousel from "./ItemsCarousel";
import { CarouselProps } from "@/components/ui/carousel";

export interface ItemsCarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CarouselProps {
  children?: React.ReactNode[] | React.ReactNode;
}

const Index: FC<ItemsCarouselProps> = (props) => {
  return <ItemsCarousel {...props} />;
};

export default Index;
