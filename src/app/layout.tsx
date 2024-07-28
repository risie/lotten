import type { Metadata } from "next";
import { Montserrat, Bevan, Anton } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <header className={`${montserrat.className}`}>
          <h1 className="text-xl">
            <Link href="/">Holmängens Koloniförening</Link>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
