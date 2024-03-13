import SignIn from "@/components/section/SignIn/SignIn";
import React from "react";
import type { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <main className="px-10 md:px-20 md:w-full md:max-w-xl md:mx-auto">
      <SignIn />
    </main>
  );
};

export default Page;
