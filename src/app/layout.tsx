import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenuItem from "./NavMenuItem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holmängens Kolonilottsförening",
  description:
    "En hemsida som innehåller information om Holmängens Kolonilottsförening.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between px-5 py-2 bg-slate-300">
          <h1 className="w-20 h-10 bg-slate-400 rounded-xl"></h1>
          <nav className="flex items-center">
            <menu className="flex">
              <NavMenuItem href="">Hem</NavMenuItem>
              <NavMenuItem href="">Föreningen</NavMenuItem>
              <NavMenuItem href="">Bildarkiv</NavMenuItem>
              <NavMenuItem href="">Kontakt</NavMenuItem>
            </menu>
            <div className="w-5 h-5 ml-2 bg-slate-400 rounded-sm"></div>
            <div className="w-5 h-5 ml-2 bg-slate-400 rounded-sm"></div>
          </nav>
        </header>
        {children}
        <footer className="absolute inset-x-0 bottom-0 bg-slate-300 flex justify-center py-5">
          GitHub icon
        </footer>
      </body>
    </html>
  );
}
