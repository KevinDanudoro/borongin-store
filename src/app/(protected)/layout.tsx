import Footer from "@/components/implement/Footer";
import Topbar from "@/components/implement/Topbar";
import React from "react";
import type { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
