"use client";

import { Input } from "@/components/ui/input";
import { priceFormatter } from "@/lib/formatter";
import { cn } from "@/lib/utils";
import React, { ChangeEvent } from "react";

interface PriceInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PriceInput = React.forwardRef<HTMLInputElement, PriceInputProps>(
  ({ className, placeholder, ...props }, ref) => {
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!props.onChange) return null;
      e.target.value = priceFormatter(e.target.value);
      props.onChange(e);
    };

    return (
      <div className={cn("relative", className)}>
        <Input
          {...props}
          ref={ref}
          onChange={onInputChange}
          placeholder={placeholder}
          className="pl-12 peer"
        />
        <span className="absolute top-0 bottom-0 left-0 aspect-square rounded-md bg-secondary border-2 border-secondary-foreground grid place-items-center peer-focus-visible:border-primary peer-focus-visible:bg-primary/10">
          Rp
        </span>
      </div>
    );
  }
);

PriceInput.displayName = "PriceInput";

export default PriceInput;
