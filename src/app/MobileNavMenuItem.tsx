import Link from "next/link";

type MobileNavMenuItemProps = {
  href: string;
  children: React.ReactNode;
  active: boolean;
};
export default function MobileNavMenuItem({
  href,
  children,
  active,
}: MobileNavMenuItemProps) {
  return (
    <li className=" flex justify-end items-center text-xl p-3 mx-1 rounded-sm">
      <Link href={href}>{children}</Link>
      {active && (
        <span className="bg-complementary-color h-6 w-1 rounded-full inline-block ml-2"></span>
      )}
    </li>
  );
}
