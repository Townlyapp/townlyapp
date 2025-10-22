import { useEffect, useState } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CategorySection } from "@/components/CategorySection";

const Experiences = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
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
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="bg-gradient-to-br from-townly-orange/10 via-white to-townly-gray py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vivi il Territorio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scopri esperienze autentiche e indimenticabili nel cuore della nostra terra
            </p>
          </div>
        </section>

        <CategorySection />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Tutte le Esperienze</h2>
            <p className="text-muted-foreground">
              {products.length > 0 
                ? `${products.length} esperienze disponibili` 
                : 'Caricamento esperienze...'}
            </p>
          </div>

          <ExperienceGrid products={products} isLoading={isLoading} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experiences;
