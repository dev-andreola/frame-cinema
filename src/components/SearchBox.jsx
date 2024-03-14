"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form
      className="absolute z-50 flex justify-between w-full px-5 max-w-4xl left-2/4 -translate-x-2/4 bg-sky-50 dark:bg-gray-800 shadow-md sm:rounded-b-2xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Digite o filme..."
        className="w-full h-14 rounded-md placeholder-gray-500 bg-transparent outline-none flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-sky-500 disabled:text-gray-400"
        disabled={search === ""}
      >
        Pesquisar
      </button>
    </form>
  );
}
