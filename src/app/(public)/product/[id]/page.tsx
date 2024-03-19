import React from "react";
import type { FC } from "react";

import ProductShowcase from "@/components/implement/ProductShowcase/ProductShowcase";
import SectionLayout from "@/components/layout/SectionLayout";
import ProductDescription from "@/components/section/ProductDescription/ProductDescription";
import ProductForm from "@/components/section/ProductForm/ProductForm";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <main>
      <SectionLayout className="grid gap-12 grid-rows-[auto,auto] lg:grid-rows-none lg:grid-cols-[1fr,400px] my-10">
        <ProductShowcase />

        <div className="space-y-4">
          <ProductDescription />
          <Separator />
          <ProductForm />
        </div>
      </SectionLayout>
    </main>
  );
};

export default Page;
