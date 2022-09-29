import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import Lines from "../svgs/Lines";

const Nav = () => {
  const [hamburgerMenuOpen, sethamburgerMenuOpen] = useState(false);

  const openHamburgerMenu = () => {
    sethamburgerMenuOpen(!hamburgerMenuOpen);
  };

  return (
    <div className="fixed w-full h-24 flex justify-start items-center bg-whiteish">
      <div className="flex pt-4 md:pt-8 lg:pt-12 items-center">
        <div className="relative h-32 w-64  md:h-36 md:w-72 lg:h-40 lg:w-80">
          <Image
            src="/logo-dark.png"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="absolute flex right-6">
        <div
          onClick={openHamburgerMenu}
          className="scale-100 cursor-pointer lg:hidden"
        >
          <Lines className="cursor-pointer" />
        </div>
        <div className="hidden lg:flex items-center text-base">
          <ul className="hidden md:flex xl:gap-44 lg:gap-38 lg:pr-8 md:gap-32  pr-4">
            <li className="hover:font-medium hover:underline ">
              <Link href="/hem">Hem</Link>
            </li>
            <li className="hover:font-medium hover:underline">
              <Link href="/aktuellt">Aktuellt</Link>
            </li>
            <li className="hover:font-medium hover:underline">
              <Link href="/om-oss">Om oss</Link>
            </li>
            <li className="hover:font-medium hover:underline">
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>

      <HamburgerMenu
        openHamburgerMenu={openHamburgerMenu}
        hamburgerMenuOpen={hamburgerMenuOpen}
      />
    </div>
  );
};

export default Nav;