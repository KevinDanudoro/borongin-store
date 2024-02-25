"use client";

import React from "react";
import type { FC } from "react";
import Link from "next/link";
import { links } from "./topbar-links";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface DesktopMenuProps extends React.HTMLAttributes<HTMLUListElement> {}

const DesktopMenu: FC<DesktopMenuProps> = ({ className }) => {
  const pathname = usePathname();
  return (
    <ul
      className={cn(
        "flex flex-row md:gap-4 lg:gap-6 lg:mx-10 text-sm",
        className
      )}
    >
      {links.map((link) => {
        return !link.mobileOnly ? (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
            <span
              className={cn({
                "block bg-primary w-full h-1 rounded-md duration-150": true,
                "scale-1": pathname === link.href,
                "scale-0": pathname !== link.href,
              })}
            />
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default DesktopMenu;
