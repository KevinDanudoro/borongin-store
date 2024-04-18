import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

const useSearchInput = (): React.InputHTMLAttributes<HTMLInputElement> &
  React.RefAttributes<HTMLInputElement> => {
  const router = useRouter();
  const searchParms = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const params = new URLSearchParams(searchParms.toString());
    params.set("keyword", searchValue);

    router.push(`/search?${params}`);
    inputRef.current?.blur();
  };

  return { onChange: onInputChange, onKeyDown: onEnterPress, ref: inputRef };
};

export default useSearchInput;
