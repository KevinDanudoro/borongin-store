import { getProductSchema } from "@/model/product";
import { getAllProducts } from "@/model/product/action";
import { responseSchema } from "@/model/respone";

export const getFlashSaleProductController = async () => {
  try {
    const { data: response } = await getAllProducts();

    const validResponse = responseSchema.safeParse(response);
    if (!validResponse.success) return null;

    const validProduct = getProductSchema
      .array()
      .safeParse(validResponse.data.data);
    if (!validProduct.success) return null;

    return validProduct.data;
  } catch (_) {
    return null;
  }
};
