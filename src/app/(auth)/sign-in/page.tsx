import SignIn from "@/components/section/SignIn/SignIn";
import Image from "next/image";
import React from "react";
import type { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="flex flex-col py-14 gap-y-10 md:flex-row items-center">
      <Image
        src="/auth.png"
        alt="Authentication Image"
        className="bg-slate-100 rounded-r-lg max-w-sm mx-auto w-4/5 md:mx-0 md:max-w-xl"
        height={640}
        width={640}
      />

      <section className="px-10 md:px-20 md:w-full md:max-w-xl md:mx-auto">
        <SignIn />
      </section>
    </div>
  );
};

export default Page;
