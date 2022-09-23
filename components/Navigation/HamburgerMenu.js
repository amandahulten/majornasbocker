import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = ({ openHamburgerMenu, hamburgerMenuOpen }) => {
  return (
    <div
      className={
        hamburgerMenuOpen
          ? "flex-col flex items-center fixed w-full  text-whiteish justify-center md:hidden"
          : "hidden"
      }
    >
      <div className="fixed w-full h-24 flex-row justify-between items-center bg-black-coffee">
        <div className="pl-4 h-24 flex items-center">
          <Image src="/logo-light.png" alt="logo" height="75" width="190" />
        </div>
        <div className="bg-[url('../public/nav-background.svg')] pr-8">
          <div className="absolute right-6 top-10 scale-150 md:hidden flex ">
            <AiOutlineClose
              onClick={openHamburgerMenu}
              className="scale-150 cursor-pointer"
            />
          </div>
          <div className="pt-24 pb-36 h-screen">
            <ul className="flex flex-col items-end ">
              <li className="p-4">
                <Link href="/hem">Hem</Link>
              </li>
              <li className="p-4">
                <Link href="/aktuellt">Aktuellt</Link>
              </li>
              <li className="p-4">
                <Link href="/om-oss">Om oss</Link>
              </li>
              <li className="p-4">
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
            <div className="flex flex-row flex-wrap justify-end pt-8 ">
              <div className="flex flex-col items-center pr-8 ">
                <Image
                  src="/logo-insta.svg"
                  alt="instagram-logo"
                  height="35"
                  width="35"
                />
                <p className="text-sm text-whiteish">Instagram</p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src="/logo-fb.svg"
                  alt="instagram-logo"
                  height="35"
                  width="35"
                />
                <p className="text-sm text-whiteish">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;