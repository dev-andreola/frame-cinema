import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FrameCine",
  description:
    "The world of cinema open to everyone. Explore, rate and save movies to watch later.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
