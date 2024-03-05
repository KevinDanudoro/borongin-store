import Footer from "@/components/implement/Footer/Footer";
import Topbar from "@/components/implement/Topbar/Topbar";
import AuthLayout from "@/components/layout/AuthLayout";
import React from "react";
import type { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Topbar isInAuthPage={true} />
      <AuthLayout>{children}</AuthLayout>
      <Footer />
    </>
  );
};

export default Layout;
