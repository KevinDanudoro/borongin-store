import React from "react";
import type { FC } from "react";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import { ProductCardProps } from ".";
import { cn } from "@/lib/utils";

const ProductCard: FC<ProductCardProps> = ({
  name,
  imageSrc,
  price,
  discount,
  rating,
  isWishlist,
  className,
  ...props
}) => {
  const discountPrice = price - Math.ceil(price * discount);

  return (
    <div className={cn("space-y-2", className)} {...props}>
      <div className="w-full aspect-square relative bg-secondary rounded-md">
        <Image
          src={imageSrc}
          alt="Product images"
          width={256}
          height={256}
          className="object-contain w-full p-8"
        />
        <small className="bg-primary px-2 py-1 rounded-md absolute top-4 left-4 text-primary-foreground">
          -{Math.floor(discount * 100)}%
        </small>

        <Button
          size="icon"
          variant="link"
          className="bg-background text-foreground absolute top-4 right-4 rounded-full w-fit h-fit p-2 group"
        >
          <Heart
            size={18}
            className={cn({
              "fill-white group-hover:fill-red-500 stroke-red-500 transition-colors":
                true,
              "fill-red-500 stroke-red-500": isWishlist,
            })}
          />
        </Button>

        <Button
          size="icon"
          variant="link"
          className="bg-background text-foreground absolute top-16 right-4 rounded-full w-fit h-fit p-2 group"
        >
          <Eye
            size={18}
            className="group-hover:scale-y-125 transition-transform"
          />
        </Button>
      </div>

      <h3 className="text-base text-foreground font-semibold line-clamp-1">
        {name}
      </h3>

      <small className="text-xs text-primary">
        Rp.{discountPrice.toLocaleString("id-ID")}
        <span className="text-secondary-foreground line-through ml-2">
          Rp.{price.toLocaleString("id-ID")}
        </span>
      </small>

      <small className="text-secondary-foreground flex gap-2 items-center text-xs">
        <Rating rating={rating} />
        {rating}
      </small>
    </div>
  );
};

export default ProductCard;
