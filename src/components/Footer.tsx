const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Townly" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              L'Emilia-Romagna come non l'hai mai vista. Esperienze vere, gente vera, momenti veri. 
              Stop al turismo classico, benvenuto nell'avventura.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Link veloci</h3>
            <ul className="space-y-2">
              <li><a href="/esperienze" className="text-background/70 hover:text-background transition-colors">Esperienze</a></li>
              <li><a href="/chi-siamo" className="text-background/70 hover:text-background transition-colors">Chi Siamo</a></li>
              <li><a href="/partner" className="text-background/70 hover:text-background transition-colors">Diventa Partner</a></li>
              <li><a href="/#contact" className="text-background/70 hover:text-background transition-colors">Contatti</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Seguici</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Instagram</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Facebook</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/70 text-sm">
            &copy; {currentYear} Townly. P.IVA 04133580367. Made with ❤️ in Emilia-Romagna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
