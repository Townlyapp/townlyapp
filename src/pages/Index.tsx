import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoodSection from "@/components/MoodSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ctaBackground from "@/assets/cta-background.jpg";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <MoodSection />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${ctaBackground})`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/40" />
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Vuoi proporre la tua attività?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entra nella community di partner Townly e fai scoprire la tua passione a migliaia di persone!
          </p>
          <Link to="/diventa-partner">
            <Button size="lg" variant="outline" className="border-2 border-white bg-white hover:bg-white/90 hover-scale transition-all duration-300" style={{ color: '#E9570D' }}>
              Scopri Come Funziona
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
