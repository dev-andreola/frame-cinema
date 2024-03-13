import React from "react";

import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-sky-100 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem
        className="underline underline-offset-8 decoration-4 decoration-sky-500 rounded-lg"
        title="Popular"
        param="fetchTrending"
      />
      <NavbarItem title="Melhor Classificação" param="fetchTopRated" />
    </div>
  );
}
