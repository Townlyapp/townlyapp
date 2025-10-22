import { Leaf, Hammer, Wine, Bike, Palette } from "lucide-react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Natura",
    icon: Leaf,
    description: "Escursioni, trekking e giri a cavallo",
    color: "bg-green-500/10 text-green-600",
    slug: "natura"
  },
  {
    name: "Artigianato",
    icon: Hammer,
    description: "Workshop e laboratori creativi",
    color: "bg-amber-500/10 text-amber-600",
    slug: "artigianato"
  },
  {
    name: "Enogastronomia",
    icon: Wine,
    description: "Degustazioni e tour gastronomici",
    color: "bg-red-500/10 text-red-600",
    slug: "enogastronomia"
  },
  {
    name: "Sport",
    icon: Bike,
    description: "Attività sportive e avventure",
    color: "bg-blue-500/10 text-blue-600",
    slug: "sport"
  },
  {
    name: "Cultura",
    icon: Palette,
    description: "Tour culturali e visite guidate",
    color: "bg-purple-500/10 text-purple-600",
    slug: "cultura"
  },
];

export const CategorySection = () => {
  return (
    <section className="py-16 bg-townly-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Esplora per Categoria
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scopri le esperienze che meglio si adattano ai tuoi interessi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} to={`/categoria/${category.slug}`}>
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${category.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
