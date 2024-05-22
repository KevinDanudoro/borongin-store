import Footer from "@/components/implement/Footer";
import Topbar from "@/components/implement/Topbar";
import Script from "next/script";
import React from "react";
import type { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.MIDTRANS_CLIENT_KEY}
      />

      <Topbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
