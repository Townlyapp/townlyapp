import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import InfoSections from '@/components/InfoSections';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { ExperienceGrid } from '@/components/ExperienceGrid';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(6);
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        
        <HowItWorks />
        
        <section id="esperienze" className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
                <Sparkles className="w-4 h-4 text-townly-orange" />
                <span className="text-sm font-medium text-gray-700">Le più amate</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Esperienze da non perdere
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Selezionate con cura per regalarti momenti indimenticabili
              </p>
            </div>
            
            <ExperienceGrid products={products.slice(0, 6)} isLoading={isLoading} />
            
            {products.length > 0 && (
              <div className="text-center mt-12">
                <Link to="/esperienze">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-townly-orange to-townly-orangeLight hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Scopri tutte le esperienze
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        <InfoSections />
        <Features />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
