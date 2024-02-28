import { cn } from "@/lib/utils";
import React from "react";
import type { FC, PropsWithChildren } from "react";

interface Heading2Props
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLHeadingElement> {}

const Heading2: FC<Heading2Props> = ({ children, className, ...props }) => {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-wider inline-block",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading2;
