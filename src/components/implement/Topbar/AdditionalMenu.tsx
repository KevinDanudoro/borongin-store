import { cn } from "@/lib/utils";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { FC } from "react";

interface AdditionalMenuProps extends React.HTMLAttributes<HTMLAnchorElement> {}

const AdditionalMenu: FC<AdditionalMenuProps> = ({ className, ...props }) => {
  return (
    <>
      <Link
        href={"/wishlist"}
        className={cn(
          "text-foreground hover:text-primary transition-colors hidden md:block relative",
          className
        )}
        {...props}
      >
        <Heart />
        <span className="bg-primary -top-2 -right-3  h-5 w-5 grid place-items-center rounded-full absolute  text-primary-foreground text-xs font-medium">
          1
        </span>
      </Link>
      <Link
        href={"/cart"}
        className={cn(
          "text-foreground hover:text-primary transition-colors hidden md:block relative",
          className
        )}
        {...props}
      >
        <ShoppingCart />
        <span className="bg-primary -top-2 -right-3  h-5 w-5 grid place-items-center rounded-full absolute  text-primary-foreground text-xs font-medium">
          1
        </span>
      </Link>
    </>
  );
};

export default AdditionalMenu;
