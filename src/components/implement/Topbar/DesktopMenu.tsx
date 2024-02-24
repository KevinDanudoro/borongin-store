import React from "react";
import type { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { links } from "./topbar-links";

interface DesktopMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const DesktopMenu: FC<DesktopMenuProps> = ({ className }) => {
  return (
    <div className={className}>
      <ul className="flex flex-row ">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <Button size="icon" variant={"link"} className="hidden md:block">
        <Heart />
      </Button>
      <Button size="icon" variant={"link"} className="hidden md:block">
        <ShoppingCart />
      </Button>
    </div>
  );
};

export default DesktopMenu;
