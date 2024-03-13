import { cn } from "@/lib/utils";
import React from "react";
import type { FC, PropsWithChildren } from "react";

interface SectionLayoutProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLElement> {}

const SectionLayout: FC<SectionLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn("px-10 md:px-20", className)} {...props}>
      {children}
    </section>
  );
};

export default SectionLayout;
