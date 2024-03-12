import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link
        href={address}
        className="flex items-center justify-center gap-1 hover:text-sky-500"
      >
        <Icon className="text-2xl" />
        <h3 className="uppercase text-sm">{title}</h3>
      </Link>
    </div>
  );
}
