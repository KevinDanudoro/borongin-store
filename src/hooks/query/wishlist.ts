import { getWishlistController } from "@/controller/wishlist";
import { useQuery } from "@tanstack/react-query";

export const useGetWishlist = () =>
  useQuery({
    queryKey: ["product", "wishlist"],
    queryFn: () => getWishlistController(),
  });
