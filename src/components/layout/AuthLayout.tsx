import Image from "next/image";
import React from "react";
import type { FC, PropsWithChildren } from "react";

interface AuthLayoutProps extends PropsWithChildren {}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col py-14 gap-y-10 md:flex-row items-center">
      <Image
        src="/auth.png"
        alt="Authentication Image"
        className="bg-slate-100 rounded-r-lg max-w-sm mx-auto w-4/5 md:mx-0 md:max-w-xl"
        height={640}
        width={640}
      />

      {children}
    </div>
  );
};

export default AuthLayout;
