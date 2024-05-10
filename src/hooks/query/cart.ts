import { getCartController } from "@/controller/cart";
import { useQuery } from "@tanstack/react-query";

export const useGetCart = () =>
  useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartController(),
  });
