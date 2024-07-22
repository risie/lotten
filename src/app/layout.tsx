import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holmängens Koloniförening",
  description:
    "En hemsida som innehåller information om Holmängens Koloniförening.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header className="flex items-center justify-between px-5 py-2">
          <h1 className="text-xl">
            <Link href="/">Holmängens Koloniförening</Link>
          </h1>
          <Navigation />
        </header>
        {children}
        <footer className="absolute inset-x-0 bottom-0 flex justify-center py-5"></footer>
      </body>
    </html>
  );
}
