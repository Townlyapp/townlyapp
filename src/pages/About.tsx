import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Users, MapPin, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-sm">
              <Heart className="w-5 h-5 text-townly-orange" />
              <span className="text-sm font-medium text-townly-orange">Chi siamo</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Persone appassionate<br />del <span className="text-townly-orange">territorio</span>
            </h1>
            
            <div className="max-w-2xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Siamo un gruppo di persone appassionate del territorio e delle esperienze autentiche.
              </p>
              <p>
                Crediamo che il modo migliore per scoprire una città non sia solo visitarla, ma <strong>viverla davvero</strong> — attraverso le persone, i sapori e le attività che la rendono unica.
              </p>
              <p className="text-xl font-semibold text-townly-orange">
                La nostra missione è far scoprire le bellezze delle città attraverso esperienze genuine e indimenticabili.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              I nostri valori
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Questi principi guidano ogni esperienza che selezioniamo per te
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Autenticità",
                description: "Ogni esperienza racconta una storia vera, fatta di persone e tradizioni locali"
              },
              {
                icon: Users,
                title: "Connessione",
                description: "Creiamo ponti tra viaggiatori e comunità, per scoprire insieme il territorio"
              },
              {
                icon: MapPin,
                title: "Scoperta",
                description: "Ti portiamo dove i turisti non arrivano, nei luoghi che solo i locali conoscono"
              },
              {
                icon: Target,
                title: "Qualità",
                description: "Selezioniamo con cura ogni esperienza per garantire momenti indimenticabili"
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={idx} 
                  className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-white to-orange-50/30"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-townly-orange to-townly-orangeLight text-white mb-6 shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Image Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/networking.jpeg"
                alt="Persone che vivono un'esperienza locale"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Vivi la città come un locale
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Non siamo una semplice piattaforma di prenotazioni. Siamo persone che amano 
                il proprio territorio e vogliono condividerlo con chi cerca esperienze autentiche.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ogni esperienza che trovi qui è stata scelta con passione, testata con cura, 
                e pensata per farti sentire parte della comunità locale.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-townly-orange to-townly-orangeLight flex items-center justify-center text-white font-bold border-2 border-white">
                    50+
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Oltre 50 esperienze</strong> selezionate con cura
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="relative overflow-hidden border-none">
            <div className="absolute inset-0 bg-gradient-to-br from-townly-orange via-townly-orangeLight to-orange-400"></div>
            <div className="relative z-10 p-12 md:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sei un operatore locale?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
                Se offri esperienze autentiche e vuoi far scoprire il tuo territorio 
                a viaggiatori curiosi, unisciti alla nostra community
              </p>
              <a 
                href="/#contact"
                className="inline-block bg-white text-townly-orange px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Collabora con noi
              </a>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
