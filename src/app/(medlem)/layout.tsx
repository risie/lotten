"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

enum Paths {
  BYGGREGLER = "/byggregler",
  VATTEN_OCH_AVLOPP = "/vatten-och-avlopp",
  STADGAR = "/stadgar",
  VERKSAMHETSPLAN = "/verksamhetsplan",
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
      <ul role="tablist" className="tabs tabs-bordered">
        <Link
          href={Paths.BYGGREGLER}
          role="tab"
          className={`tab ${isTabActive(Paths.BYGGREGLER, currentPath)}`}
        >
          Byggregler
        </Link>
        <Link
          href={Paths.VERKSAMHETSPLAN}
          role="tab"
          className={`tab ${isTabActive(Paths.VERKSAMHETSPLAN, currentPath)}`}
        >
          Verskamhetsplan
        </Link>
        <Link
          href={Paths.STADGAR}
          role="tab"
          className={`tab ${isTabActive(Paths.STADGAR, currentPath)}`}
        >
          Stadgar
        </Link>
        <Link
          href={Paths.VATTEN_OCH_AVLOPP}
          role="tab"
          className={`tab ${isTabActive(Paths.VATTEN_OCH_AVLOPP, currentPath)}`}
        >
          Vatten och avlopp
        </Link>
      </ul>
      {children}
    </>
  );
}
