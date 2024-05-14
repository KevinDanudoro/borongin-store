import { useRouter, useSearchParams } from "next/navigation";

const useSorting = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSortingChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sorting", value);
    router.push(`/search?${params}`);
  };

  return { onValueChange: onSortingChange };
};

export default useSorting;
