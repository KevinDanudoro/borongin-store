import { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const useCarouselPagination = (api: CarouselApi) => {
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 0,
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    setPagination((_) => ({
      currentPage: api.selectedScrollSnap() + 1,
      pageSize: api.scrollSnapList().length,
    }));

    api.on("select", () => {
      setPagination((prev) => ({
        ...prev,
        currentPage: api.selectedScrollSnap() + 1,
      }));
    });
  }, [api]);

  return pagination;
};

export default useCarouselPagination;
