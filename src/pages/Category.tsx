import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryInfo: Record<string, { title: string; description: string }> = {
  natura: {
    title: "Esperienze nella Natura",
    description: "Immergiti nel verde: escursioni, trekking e avventure all'aria aperta"
  },
  artigianato: {
    title: "Workshop Artigianali",
    description: "Crea con le tue mani: laboratori e workshop con artigiani locali"
  },
  enogastronomia: {
    title: "Gusto e Tradizione",
    description: "Sapori autentici: degustazioni, tour gastronomici e cooking class"
  },
  sport: {
    title: "Sport e Avventura",
    description: "Adrenalina pura: attività sportive e avventure nel territorio"
  },
  cultura: {
    title: "Arte e Cultura",
    description: "Scopri la storia: tour culturali, musei e visite guidate"
  },
};

const Category = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const category = slug ? categoryInfo[slug] : null;

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
  }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Categoria non trovata</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="bg-gradient-to-br from-townly-orange/10 via-white to-townly-gray py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {category.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {category.description}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExperienceGrid products={products} isLoading={isLoading} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
