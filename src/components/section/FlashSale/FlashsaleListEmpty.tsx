import { Clock } from "lucide-react";
import React from "react";
import type { FC } from "react";

interface FlashsaleListEmptyProps {}

const FlashsaleListEmpty: FC<FlashsaleListEmptyProps> = ({}) => {
  return (
    <div className="w-full h-36 flex items-center justify-center">
      <div className="flex justify-center items-center flex-col gap-2 bg-secondary text-foreground py-10 px-20 rounded-md">
        <Clock />
        <p>Flash sale is already over!</p>
      </div>
    </div>
  );
};

export default FlashsaleListEmpty;
