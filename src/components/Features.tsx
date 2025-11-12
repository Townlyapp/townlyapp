import { MapPin, Shield, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: "Guide del posto",
    description: "Niente tour operator improvvisati. Solo local che vivono e respirano questi posti ogni giorno.",
  },
  {
    icon: Shield,
    title: "Tutto coperto",
    description: "Assicurazione, sicurezza, partner verificati. Tu pensa solo a divertirti.",
  },
  {
    icon: Heart,
    title: "Zero cose turistiche",
    description: "Qui trovi roba vera. Posti segreti, esperienze autentiche. Niente trappole per turisti.",
  },
  {
    icon: Users,
    title: "Per tutti i tipi",
    description: "Da solo, con la morosa, con gli amici. Avventura o relax. C'è di tutto, trovi sempre quello che fa per te.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Perché Townly è diverso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Non siamo il solito sito di prenotazioni. Siamo quelli che ti fanno scoprire posti che non sapevi esistessero 😎
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center space-y-4 p-6 rounded-2xl hover:bg-secondary/50 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
