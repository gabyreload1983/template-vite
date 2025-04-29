import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-4">
      <ModeToggle />
      Navbar
    </header>
  );
}
