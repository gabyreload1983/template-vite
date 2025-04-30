// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 items-center dark:bg-gray-900 bg-gray-100">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <ModeToggle />
    </nav>
  );
}
