import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import InfoSections from '@/components/InfoSections';
import AppDemo from '@/components/AppDemo';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { CategorySection } from '@/components/CategorySection';
import { ExperienceGrid } from '@/components/ExperienceGrid';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
        
        <CategorySection />
        
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Esperienze in Evidenza
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Scopri le esperienze più popolari selezionate per te
            </p>
          </div>
          
          <ExperienceGrid products={products.slice(0, 6)} isLoading={isLoading} />
          
          {products.length > 0 && (
            <div className="text-center mt-12">
              <Link to="/esperienze">
                <Button size="lg" className="bg-townly-orange hover:bg-townly-orangeDark">
                  Vedi tutte le esperienze
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          )}
        </section>

        <Features />
        <InfoSections />
        <AppDemo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
