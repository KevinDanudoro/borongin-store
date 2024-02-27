import React from "react";
import type { FC, PropsWithChildren } from "react";

interface Heading2Props extends PropsWithChildren {}

const Heading2: FC<Heading2Props> = ({ children }) => {
  return (
    <h2 className="text-3xl font-semibold tracking-wider inline-block">
      {children}
    </h2>
  );
};

export default Heading2;
