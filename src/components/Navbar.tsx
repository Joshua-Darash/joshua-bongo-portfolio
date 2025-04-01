
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">
          Joshua Bongo
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-foreground hover:text-secondary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-50 flex flex-col items-center pt-10">
            <nav>
              <ul className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xl font-medium text-foreground hover:text-secondary transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
