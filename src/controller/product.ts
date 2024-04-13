import { getProductSchema } from "@/model/product";
import { getAllProducts } from "@/model/product/action";

export const getFlashSaleProducts = async () => {
  try {
    const { data: product } = await getAllProducts();
    const validProduct = getProductSchema.safeParse(product);

    if (!validProduct.success) return null;
    return validProduct.data;
  } catch (err) {
    console.log("error", err);
    return null;
  }
};
