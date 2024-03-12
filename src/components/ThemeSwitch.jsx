"use client";

import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-3xl rounded-full p-1 border border-sky-300 cursor-pointer hover:text-sky-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-3xl rounded-full p-1 border border-sky-300 cursor-pointer hover:text-sky-500"
          />
        ))}
    </div>
  );
}
