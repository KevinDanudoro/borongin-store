import { getWishlistController } from "@/controller/wishlist";
import { useQuery } from "@tanstack/react-query";

export const useGetWishlist = () =>
  useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlistController(),
  });
