import SignUp from "@/components/section/SignUp/SignUp";
import React from "react";
import type { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <section className="px-10 md:px-20 md:w-full md:max-w-xl md:mx-auto">
      <SignUp />
    </section>
  );
};

export default Page;
