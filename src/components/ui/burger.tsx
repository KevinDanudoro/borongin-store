import { cn } from "@/lib/utils";
import React from "react";
import type { FC } from "react";

interface BurgerProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
}

const Burger: FC<BurgerProps> = ({
  isActive,
  onClick,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-around cursor-pointer w-8 h-8",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <span
        className={cn({
          "h-1 w-full bg-foreground rounded-md block transition-all duration-150":
            true,
          "rotate-45 origin-left translate-x-1": isActive,
        })}
      />
      <span
        className={cn({
          "h-1 w-full bg-foreground rounded-md block transition-all duration-150":
            true,
          "scale-0": isActive,
        })}
      />
      <span
        className={cn({
          "h-1 w-full bg-foreground rounded-md block transition-all duration-150":
            true,
          "-rotate-45 origin-left translate-x-1": isActive,
        })}
      />
    </div>
  );
};

export default Burger;
