import { Link } from 'react-router-dom';
import { Zap, Heart, UtensilsCrossed, Landmark, Users, Mountain } from 'lucide-react';

const moods = [
  {
    title: "Adrenalina",
    icon: Zap,
    description: "Per chi non sta mai fermo",
    gradient: "from-orange-500 to-red-500",
    image: "/networking.jpeg",
    slug: "sport"
  },
  {
    title: "Relax",
    icon: Heart,
    description: "Stacca la spina",
    gradient: "from-green-400 to-emerald-500",
    image: "/bg.png",
    slug: "natura"
  },
  {
    title: "Gusto",
    icon: UtensilsCrossed,
    description: "Per buongustai",
    gradient: "from-amber-500 to-orange-600",
    image: "/cristian.jpeg",
    slug: "enogastronomia"
  },
  {
    title: "Cultura",
    icon: Landmark,
    description: "Storia e tradizioni",
    gradient: "from-purple-500 to-pink-500",
    image: "/iuliana.jpeg",
    slug: "cultura"
  },
  {
    title: "Con gli amici",
    icon: Users,
    description: "Weekend di gruppo",
    gradient: "from-blue-500 to-cyan-500",
    image: "/networking.jpeg",
    slug: "sport"
  },
  {
    title: "Outdoor",
    icon: Mountain,
    description: "Nella natura",
    gradient: "from-teal-500 to-green-600",
    image: "/bg.png",
    slug: "natura"
  }
];

const MoodSelector = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            In cerca di ispirazione?
          </h2>
          <p className="text-xl text-muted-foreground">
            Scegli il mood e trova la tua prossima avventura
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {moods.map((mood, index) => {
            const Icon = mood.icon;
            return (
              <Link
                key={index}
                to={`/categoria/${mood.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-square hover:scale-105 transition-transform duration-300"
              >
                {/* Background image */}
                <img
                  src={mood.image}
                  alt={mood.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mood.gradient} opacity-70 group-hover:opacity-80 transition-opacity`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
                  <Icon className="h-10 w-10 md:h-12 md:w-12 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {mood.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    {mood.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MoodSelector;
