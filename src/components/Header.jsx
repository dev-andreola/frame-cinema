import React from "react";
import Link from "next/link";

import MenuItem from "./MenuItem";
import Logo from "./Logo";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-8">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
    </div>
  );
}
