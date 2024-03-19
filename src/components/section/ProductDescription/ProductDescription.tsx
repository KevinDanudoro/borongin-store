import Rating from "@/components/ui/rating";
import { Separator } from "@/components/ui/separator";
import React from "react";
import type { FC } from "react";

interface ProductDescriptionProps {}

const ProductDescription: FC<ProductDescriptionProps> = ({}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h2>

      <div className="flex flex-row items-center gap-2 h-7">
        <Rating rating={4} />
        <small className="text-secondary-foreground">(150 reviews)</small>
        <Separator orientation="vertical" />
        <p className="capitalize text-green-700 font-medium">in stock</p>
      </div>

      <p className="text-xl">Rp.100,000</p>

      <p className="text-sm text-balance">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </p>
    </>
  );
};

export default ProductDescription;
