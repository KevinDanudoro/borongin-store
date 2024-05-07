import { useToast } from "@/components/ui/use-toast";
import {
  addWishlistController,
  removeWishlistController,
} from "@/controller/wishlist";
import { useOptimistic, useState } from "react";

export const useWishlistCard = (productId: string, isWishlisted: boolean) => {
  const { toast } = useToast();

  const [wishlist, setWishlist] = useState(isWishlisted);
  const [optWishlist, setOptWishlist] = useOptimistic(wishlist);

  const handleOnWishlistClick = async () => {
    setOptWishlist((prev) => !prev);

    const response = wishlist
      ? await removeWishlistController(productId)
      : await addWishlistController(productId);

    if (!response)
      toast({
        variant: "destructive",
        title: "Failed adding product to wishlist",
        description: "Please try again later.",
      });
    else if (response.statusCode === 401)
      toast({
        variant: "destructive",
        title: "Failed adding product to wishlist",
        description: "Please sign in first",
      });
    else if (response.statusCode === 200 && !wishlist) {
      setWishlist((prev) => !prev);
      toast({
        variant: "success",
        title: "Success adding product to wishlist",
        description: "Let check your wishlist",
      });
    } else if (response.statusCode === 200 && wishlist) {
      setWishlist((prev) => !prev);
      toast({
        variant: "success",
        title: "Success remove product from wishlist",
        description: "Let check your wishlist",
      });
    }
  };
  return { optWishlist, handleOnWishlistClick };
};
