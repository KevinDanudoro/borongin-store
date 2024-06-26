import React from "react";
import type { FC } from "react";

import FlashsaleList from "./FlashsaleList";
import FlashsaleHeading from "./FlashsaleHeading";

interface FlashsaleProps {}

const Flashsale: FC<FlashsaleProps> = ({}) => {
  return (
    <>
      <FlashsaleHeading />
      <FlashsaleList />
      {/* <Suspense fallback={<FlashsaleListLoading />}>
      </Suspense> */}
    </>
  );
};

export default Flashsale;
