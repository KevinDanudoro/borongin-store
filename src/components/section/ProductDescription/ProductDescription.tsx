import Rating from "@/components/ui/rating";
import { Separator } from "@/components/ui/separator";
import React from "react";
import type { FC } from "react";

interface ProductDescriptionProps {
  name: string;
  desc: string;
  rating: number;
  price: number;
  reviews: number;
}

const ProductDescription: FC<ProductDescriptionProps> = ({
  name,
  desc,
  rating,
  price,
  reviews,
}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">{name}</h2>

      <div className="flex flex-row items-center gap-2 h-7">
        <Rating rating={4} />
        <small className="text-secondary-foreground">({reviews} reviews)</small>
        <Separator orientation="vertical" />
        <p className="capitalize text-green-700 font-medium">in stock</p>
      </div>

      <p className="text-xl">Rp.{price.toLocaleString("id-ID")}</p>

      <p className="text-sm text-balance">{desc}</p>
    </>
  );
};

export default ProductDescription;
