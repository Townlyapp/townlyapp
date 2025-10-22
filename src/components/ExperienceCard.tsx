import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ShoppingCart } from "lucide-react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface ExperienceCardProps {
  product: ShopifyProduct;
}

export const ExperienceCard = ({ product }: ExperienceCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const variant = node.variants.edges[0]?.node;
    if (!variant) return;

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success(`${node.title} aggiunto al carrello!`, {
      position: "top-center",
    });
  };

  const imageUrl = node.images.edges[0]?.node.url || '/placeholder.svg';
  const price = parseFloat(node.priceRange.minVariantPrice.amount);

  return (
    <Link to={`/esperienza/${node.handle}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={node.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-xl mb-2">{node.title}</h3>
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
            {node.description}
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Territorio locale</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Varie date</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t">
              <div>
                <p className="text-2xl font-bold text-townly-orange">€{price.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">a persona</p>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="bg-townly-orange hover:bg-townly-orangeDark"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Prenota
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
