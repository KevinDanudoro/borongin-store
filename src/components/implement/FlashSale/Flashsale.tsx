import React from "react";
import type { FC } from "react";
import ProductCarousel from "@/components/implement/ProductsCarousel.tsx";
import Flag from "@/components/ui/flag";
import Countdown from "@/components/ui/countdown";
import Heading2 from "@/components/ui/heading2";

interface FlashsaleProps {}

const Flashsale: FC<FlashsaleProps> = ({}) => {
  return (
    <>
      <div className="px-10 md:px-20 mb-10">
        <Flag className="mb-2">{"Today's"}</Flag>
        <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-start md:items-end md:gap-10">
          <Heading2>Flash Sales</Heading2>
          <Countdown />
        </div>
      </div>
      <ProductCarousel opts={{ dragFree: true, slidesToScroll: "auto" }}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
      </ProductCarousel>
    </>
  );
};

export default Flashsale;
