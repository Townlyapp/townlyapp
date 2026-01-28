import { Link } from "react-router-dom";
import adventureImg from "@/assets/experience-adventure.jpg";
import gustoImg from "@/assets/experience-gusto.jpg";
import networkingImg from "@/assets/experience-networking.jpg";
import culturaImg from "@/assets/experience-cultura.jpg";

const moods = [
  {
    name: "Avventura",
    description: "Adrenalina e natura selvaggia",
    image: adventureImg,
    gradient: "from-primary/80 to-primary/40",
  },
  {
    name: "Gusto",
    description: "Sapori autentici del territorio",
    image: gustoImg,
    gradient: "from-secondary/80 to-secondary/40",
  },
  {
    name: "Networking",
    description: "Esperienze in buona compagnia",
    image: networkingImg,
    gradient: "from-accent/80 to-accent/40",
  },
  {
    name: "Cultura",
    description: "Storia e tradizioni locali",
    image: culturaImg,
    gradient: "from-primary/60 to-accent/60",
  },
];

const MoodSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Scopri per Mood 😎
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Che voglia hai oggi? Trova l'esperienza perfetta per il tuo stato d'animo!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moods.map((mood) => (
            <Link
              key={mood.name}
              to="/esperienze"
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-glow transition-all duration-500 hover-scale"
            >
              <img
                src={mood.image}
                alt={mood.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${mood.gradient} group-hover:opacity-90 transition-all duration-300`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-3xl font-display font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {mood.name}
                </h3>
                <p className="text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{mood.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodSection;
