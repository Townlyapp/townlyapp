import { useEffect, useState } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CategorySection } from "@/components/CategorySection";
import { MapPin } from "lucide-react";

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
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <MapPin className="w-4 h-4 text-townly-orange" />
              <span className="text-sm font-medium text-townly-orange">Tutte le esperienze</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Vivi la città come <span className="text-townly-orange">un locale</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Scopri esperienze autentiche che ti faranno innamorare del territorio. 
              Ogni momento è pensato per farti sentire parte della comunità locale.
            </p>
          </div>
        </section>

        <CategorySection />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Esplora le esperienze
            </h2>
            <p className="text-lg text-gray-600">
              {products.length > 0 
                ? `${products.length} avventure ti aspettano` 
                : 'Stiamo caricando esperienze straordinarie per te...'}
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
