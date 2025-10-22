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
                <Badge className="mb-3 bg-gradient-to-r from-townly-orange to-townly-orangeLight text-white border-none">
                  ✨ Esperienza Autentica
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {product.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-townly-orange" />
                    <span className="font-medium">Territorio locale</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <Clock className="h-5 w-5 text-townly-orange" />
                    <span className="font-medium">2-4 ore</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <Users className="h-5 w-5 text-townly-orange" />
                    <span className="font-medium">2-10 persone</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-xl p-6 mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm text-gray-600">A partire da</span>
                    <p className="text-4xl font-bold bg-gradient-to-r from-townly-orange to-townly-orangeLight bg-clip-text text-transparent">
                      €{price.toFixed(0)}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">a persona</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Cosa vivrai</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-white border-green-100">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Cosa include
                </h3>
                <ul className="space-y-3">
                  {[
                    'Guida locale esperta e appassionata',
                    'Tutti i materiali necessari',
                    'Assicurazione completa',
                    'Assistenza durante tutta l\'esperienza',
                    'Ricordi indimenticabili'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8 border-none shadow-xl">
                <h3 className="font-bold text-3xl mb-6">L'esperienza nel dettaglio</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 my-8 border border-blue-100">
                    <h4 className="font-bold text-xl mb-4 text-gray-900">
                      💡 Perché scegliere questa esperienza?
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-townly-orange font-bold">→</span>
                        <span>Scoprirai luoghi che solo i locali conoscono</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-townly-orange font-bold">→</span>
                        <span>Vivrai un'esperienza autentica, lontana dal turismo di massa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-townly-orange font-bold">→</span>
                        <span>Sarai guidato da esperti appassionati del territorio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-townly-orange font-bold">→</span>
                        <span>Porterai a casa ricordi indimenticabili</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24 border-2 border-orange-100 shadow-xl">
                <h3 className="font-bold text-xl mb-4">Prenota la tua esperienza</h3>
                
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
                  className="w-full bg-gradient-to-r from-townly-orange to-townly-orangeLight hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Aggiungi al carrello
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-3">
                  🔒 Prenotazione sicura • Assistenza garantita
                </p>
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
