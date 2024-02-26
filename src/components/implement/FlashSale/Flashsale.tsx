import React from "react";
import type { FC } from "react";
import { FlashsaleProps } from ".";
import Flag from "@/components/ui/flag";
import Countdown from "@/components/ui/countdown";

const Flashsale: FC<FlashsaleProps> = ({}) => {
  return (
    <div>
      <Flag className="mb-2">{"Today's"}</Flag>
      <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-start md:items-end md:gap-10">
        <h2 className="text-3xl font-semibold tracking-wider inline-block">
          Flash Sales
        </h2>
        <Countdown />
      </div>
    </div>
  );
};

export default Flashsale;
