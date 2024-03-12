import { Poppins } from "next/font/google";

import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Logo() {
  return (
    <div>
      <h1 className="text-2xl bg-sky-500 py-1 px-2 rounded-lg">
        <span className={font.className}>Frame</span>
        Cine
      </h1>
    </div>
  );
}
