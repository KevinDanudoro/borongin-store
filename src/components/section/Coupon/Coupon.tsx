import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import type { FC } from "react";

interface CouponProps {}

const Coupon: FC<CouponProps> = ({}) => {
  return (
    <div className="flex flex-row gap-8">
      <Input />
      <Button className="sm:px-10 md:px-5 lg:px-10">Apply Coupon</Button>
    </div>
  );
};

export default Coupon;
