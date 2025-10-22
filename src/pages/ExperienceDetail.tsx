import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ExperienceDetail = () => {
  const { handle } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      
      try {
        const data = await fetchProductByHandle(handle);
        setProduct(data);
        setSelectedVariant(data.variants.edges[0]?.node);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success(`${product.title} aggiunto al carrello!`, {
      position: "top-center",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 max-w-7xl mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-96 bg-secondary/20 rounded-lg mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-8 bg-secondary/20 rounded w-3/4" />
                <div className="h-4 bg-secondary/20 rounded w-full" />
                <div className="h-4 bg-secondary/20 rounded w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Esperienza non trovata</h1>
          <p className="text-muted-foreground">L'esperienza che cerchi non esiste.</p>
        </div>
      </div>
    );
  }

  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const mainImage = product.images.edges[0]?.node.url || '/placeholder.svg';

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={mainImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.images.edges.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.edges.slice(1, 5).map((edge: any, idx: number) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={edge.node.url}
                        alt={`${product.title} ${idx + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-2 bg-townly-orange">Esperienza Locale</Badge>
                <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                
                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Territorio locale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>2-4 ore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>2-10 persone</span>
                  </div>
                </div>

                <div className="border-t border-b py-4 mb-6">
                  <p className="text-3xl font-bold text-townly-orange">€{price.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">a persona</p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-xl">Cosa include</h3>
                <ul className="space-y-2">
                  {['Guida esperta', 'Materiali necessari', 'Assicurazione', 'Assistenza durante l\'esperienza'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h3 className="font-bold text-2xl mb-4">Dettagli dell'esperienza</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="font-bold text-xl mb-4">Seleziona una data</h3>
                
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border mb-6"
                />

                {product.options && product.options.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Opzioni
                    </label>
                    <select 
                      className="w-full border rounded-md p-2"
                      onChange={(e) => {
                        const variant = product.variants.edges.find(
                          (v: any) => v.node.id === e.target.value
                        );
                        setSelectedVariant(variant?.node);
                      }}
                    >
                      {product.variants.edges.map((variant: any) => (
                        <option key={variant.node.id} value={variant.node.id}>
                          {variant.node.title} - €{parseFloat(variant.node.price.amount).toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-townly-orange hover:bg-townly-orangeDark"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Prenota Esperienza
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExperienceDetail;
