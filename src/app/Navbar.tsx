import MenuItem from "./NavbarMenuItem";

export default function Navbar() {
  return (
    <nav className="flex">
      <ul className="flex items-center hidden sm:flex">
        <MenuItem href="/">Hem</MenuItem>
        <MenuItem href="/bilder">Bilder</MenuItem>
        <MenuItem href="/kop-och-salj">Köp och sälj</MenuItem>
        <MenuItem href="/kontakt">Kontakt</MenuItem>
      </ul>
    </nav>
  );
}
