import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import type { FC } from "react";

interface CartTotalProps {
  subTotal: number;
}

const CartTotal: FC<CartTotalProps> = ({ subTotal }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Cart Total</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex flex-row justify-between">
          <p>Subtotal</p>
          <span>Rp.{subTotal.toLocaleString()}</span>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-row justify-between">
          <p>Shipping</p>
          <span>Free</span>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-row justify-between">
          <p>Total</p>
          <span>Rp.{subTotal.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartTotal;
