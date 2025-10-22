import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const magazineArticles = [
  {
    title: "Le tradizioni artigianali del nostro territorio",
    excerpt: "Scopri come gli artigiani locali mantengono vive le antiche tecniche di lavorazione...",
    image: "/placeholder.svg",
    date: "15 Marzo 2024",
    author: "Maria Rossi",
    category: "Artigianato"
  },
  {
    title: "I sapori autentici della cucina locale",
    excerpt: "Un viaggio tra i prodotti tipici e le ricette tradizionali che raccontano la nostra storia...",
    image: "/placeholder.svg",
    date: "10 Marzo 2024",
    author: "Giuseppe Bianchi",
    category: "Enogastronomia"
  },
  {
    title: "Sentieri nascosti: le perle della natura",
    excerpt: "Esplora i percorsi meno conosciuti che offrono panorami mozzafiato...",
    image: "/placeholder.svg",
    date: "5 Marzo 2024",
    author: "Laura Verdi",
    category: "Natura"
  },
];

const Magazine = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="bg-gradient-to-br from-townly-orange/10 via-white to-townly-gray py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Magazine
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Storie, tradizioni e cultura del territorio
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {magazineArticles.map((article, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-townly-orange uppercase">
                    {article.category}
                  </span>
                  <h3 className="font-bold text-xl mt-2 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Magazine;
