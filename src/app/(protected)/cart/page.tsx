import React from "react";
import type { FC } from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import CartTable from "@/components/section/CartTable/CartTable";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <SectionLayout>
      <h2 className="text-lg my-10">Cart (4)</h2>
      <CartTable />
    </SectionLayout>
  );
};

export default Page;
