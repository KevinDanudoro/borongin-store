"use client";

import React, { useState } from "react";
import type { FC } from "react";
import Image from "next/image";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import { ProductCardProps } from ".";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { addUserCartController } from "@/controller/user";
import { useToast } from "@/components/ui/use-toast";

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  imageSrc,
  price,
  discount,
  rating,
  isWishlist,
  className,
  ...props
}) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const discountPrice = discount ? price - Math.ceil(price * discount) : 0;

  const handleOnAddCartClick = async () => {
    setIsLoading(true);
    const user = await addUserCartController(id);
    setIsLoading(false);
    if (!user)
      toast({
        variant: "destructive",
        title: "Failed adding product to cart",
        description: "Please try again later.",
      });
    else
      toast({
        variant: "success",
        title: "Success adding product to cart",
        description: "Let check your cart",
      });
  };

  return (
    <div className={cn("space-y-2 group/container", className)} {...props}>
      <div className="w-full aspect-square relative bg-secondary rounded-md overflow-hidden">
        <Link href={"/product/1"}>
          <Image
            src={imageSrc}
            alt="Product images"
            width={256}
            height={256}
            className="object-contain w-full p-8"
          />
        </Link>
        {discount && (
          <small className="bg-primary px-2 py-1 rounded-md absolute top-4 left-4 text-primary-foreground">
            -{Math.floor(discount * 100)}%
          </small>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-3">
          {isWishlist !== undefined && (
            <Button
              size="icon"
              variant="link"
              className="bg-background text-foreground rounded-full w-fit h-fit p-2 group"
            >
              <Heart
                size={18}
                className={cn({
                  "fill-white group-hover:fill-red-500 stroke-red-500 transition-colors":
                    true,
                  "fill-red-500 stroke-red-500": isWishlist === true,
                })}
              />
            </Button>
          )}

          <Button
            size="icon"
            variant="link"
            className="bg-background text-foreground rounded-full w-fit h-fit p-2 group"
          >
            <Eye
              size={18}
              className="group-hover:scale-y-125 transition-transform"
            />
          </Button>
        </div>

        <button
          className="absolute left-0 right-0 bottom-0 bg-foreground text-background h-10 translate-y-[100%] group-hover/container:translate-y-0 z-10 transition-all flex justify-center items-center flex-row gap-4 hover:bg-primary cursor-pointer w-full disabled:bg-secondary disabled:hover:bg-secondary disabled:text-secondary-foreground disabled:hover:text-secondary-foreground disabled:cursor-wait"
          onClick={() => handleOnAddCartClick()}
          disabled={isLoading}
        >
          <ShoppingCart /> Add To Cart
        </button>
      </div>

      <Link href={"/product/1"} className="block space-y-2">
        <h3 className="text-base text-foreground font-semibold line-clamp-1 group-hover/container:underline">
          {name}
        </h3>

        {discount ? (
          <small className="text-xs text-primary">
            Rp.{discountPrice.toLocaleString("id-ID")}
            <span className="text-secondary-foreground line-through ml-2">
              Rp.{price.toLocaleString("id-ID")}
            </span>
          </small>
        ) : (
          <small className="text-xs text-primary">
            Rp.{price.toLocaleString("id-ID")}
          </small>
        )}

        <small className="text-secondary-foreground flex gap-2 items-center text-xs">
          <Rating rating={rating} />
          {rating}
        </small>
      </Link>
    </div>
  );
};

export default ProductCard;
