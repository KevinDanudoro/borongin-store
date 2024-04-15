import { getFlashsaleProductsController } from "@/controller/product";
import { useQuery } from "@tanstack/react-query";

export const useGetFlashsaleProduct = () => {
  const query = useQuery({
    queryKey: ["flash-sale"],
    queryFn: getFlashsaleProductsController,
  });
  return query;
};
