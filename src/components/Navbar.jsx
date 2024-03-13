import React from "react";

import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-sky-100 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Popular" param="fetchTrending" />
      <NavbarItem title="Melhor Classificação" param="fetchTopRated" />
    </div>
  );
}