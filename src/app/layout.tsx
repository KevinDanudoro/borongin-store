import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Topbar from "@/components/implement/Topbar";
import Footer from "@/components/implement/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Borongin",
  description: "E-Commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "bg-background")}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
