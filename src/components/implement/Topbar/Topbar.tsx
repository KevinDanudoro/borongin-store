import React from "react";
import type { FC } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SearchInput from "./SearchInput";
import AdditionalMenu from "./AdditionalMenu";

import { TopbarProps } from ".";

const Topbar: FC<TopbarProps> = ({}) => {
  return (
    <nav className="grid grid-cols-[auto,auto,1fr,auto] place-items-center h-14 px-4 gap-4 sm:gap-6 md:gap-10">
      <h1 className="col-start-1">Borongin</h1>

      <DesktopMenu className="col-start-2 col-span-1 hidden md:flex" />

      <SearchInput className="col-start-2 col-span-2 md:col-start-3 md:col-span-1" />

      <MobileMenu className="col-start-4 md:hidden" />
      <AdditionalMenu className="hidden md:flex md:col-start-4" />
    </nav>
  );
};

export default Topbar;
