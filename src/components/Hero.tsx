import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lighthouse.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge variant="outline" className="mb-6 border-primary/50 bg-background/80 backdrop-blur-sm text-foreground px-4 py-2">
          🌟 Vivi l'Emilia-Romagna come mai prima
        </Badge>

        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
          <span className="block animate-fade-in opacity-0" style={{
          animationDelay: '0ms',
          animationFillMode: 'forwards'
        }}>
            Non sai mai cosa fare?
          </span>
          <span className="block animate-fade-in opacity-0" style={{
          animationDelay: '200ms',
          animationFillMode: 'forwards',
          color: '#E9570D'
        }}>
            Townly lo sa
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium text-foreground/80 animate-fade-in opacity-0 text-center" style={{
        animationDelay: '600ms',
        animationFillMode: 'forwards'
      }}>
          Scopri la tua città attraverso esperienze autentiche                  
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0" style={{
        animationDelay: '800ms',
        animationFillMode: 'forwards'
      }}>
          <Link to="/esperienze">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group w-full sm:w-auto">
              Scopri le esperienze
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/chi-siamo">
            <Button size="lg" variant="outline" className="border-2 border-foreground/20 bg-background/80 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background w-full sm:w-auto">
              Come funziona
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;