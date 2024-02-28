import React from "react";
import type { FC } from "react";
import { CategoryCardProps } from ".";
import { cn } from "@/lib/utils";

const CategoryCard: FC<CategoryCardProps> = ({ icon, category, active }) => {
  const Icon = icon;
  return (
    <div
      className={cn({
        "bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-secondary-foreground/60 flex flex-col justify-center items-center gap-4 sm:gap-6 aspect-square p-3":
          true,
        "bg-primary text-primary-foreground": active,
      })}
    >
      <Icon className="h-8 w-8 md:h-10 md:w-10" />
      <p className="text-xs sm:text-base font-normal capitalize">{category}</p>
    </div>
  );
};

export default CategoryCard;
