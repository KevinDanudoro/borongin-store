"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import type { FC } from "react";
import { links } from "./topbar-links";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Burger from "@/components/ui/burger";

interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const MobileMenu: FC<MobileMenuProps> = ({ className, ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <Burger
        isActive={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className={cn("z-10", className)}
        {...props}
      />

      <ul
        className={cn({
          "fixed top-0 bottom-0 right-0 w-[40%] bg-[#F5F5F5] duration-150 flex flex-col pt-16 text-sm":
            true,
          "translate-x-0": isMobileMenuOpen,
          "translate-x-[100%]": !isMobileMenuOpen,
        })}
      >
        {links.map((link) => {
          return link.href !== "/sign-in" ? (
            <Link
              href={link.href}
              key={link.name}
              className="border-b-2 border-[#DB4444] mb-10 mx-5"
            >
              <li className="pb-2">{link.name}</li>
            </Link>
          ) : (
            <Link href={link.href} key={link.name} className="mb-10 mx-5">
              <Button>{link.name}</Button>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default MobileMenu;
