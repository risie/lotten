import { usePathname } from "next/navigation";
import MobileNavMenuItem from "./MobileNavMenuItem";

type MobileNavProps = {
  mobileNavOpen: boolean;
  toggle: () => void;
};
export default function MobileNav({ mobileNavOpen, toggle }: MobileNavProps) {
  const pathname = usePathname();
  return (
    mobileNavOpen && (
      <nav
        className="fixed w-full h-full bg-main-bg-color inset-0"
        onClick={toggle}
      >
        <div className="flex-col text-right px-5 py-1">
          <button onClick={toggle}>
            <div className="relative py-4 px-5">
              <div className="w-7 h-1 bg-complementary-color rounded-sm m-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
              <div className="w-7 h-1 bg-complementary-color rounded-sm m-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
          </button>
          <ul>
            <MobileNavMenuItem href="/" active={pathname === "/"}>
              Hem
            </MobileNavMenuItem>
            <MobileNavMenuItem href="/bilder" active={pathname === "/bilder"}>
              Bilder
            </MobileNavMenuItem>
            <MobileNavMenuItem
              href="/kop-och-salj"
              active={pathname === "/kop-och-salj"}
            >
              Köp och Sälj
            </MobileNavMenuItem>
            <MobileNavMenuItem href="/kontakt" active={pathname === "/kontakt"}>
              Kontakt
            </MobileNavMenuItem>
          </ul>
        </div>
      </nav>
    )
  );
}
