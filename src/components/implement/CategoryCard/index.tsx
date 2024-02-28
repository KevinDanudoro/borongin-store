import React from "react";
import type { FC } from "react";
import CategoryCard from "./CategoryCard";
import { LucideIcon } from "lucide-react";

export interface CategoryCardProps {
  icon: LucideIcon;
  category: string;
}

const Index: FC<CategoryCardProps> = (props) => {
  return <CategoryCard {...props} />;
};

export default Index;
