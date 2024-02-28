import React from "react";
import type { FC, PropsWithChildren } from "react";

interface SectionLayoutProps extends PropsWithChildren {}

const SectionLayout: FC<SectionLayoutProps> = ({ children }) => {
  return <section className="px-10 md:px-20">{children}</section>;
};

export default SectionLayout;
