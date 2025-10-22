import { ExperienceCard } from "./ExperienceCard";
import { ShopifyProduct } from "@/lib/shopify";
import { ShoppingBag } from "lucide-react";

interface ExperienceGridProps {
  products: ShopifyProduct[];
  isLoading?: boolean;
}

export const ExperienceGrid = ({ products, isLoading }: ExperienceGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-96 bg-secondary/20 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Nessuna esperienza disponibile</h3>
        <p className="text-muted-foreground">
          Le esperienze verranno aggiunte presto. Torna a trovarci!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ExperienceCard key={product.node.id} product={product} />
      ))}
    </div>
  );
};
