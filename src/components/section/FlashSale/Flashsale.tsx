import React, { Suspense } from "react";
import type { FC } from "react";

import FlashsaleList from "./FlashsaleList";
import FlashsaleHeading from "./FlashsaleHeading";
import FlashsaleListLoading from "./FlashsaleListLoading";

interface FlashsaleProps {}

const Flashsale: FC<FlashsaleProps> = ({}) => {
  return (
    <>
      <FlashsaleHeading />
      <Suspense fallback={<FlashsaleListLoading />}>
        <FlashsaleList />
      </Suspense>
    </>
  );
};

export default Flashsale;
