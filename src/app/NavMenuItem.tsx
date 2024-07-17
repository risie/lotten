import Link from "next/link";

type NavMenuItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavMenuItem({ href, children }: NavMenuItemProps) {
  return (
    <li className="bg-slate-400 p-3 mx-1 rounded-sm hover:bg-sky-700">
      <Link href={href}>{children}</Link>
    </li>
  );
}
