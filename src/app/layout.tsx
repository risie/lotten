import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
