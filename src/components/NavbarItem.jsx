"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Componente NavbarItem agora está dentro do componente NavbarItemWrapper
export default function NavbarItemWrapper({ title, param }) {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <NavbarItem title={title} param={param} />
    </Suspense>
  );
}

// NavbarItem continua o mesmo
function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
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
  );
}
