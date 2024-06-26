import ProductCard from "./ProductCard";

import React from "react";
import type { FC } from "react";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  imageSrc: string;
  price: number;
  discount?: number;
  rating: number;
  isWishlist?: boolean;
  isCart?: boolean;
}

const Index: FC<ProductCardProps> = (props) => {
  return <ProductCard {...props} />;
};

export default Index;
