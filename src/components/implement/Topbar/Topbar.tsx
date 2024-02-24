import React from "react";
import type { FC } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SearchInput from "../SearchInput/SearchInput";

interface TopbarProps {}

const Topbar: FC<TopbarProps> = ({}) => {
  return (
    <nav className="grid grid-cols-[auto,auto,1fr,auto] place-items-center h-14 gap-8 px-4">
      <h1 className="col-start-1">Borongin</h1>

      <DesktopMenu className="col-start-2 col-span-1 hidden md:block" />

      <SearchInput className="col-start-2 col-span-2 md:col-start-3 md:col-span-1" />
      {/* <AdditionalMenu className="col-start-4" /> */}

      <MobileMenu className="col-start-4 md:hidden" />
    </nav>
  );
};

export default Topbar;
