import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 dark:bg-gray-900 bg-gray-100">
      <Link to="/" className="text-xl font-bold">
        MyApp
      </Link>

      {/* Menú en escritorio */}
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <ModeToggle />
      </div>

      {/* Menú hamburguesa para móvil */}
      <div className="md:hidden">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-lg px-4" onClick={handleLinkClick}>
                Home
              </Link>
              <Link
                to="/about"
                className="text-lg px-4"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <div className="px-4">
                <ModeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
