import React from "react";
import type { FC } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SearchInput from "./SearchInput";
import AdditionalMenu from "./AdditionalMenu";
import AvatarMenu from "@/components/implement/AvatarMenu/AvatarMenu";

import { TopbarProps } from ".";
import getJwtSession from "@/lib/jwt";

const Topbar: FC<TopbarProps> = async () => {
  const session = await getJwtSession();
  return (
    <>
      <header className="border-b-2 border-secondary py-1 px-5 sm:px-10 md:px-14 lg:px-20 sticky top-0 z-[49] bg-background peer">
        <nav className="grid grid-cols-[auto,1fr,auto] md:grid-cols-[auto,1fr,auto] place-items-center h-14 gap-4 md:gap-10">
          <h1 className="col-start-1 text-xl font-bold">Borongin</h1>

          <DesktopMenu
            isLoggedIn={!!session}
            className="col-start-2 hidden md:flex w-max"
          />

          <div className="col-start-2 md:col-start-3 flex gap-6 items-center">
            <SearchInput />
            {session && <AdditionalMenu className="hidden md:flex" />}
            {session && <AvatarMenu />}
          </div>

          <MobileMenu
            isLoggedIn={!!session}
            className="col-start-3 md:hidden"
          />
        </nav>
      </header>
      <div className="bg-black/70 fixed inset-0 z-20 hidden peer-has-[.search:focus]:block" />
    </>
  );
};

export default Topbar;
