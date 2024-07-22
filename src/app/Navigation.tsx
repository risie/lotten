"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggle = () => setMobileNavOpen(!mobileNavOpen);
  return (
    <section>
      <Navbar />
      <MobileNav mobileNavOpen={mobileNavOpen} toggle={toggle} />
      <button onClick={toggle} className="block sm:hidden">
        <div className="w-6 h-1 bg-complementary-color rounded-sm m-1"></div>
        <div className="w-6 h-1 bg-complementary-color rounded-sm m-1"></div>
        <div className="w-6 h-1 bg-complementary-color rounded-sm m-1"></div>
      </button>
    </section>
  );
}
