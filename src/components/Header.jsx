import React from "react";
import Link from "next/link";

import MenuItem from "./MenuItem";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-start gap-4">
        <Link href="/">
          <Logo />
        </Link>
        <ThemeSwitch />
      </div>
      <div className="flex gap-8">
        <MenuItem title="início" address="/" Icon={AiFillHome} />
        <MenuItem title="sobre" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
    </div>
  );
}
