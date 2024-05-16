import React from "react";
import type { FC } from "react";

import ProductShowcase from "@/components/implement/ProductShowcase/ProductShowcase";
import SectionLayout from "@/components/layout/SectionLayout";
import ProductDescription from "@/components/section/ProductDescription/ProductDescription";
import ProductForm from "@/components/section/ProductForm/ProductForm";
import { Separator } from "@/components/ui/separator";
import { getDetailProductController } from "@/controller/product";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const { data: product } = await getDetailProductController(params.id);
  return (
    <main>
      <SectionLayout className="grid gap-12 grid-rows-[auto,auto] lg:grid-rows-none lg:grid-cols-[1fr,400px] my-10">
        <ProductShowcase
          images={product?.imageUrl}
          name={product?.name ?? ""}
        />

        <div className="space-y-4">
          <ProductDescription
            name={product?.name ?? ""}
            desc={product?.desc ?? ""}
            rating={product?.rating ?? 0}
            price={product?.price ?? 0}
            reviews={100}
          />
          <Separator />
          <ProductForm productId={product?._id ?? ""} />
        </div>
      </SectionLayout>
    </main>
  );
};

export default Page;
