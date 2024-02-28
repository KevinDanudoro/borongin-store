import React from "react";
import type { FC } from "react";
import Category from "./Category";

export interface CategoryProps {}

const Index: FC<CategoryProps> = (props) => {
  return <Category {...props} />;
};

export default Index;
