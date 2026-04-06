import { motion } from "motion/react";
import { Menu, X, Phone, Instagram, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-5xl glass rounded-3xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "shadow-premium py-2" : ""
        }`}
      >
        {/* Left Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                location.pathname === link.href ? "text-accent" : "text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex flex-col items-center">
          <span className="font-serif text-xl font-bold tracking-tighter text-primary">
            MONELS
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold -mt-1">
            Salão de Beleza
          </span>
        </Link>

        {/* Right Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                location.pathname === link.href ? "text-accent" : "text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-primary/10">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/5583999999999" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-20 left-4 right-4 glass rounded-3xl p-6 md:hidden shadow-premium"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 border-b border-primary/5 ${
                  location.pathname === link.href ? "text-accent" : "text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 pt-4">
              <Instagram size={24} className="text-accent" />
              <Phone size={24} className="text-accent" />
              <MapPin size={24} className="text-accent" />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
