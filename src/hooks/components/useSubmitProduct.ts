import { buyProductSchema } from "@/model/product";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const getDefaultValue = (searchParams: ReadonlyURLSearchParams) => {
  const quantity = searchParams.get("quantity");
  const size = searchParams.get("size");

  const parsedQuantity = !!quantity?.length ? parseInt(quantity, 10) : 1;
  const parsedSize = !!size?.length ? size : "s";

  const defaultValues = buyProductSchema.safeParse({
    quantity: parsedQuantity,
    size: parsedSize,
  });

  if (!defaultValues.success) return {};

  return defaultValues.data;
};

const useSubmitProduct = (productId: string) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof buyProductSchema>>({
    resolver: zodResolver(buyProductSchema),
    defaultValues: getDefaultValue(searchParams),
  });

  const { watch } = form;
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      const params = new URLSearchParams(searchParams.toString());
      if (name == "quantity") {
        params.set(name, value.quantity ? value.quantity.toString() : "");
      }
      router.push(`${pathname}?${params}`, { scroll: false });
    });
    return () => subscription.unsubscribe();
  }, [watch, searchParams, pathname, router]);

  const onSubmit = (e: z.infer<typeof buyProductSchema>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("quantity", e.quantity.toString());
    router.push(`/checkout/product/${productId}?` + params);
  };

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export default useSubmitProduct;
