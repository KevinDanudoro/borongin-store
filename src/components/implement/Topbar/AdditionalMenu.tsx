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
        href={"/"}
        className={cn("text-foreground hidden md:block", className)}
        {...props}
      >
        <Heart />
      </Link>
      <Link
        href={"/"}
        className={cn("text-foreground hidden md:block", className)}
        {...props}
      >
        <ShoppingCart />
      </Link>
    </>
  );
};

export default AdditionalMenu;
