import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import type { FC } from "react";

interface AdditionalMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const AdditionalMenu: FC<AdditionalMenuProps> = ({ className, ...props }) => {
  return (
    <div className={cn("flex flex-row gap-2 lg:gap-4", className)} {...props}>
      <Button
        size="icon"
        variant={"link"}
        className="text-foreground hidden md:block"
      >
        <Heart />
      </Button>
      <Button
        size="icon"
        variant={"link"}
        className="text-foreground hidden md:block"
      >
        <ShoppingCart />
      </Button>
    </div>
  );
};

export default AdditionalMenu;
