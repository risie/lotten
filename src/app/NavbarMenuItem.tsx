import Link from "next/link";

type NavMenuItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function MenuItem({ href, children }: NavMenuItemProps) {
  return (
    <li className="text-sm p-3  mx-1 rounded-sm hover:bg-complementary-color">
      <Link href={href}>{children}</Link>
    </li>
  );
}
