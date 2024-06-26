import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { filterProductSchema } from "@/model/product";
import { zodResolver } from "@hookform/resolvers/zod";

const getSearchParamsValues = (searchParams: ReadonlyURLSearchParams) => {
  const price = searchParams.get("price")?.split("-") ?? [];
  const rating = searchParams.get("rating")?.split("-") ?? [];

  const minPrice = parseInt(price[0], 10);
  const maxPrice = parseInt(price[1], 10);

  return {
    minPrice: isNaN(minPrice) ? "" : minPrice.toLocaleString(),
    maxPrice: isNaN(maxPrice) ? "" : maxPrice.toLocaleString(),
    rating: rating,
  };
};

const useFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultValues = getSearchParamsValues(searchParams);
  const form = useForm<z.infer<typeof filterProductSchema>>({
    resolver: zodResolver(filterProductSchema),
    defaultValues: defaultValues,
  });

  const handleFormSubmit = (values: z.infer<typeof filterProductSchema>) => {
    const params = new URLSearchParams(searchParams.toString());
    const minPrice = values.minPrice
      ? parseInt(values.minPrice.replaceAll(",", ""), 10)
      : 0;
    const maxPrice = values.maxPrice
      ? parseInt(values.maxPrice.replaceAll(",", ""), 10)
      : 0;
    const rating = values.rating ? values.rating.join("-") : "";

    params.set("price", `${minPrice}-${maxPrice}`);
    params.set("rating", rating);
    router.push(`/search?${params}`);
  };

  return { form, onSubmit: form.handleSubmit(handleFormSubmit) };
};

export default useFilter;
