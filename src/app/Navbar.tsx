import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/byggregler"}>Medlem</Link>
            </li>
            <li>
              <Link href={"/kontakt"}>Kontakt</Link>
            </li>
            <li>
              <Link href={"/bilder"}> Bilder</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          Holmängens koloniförening
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/byggregler"}>Medlem</Link>
          </li>

          <li>
            <Link href={"/kontakt"}>Kontakt</Link>
          </li>
          <li>
            <Link href={"/bilder"}> Bilder</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
