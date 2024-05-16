import { getDetailProductController } from "@/controller/product";
import { useQuery } from "@tanstack/react-query";

export const useGetDetailProduct = (productId: string) =>
  useQuery({
    queryKey: ["product", productId],
    queryFn: () => getDetailProductController(productId),
  });
