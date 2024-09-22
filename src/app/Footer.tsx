import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Kontakta Oss</h6>
        <Link
          href="https://www.google.com/maps/place/Holm%C3%A4ngens+kolonilottsomr%C3%A5de/@58.3758447,12.3405001,1371m/data=!3m1!1e3!4m6!3m5!1s0x464523a13b9164e5:0x9c94d85d362faff6!8m2!3d58.3755009!4d12.3414405!16s%2Fg%2F11clsgr8zv?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
          className="link link-hover"
        >
          Hitta hit
        </Link>
        <Link href="/kontakt" className="link link-hover">
          Kontakt
        </Link>
        <h6 className="footer-title">Användbara Länkar</h6>
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
