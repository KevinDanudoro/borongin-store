import { useToast } from "@/components/ui/use-toast";
import { addCartController } from "@/controller/cart";
import { useOptimistic, useState } from "react";

export const useCartCard = (productId: string, isCarted: boolean) => {
  const { toast } = useToast();

  const [cart, setCart] = useState(isCarted);
  const [optCart, setOptCart] = useOptimistic(cart);
  const handleOnCartClick = async () => {
    setOptCart((prev) => !prev);
    const response = await addCartController(productId);
    if (!response)
      toast({
        variant: "destructive",
        title: "Failed adding product to cart",
        description: "Please try again later.",
      });
    else {
      setCart((prev) => !prev);
      toast({
        variant: "success",
        title: "Success adding product to cart",
        description: "Let check your cart",
      });
    }
  };

  return { optCart, handleOnCartClick };
};
