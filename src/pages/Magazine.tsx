import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const magazineArticles = [
  {
    title: "L'arte del fare: i segreti degli artigiani locali",
    excerpt: "Abbiamo trascorso una giornata con i maestri artigiani per scoprire le tecniche tramandate da generazioni. Ogni gesto racconta una storia...",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800",
    date: "15 Marzo 2024",
    author: "Redazione",
    category: "Artigianato"
  },
  {
    title: "Sapori dimenticati: alla ricerca delle ricette perdute",
    excerpt: "Un viaggio tra i sapori autentici del territorio. Dalle nonne custodi della tradizione alle trattorie di famiglia che resistono al tempo...",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    date: "10 Marzo 2024",
    author: "Redazione",
    category: "Enogastronomia"
  },
  {
    title: "I sentieri che nessuno conosce",
    excerpt: "Esplora i percorsi segreti che solo i locali conoscono. Luoghi magici dove il tempo sembra essersi fermato...",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800",
    date: "5 Marzo 2024",
    author: "Redazione",
    category: "Natura"
  },
];

const Magazine = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <Calendar className="w-4 h-4 text-townly-orange" />
              <span className="text-sm font-medium text-townly-orange">Magazine</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Storie di <span className="text-townly-orange">territorio</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Racconti autentici, tradizioni da scoprire e ispirazioni per la tua prossima avventura locale
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {magazineArticles.map((article, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-none group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-townly-orange px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mt-2 mb-3 group-hover:text-townly-orange transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
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
          
          <div className="text-center mt-12">
            <p className="text-gray-500 italic">Prossimamente altre storie dal territorio...</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Magazine;
