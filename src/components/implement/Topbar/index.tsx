import React from "react";
import type { FC } from "react";
import Topbar from "./Topbar";

export interface TopbarProps {}

const Index: FC<TopbarProps> = (props) => {
  return <Topbar {...props} />;
};

export default Index;
