import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryInfo: Record<string, { title: string; description: string }> = {
  natura: {
    title: "Immergiti nella natura",
    description: "Respira aria pura, cammina tra i sentieri nascosti e riscopri il contatto con la natura. Ogni passo è un'emozione."
  },
  artigianato: {
    title: "Crea con le tue mani",
    description: "Impara dai maestri artigiani locali, scopri tecniche antiche e porta a casa qualcosa che hai creato tu."
  },
  enogastronomia: {
    title: "Sapori del territorio",
    description: "Assaggia la tradizione, scopri ricette tramandate da generazioni e lasciati conquistare dai sapori autentici."
  },
  sport: {
    title: "Avventura e adrenalina",
    description: "Sfida te stesso, vivi emozioni forti e scopri il territorio da una prospettiva completamente nuova."
  },
  cultura: {
    title: "Storie e tradizioni",
    description: "Ogni luogo ha una storia da raccontare. Scoprila attraverso gli occhi di chi la vive ogni giorno."
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
