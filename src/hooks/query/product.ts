import { addCartController, removeCartController } from "@/controller/cart";
import {
  getDetailProductController,
  getProductsController,
} from "@/controller/product";
import {
  addWishlistController,
  removeWishlistController,
} from "@/controller/wishlist";
import { getProductSchema } from "@/model/product";
import { responseSchema } from "@/model/respone";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetDetailProduct = (productId: string) =>
  useQuery({
    queryKey: ["product", productId],
    queryFn: () => getDetailProductController(productId),
  });

export const useGetProducts = () =>
  useQuery({
    queryKey: ["product"],
    queryFn: () => getProductsController(),
  });

export const useProductWishlistMutation = (productId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (isWishlist: boolean) => {
      return isWishlist
        ? removeWishlistController(productId)
        : addWishlistController(productId);
    },
    onMutate: (isWishlist: boolean) => {
      try {
        queryClient.cancelQueries({ queryKey: ["product"] });

        const { data, statusCode, message } = responseSchema.parse(
          queryClient.getQueryData(["product"])
        );
        const prevData = getProductSchema.array().parse(data);
        const currData = prevData.map((prodData) =>
          prodData._id === productId
            ? { ...prodData, isWishlist: !isWishlist }
            : { ...prodData }
        );

        queryClient.setQueryData(["product"], {
          data: currData,
          statusCode,
          message,
        });
      } catch (err) {
        if (err instanceof Error) console.log("Error", err.message);
      }
    },
  });
};

export const useProductCartMutation = (productId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (isCart: boolean) => {
      return isCart
        ? removeCartController(productId)
        : addCartController(productId);
    },
    onMutate: (isCart: boolean) => {
      try {
        queryClient.cancelQueries({ queryKey: ["product"] });

        const { data, statusCode, message } = responseSchema.parse(
          queryClient.getQueryData(["product"])
        );
        const prevData = getProductSchema.array().parse(data);
        const currData = prevData.map((prodData) =>
          prodData._id === productId
            ? { ...prodData, isCart: !isCart }
            : { ...prodData }
        );

        queryClient.setQueryData(["product"], {
          data: currData,
          statusCode,
          message,
        });
      } catch (err) {
        if (err instanceof Error) console.log("Error", err.message);
      }
    },
  });
};
