import Countdown from "@/components/ui/countdown";
import Flag from "@/components/ui/flag";
import Heading2 from "@/components/ui/heading2";
import React from "react";
import type { FC } from "react";

interface FlashsaleHeadingProps {}

const FlashsaleHeading: FC<FlashsaleHeadingProps> = ({}) => {
  return (
    <div className="px-10 md:px-20 mb-10">
      <Flag className="mb-2">{"Today's"}</Flag>
      <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-start md:items-end md:gap-10">
        <Heading2>Flash Sales</Heading2>
        <Countdown />
      </div>
    </div>
  );
};

export default FlashsaleHeading;
