import { Button } from '@/components/ui/button';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.png"
          alt="Emilia-Romagna landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-white mb-6 leading-tight animate-fade-in">
          Vivi l'Emilia-Romagna <br />
          <span className="text-townly-sun">fuori dal comune</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-light animate-fade-in">
          Niente piani? Nessun problema. <br className="hidden md:block" />
          Qui trovi le esperienze più fighe del territorio 🔥
        </p>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-8 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Cerca un'attività o un luogo..."
              className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm border-none shadow-xl rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-8 py-6 rounded-full font-semibold"
            asChild
          >
            <a href="#esperienze">
              Scopri le esperienze
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg px-8 py-6 rounded-full font-semibold"
            asChild
          >
            <a href="#come-funziona">
              Come funziona
            </a>
          </Button>
        </div>

        {/* Trust badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-white/90 text-sm animate-fade-in">
          <span className="inline-block w-2 h-2 bg-townly-sun rounded-full animate-pulse" />
          Oltre 500 avventure prenotate quest'anno
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default Hero;
