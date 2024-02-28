import React from "react";
import type { FC } from "react";
import { CategoryCardProps } from ".";

const CategoryCard: FC<CategoryCardProps> = ({ icon, category }) => {
  const Icon = icon;
  return (
    <div className="bg-background border border-secondary-foreground/60 flex flex-col justify-center items-center gap-6 aspect-square">
      <Icon className="h-8 md:h-10 w-8 md:w-10" />
      <p className="text-base font-normal capitalize">{category}</p>
    </div>
  );
};

export default CategoryCard;
