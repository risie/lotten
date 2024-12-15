"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

enum Paths {
  BYGGREGLER = "/byggregler",
  VATTEN_OCH_AVLOPP = "/vatten-och-avlopp",
  VERKSAMHETSPLAN = "/verksamhetsplan",
  ORDNINGSREGLER = "/ordningsregler",
  STADGAR = "/stadgar",
}

export default function MembersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();

  const isTabActive = (path: string, currentPath: string) =>
    path === currentPath ? "tab-active" : "";
  return (
    <>
      <ul role="tablist" className="tabs-lg tabs-boxed">
        <li className={`tab ${isTabActive(Paths.BYGGREGLER, currentPath)}`}>
          <Link href={Paths.BYGGREGLER} role="tab">
            Byggregler
          </Link>
        </li>
        <li
          className={`tab ${isTabActive(Paths.VERKSAMHETSPLAN, currentPath)}`}
        >
          <Link href={Paths.VERKSAMHETSPLAN} role="tab">
            Verksamhetsplan
          </Link>
        </li>
        <li
          className={`tab ${isTabActive(Paths.VATTEN_OCH_AVLOPP, currentPath)}`}
        >
          <Link href={Paths.VATTEN_OCH_AVLOPP} role="tab">
            Vatten och avlopp
          </Link>
        </li>
        <li className={`tab ${isTabActive(Paths.ORDNINGSREGLER, currentPath)}`}>
          <Link href={Paths.ORDNINGSREGLER} role="tab">
            Ordningsregler
          </Link>
        </li>
        <li className={`tab ${isTabActive(Paths.STADGAR, currentPath)}`}>
          <Link href={Paths.STADGAR} role="tab">
            Stadgar
          </Link>
        </li>
      </ul>
      {children}
    </>
  );
}
