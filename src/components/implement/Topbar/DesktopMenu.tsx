import React from "react";
import type { FC } from "react";
import Link from "next/link";
import { links } from "./topbar-links";
import { cn } from "@/lib/utils";

interface DesktopMenuProps extends React.HTMLAttributes<HTMLUListElement> {}

const DesktopMenu: FC<DesktopMenuProps> = ({ className }) => {
  return (
    <ul className={cn("flex flex-row md:gap-2 lg:gap-4 lg:mx-10", className)}>
      {links.map((link) => {
        return !link.mobileOnly ? (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default DesktopMenu;
