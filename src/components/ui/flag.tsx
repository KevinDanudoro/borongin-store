import { cn } from "@/lib/utils";
import React from "react";
import type { FC, PropsWithChildren } from "react";

interface FlagProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLElement> {}

const Flag: FC<FlagProps> = ({ children, className, ...props }) => {
  return (
    <small
      className={cn(
        "before:w-4 before:h-8 before:bg-primary before:rounded-sm before:inline-block flex items-center gap-4 font-bold text-primary text-base",
        className
      )}
      {...props}
    >
      {children}
    </small>
  );
};

export default Flag;
