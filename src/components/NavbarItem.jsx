"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-sky-500 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-sky-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
