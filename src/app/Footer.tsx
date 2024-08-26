import Link from "next/link";
import Map from "./Map";
export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <h6 className="footer-title">Hitta hit</h6>
        <Map />
      </aside>
      <nav>
        <h6 className="footer-title">Länkar</h6>
        <Link href="" className="link link-hover">
          Kontakta oss
        </Link>
        <Link href="https://vanersborg.se/" className="link link-hover">
          Vänersborgs kommun
        </Link>
        <Link href="https://koloni.org/" className="link link-hover">
          Koloniträdgårdsförbundet
        </Link>
      </nav>
    </footer>
  );
}
