import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { useTheme } from "../components/theme-provider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/rf3.png");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (theme === "dark") {
      setLogoSrc("/rf3-light.png");
    } else if (theme === "light") {
      setLogoSrc("/rf3.png");
    } else {
      setLogoSrc(systemPrefersDark ? "/rf3-light.png" : "/rf3.png");
    }
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent shadow-none h-16 flex-shrink-0 transition-colors duration-300">
      <div className="flex h-16 items-center justify-between w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt="RFX logo"
            className="h-5 sm:h-5 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = "/fallback-logo.png";
            }}
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
          <Button
            variant="default"
            className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
          >
            <a href="#contact"> Get Started </a>
          </Button>
          <ModeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-foreground hover:bg-foreground/10"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden w-full py-4 bg-background px-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button
              variant="default"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 w-full"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
