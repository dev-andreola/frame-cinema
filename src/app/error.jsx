"use client";

import React, { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center m-10">
      <h2>Deu algo errado. Tente novamente!</h2>
      <button
        className="mt-4 py-2 px-4 text-sm border rounded-md uppercase border-sky-500 hover:bg-gray-600"
        onClick={() => reset()}
      >
        Tentar Novamente
      </button>
    </div>
  );
}
