import React from "react";
import type { FC } from "react";
import { CategoryProps } from ".";
import Flag from "@/components/ui/flag";
import Heading2 from "@/components/ui/heading2";
import ItemsCarousel from "@/components/implement/ItemsCarousel";
import CategoryCard from "@/components/implement/CategoryCard";
import { Phone } from "lucide-react";

const Category: FC<CategoryProps> = ({}) => {
  return (
    <>
      <Flag className="mb-4">{"Categories"}</Flag>
      <Heading2 className="mb-8">Browse By Category</Heading2>
      <ItemsCarousel>
        <CategoryCard icon={Phone} category="SmartPhone" />
        <CategoryCard icon={Phone} category="SmartPhone" />
        <CategoryCard icon={Phone} category="SmartPhone" />
        <CategoryCard icon={Phone} category="SmartPhone" />
        <CategoryCard icon={Phone} category="SmartPhone" />
        <CategoryCard icon={Phone} category="SmartPhone" />
      </ItemsCarousel>
    </>
  );
};

export default Category;
