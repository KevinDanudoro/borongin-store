import { buyProductSchema } from "@/schema/productSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useSubmitProduct = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof buyProductSchema>>({
    resolver: zodResolver(buyProductSchema),
    defaultValues: {
      quantity: 1,
      size: "s",
    },
  });

  const { watch } = form;
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      const params = new URLSearchParams(searchParams.toString());
      if (name == "size") {
        params.set(name, value.size ?? "");
      }
      if (name == "quantity") {
        params.set(name, value.quantity ? value.quantity.toString() : "");
      }
      router.push(`${pathname}?${params}`, { scroll: false });
    });
    return () => subscription.unsubscribe();
  }, [watch, searchParams, pathname, router]);

  const onSubmit = (e: z.infer<typeof buyProductSchema>) => {
    console.log(e);
  };

  return { form, onSubmit };
};

export default useSubmitProduct;
