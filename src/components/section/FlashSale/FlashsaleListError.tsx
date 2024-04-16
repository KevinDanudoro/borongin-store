import { Info } from "lucide-react";
import React from "react";
import type { FC } from "react";

interface FlashsaleListErrorProps {}

const FlashsaleListError: FC<FlashsaleListErrorProps> = ({}) => {
  return (
    <div className="w-full h-36 flex items-center justify-center">
      <div className="flex justify-center items-center flex-col gap-2 bg-secondary text-foreground py-10 px-20 rounded-md">
        <Info className="h-10 w-10" />
        <p>Something went wrong!</p>
      </div>
    </div>
  );
};

export default FlashsaleListError;
