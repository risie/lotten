import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "./Footer";

const montserrat = Montserrat({ weight: "300", subsets: ["latin"] });

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
    <html data-theme="light" lang="en">
      <body className="flex flex-col min-h-screen">
        <header>
          <div className="navbar bg-base-100">
            <Link href={"/"} className="btn btn-ghost text-lg text-wrap">
              Holmängens Koloniförening
            </Link>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
