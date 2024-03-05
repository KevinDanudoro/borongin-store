import Footer from "@/components/implement/Footer/Footer";
import Topbar from "@/components/implement/Topbar/Topbar";
import React from "react";
import type { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Topbar isInAuthPage={true} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
