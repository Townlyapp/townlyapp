import { ShopifyProduct } from "@/lib/shopify";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

interface ExperienceCardProps {
  product: ShopifyProduct;
}

export const ExperienceCard = ({ product }: ExperienceCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) {
      toast.error("Variante non disponibile");
      return;
    }

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions
    });

    toast.success("🎉 Aggiunto al carrello!", {
      description: `${product.node.title} ti aspetta`
    });
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Rimosso dai preferiti" : "❤️ Aggiunto ai preferiti");
  };

  const price = product.node.priceRange.minVariantPrice;
  const imageUrl = product.node.images?.edges?.[0]?.node.url || "/placeholder.svg";

  return (
    <Link to={`/esperienza/${product.node.handle}`}>
      <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden group border-none bg-white">
        <CardHeader className="p-0 relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={imageUrl}
              alt={product.node.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>

          {/* Rating badge */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <Star className="w-4 h-4 text-townly-orange fill-townly-orange" />
            <span className="text-sm font-semibold">4.9</span>
          </div>
        </CardHeader>
        
        <CardContent className="p-5">
          <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-townly-orange transition-colors">
            {product.node.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
            {product.node.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-gray-500">da</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-townly-orange to-townly-orangeLight bg-clip-text text-transparent">
                €{parseFloat(price.amount).toFixed(0)}
              </span>
            </div>
            <span className="text-sm text-gray-500">a persona</span>
          </div>
        </CardContent>
        
        <CardFooter className="p-5 pt-0">
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-townly-orange to-townly-orangeLight hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            Prenota ora
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
