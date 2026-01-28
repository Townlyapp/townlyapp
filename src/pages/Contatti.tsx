import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/hero-contatti.jpg";
import PageTransition from "@/components/PageTransition";

const Contatti = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Contatti | Townly - Scrivici per Info ed Esperienze</title>
        <meta name="description" content="Contattaci per informazioni sulle esperienze in Emilia-Romagna. Siamo qui per aiutarti a vivere momenti autentici nella Food Valley italiana." />
        <link rel="canonical" href="https://townly.it/contatti" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Contattaci - Townly"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)' }}>
                Contatti
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)' }}>
                Hai domande? Siamo qui per te
              </p>
            </div>
          </div>
        </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Che tu voglia saperne di più, suggerire una nuova esperienza o semplicemente darci un feedback, siamo sempre felici di ascoltarti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="hover:shadow-glow transition-all duration-300 hover-scale">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E9570D' }}>
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2" style={{ color: '#8B4513' }}>
                  Email
                </h3>
                <a 
                  href="mailto:info@townlyapp.com" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  info@townlyapp.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300 hover-scale">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E9570D' }}>
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2" style={{ color: '#8B4513' }}>
                  Telefono
                </h3>
                <a 
                  href="tel:+393514567890" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  +39 351 4567890
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contatti;
