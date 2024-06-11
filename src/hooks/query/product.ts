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

        const response = responseSchema.parse(
          queryClient.getQueryData(["product"])
        );
        const prevData = {
          data: getProductSchema.array().parse(response.data),
          statusCode: response.statusCode,
          message: response.message,
        };

        const currData = prevData.data.map((prodData) =>
          prodData._id === productId
            ? { ...prodData, isWishlist: !isWishlist }
            : { ...prodData }
        );
        const optimisticData = {
          data: currData,
          statusCode: response.statusCode,
          message: response.message,
        };

        queryClient.setQueryData(["product"], optimisticData);
        return { prevData };
      } catch (err) {
        if (err instanceof Error) console.log("Error", err.message);
      }
    },
    onError: (_, __, context) => {
      if (context?.prevData !== undefined)
        queryClient.setQueryData(["product"], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
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

        const response = responseSchema.parse(
          queryClient.getQueryData(["product"])
        );
        const prevData = {
          data: getProductSchema.array().parse(response.data),
          statusCode: response.statusCode,
          message: response.message,
        };
        const currData = prevData.data.map((product) =>
          product._id === productId
            ? { ...product, isCart: !isCart }
            : { ...product }
        );
        const optimisticData = {
          data: currData,
          statusCode: response.statusCode,
          message: response.message,
        };

        queryClient.setQueryData(["product"], optimisticData);
        return { prevData };
      } catch (err) {
        if (err instanceof Error) console.log("Error", err.message);
      }
    },
    onError: (_, __, context) => {
      if (context?.prevData !== undefined)
        queryClient.setQueryData(["product"], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });
};
