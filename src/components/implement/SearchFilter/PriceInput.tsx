"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import type { ChangeEvent, FC } from "react";

interface PriceInputProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

const PriceInput: FC<PriceInputProps> = ({
  className,
  placeholder,
  ...props
}) => {
  const [price, setPrice] = useState("");
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const unformatedValue = value.replaceAll(",", "");
    const numberTypeValue = Number(unformatedValue);

    if (!isNaN(numberTypeValue)) {
      const formatedValue = numberTypeValue.toLocaleString();
      setPrice(formatedValue);
      return;
    }

    setPrice(price);
  };

  return (
    <div className={cn("relative", className)} {...props}>
      <Input
        placeholder={placeholder}
        className="pl-12"
        value={price}
        onChange={handlePriceChange}
      />
      <span className="absolute top-0 bottom-0 left-0 aspect-square rounded-md bg-secondary border-2 border-secondary-foreground grid place-items-center">
        Rp
      </span>
    </div>
  );
};

export default PriceInput;
