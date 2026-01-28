import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import townlyLogo from "@/assets/townly-logo.svg";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Load Iubenda script only once
    const script = document.createElement('script');
    script.src = "https://cdn.iubenda.com/iubenda.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src={townlyLogo} 
                alt="Townly Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/80 text-sm">
              Esperienze autentiche in Emilia-Romagna per chi vuole scoprire il territorio in modo unico.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-bold mb-4">Scopri</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/esperienze" className="hover:text-primary transition-colors">
                  Tutte le Esperienze
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="hover:text-primary transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/diventa-partner" className="hover:text-primary transition-colors">
                  Diventa Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-bold mb-4">Supporto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/termini-uso" className="hover:text-primary transition-colors">
                  Termini e Condizioni
                </Link>
              </li>
              <li>
                <Link to="/politica-rimborso" className="hover:text-primary transition-colors">
                  Rimborsi e Cancellazioni
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold mb-4">Seguici</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-warm flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-warm flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@townly.it"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-warm flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            {/* Iubenda Links */}
            <div className="space-y-2 text-sm">
              <div>
                <a 
                  href="https://www.iubenda.com/privacy-policy/52559786" 
                  className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe hover:text-primary transition-colors" 
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </div>
              <div>
                <a 
                  href="https://www.iubenda.com/privacy-policy/52559786/cookie-policy" 
                  className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe hover:text-primary transition-colors" 
                  title="Cookie Policy"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>© 2025 Townly. Tutti i diritti riservati. Made with ❤️ in Emilia-Romagna</p>
          <p className="mt-2">P.IVA 04133580367</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
