import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const useSearchInput = (): React.HTMLAttributes<HTMLInputElement> => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const params = new URLSearchParams();
    params.set("keyword", searchValue);

    router.push(`/search?${params}`);
  };

  return { onChange: onInputChange, onKeyDown: onEnterPress };
};

export default useSearchInput;
