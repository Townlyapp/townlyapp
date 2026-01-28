import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import townlyLogo from "@/assets/townly-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Pages where navbar text should be white when transparent
  const whiteTextPages = ['/esperienze', '/chi-siamo', '/diventa-partner', '/contatti'];
  const isWhiteTextPage = whiteTextPages.some(page => location.pathname === page || location.pathname.startsWith('/product/'));
  const shouldBeWhite = isWhiteTextPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blocca scroll quando menu è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Esperienze", path: "/esperienze" },
    { name: "Chi Siamo", path: "/chi-siamo" },
    { name: "Diventa Partner", path: "/diventa-partner" },
    { name: "Blog", path: "/blog" },
    { name: "Contatti", path: "/contatti" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-0.5">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={townlyLogo} 
                alt="Townly Logo" 
                className="h-24 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-all duration-300 font-medium whitespace-nowrap relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    shouldBeWhite 
                      ? 'text-white hover:text-white/80 after:bg-white' 
                      : 'text-foreground hover:text-primary after:bg-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-10 h-10 flex flex-col justify-center items-center rounded-lg transition-colors duration-200 ${
                  shouldBeWhite ? 'hover:bg-white/20' : 'hover:bg-muted/50'
                }`}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <span 
                  className={`block absolute h-[2px] w-5 rounded-full transition-all duration-300 ease-in-out ${
                    shouldBeWhite ? 'bg-white' : 'bg-foreground'
                  } ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
                />
                <span 
                  className={`block absolute h-[2px] w-5 rounded-full transition-all duration-300 ease-in-out ${
                    shouldBeWhite ? 'bg-white' : 'bg-foreground'
                  } ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
                />
                <span 
                  className={`block absolute h-[2px] w-5 rounded-full transition-all duration-300 ease-in-out ${
                    shouldBeWhite ? 'bg-white' : 'bg-foreground'
                  } ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] max-w-[85vw] bg-background z-50 lg:hidden shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header del drawer */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-lg font-semibold text-foreground">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors duration-200"
            aria-label="Chiudi menu"
          >
            <span className="block relative w-5 h-5">
              <span className="block absolute top-1/2 left-0 h-[2px] w-5 bg-foreground rounded-full rotate-45 -translate-y-1/2" />
              <span className="block absolute top-1/2 left-0 h-[2px] w-5 bg-foreground rounded-full -rotate-45 -translate-y-1/2" />
            </span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li 
                key={link.path}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `all 0.3s ease-out ${index * 50 + 100}ms`
                }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer del drawer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Scopri l'Emilia-Romagna con Townly
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
