import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Users, MapPin, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="bg-gradient-to-br from-townly-orange/10 via-white to-townly-gray py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chi Siamo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La nostra missione è valorizzare il territorio attraverso esperienze autentiche
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">La nostra storia</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Townly nasce dalla passione per il territorio e dalla volontà di creare ponti tra le aziende 
                e le comunità locali. Crediamo che ogni luogo abbia storie da raccontare e esperienze da offrire.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                La nostra piattaforma connette i dipendenti delle aziende con le ricchezze culturali, 
                artigianali e naturali del territorio, migliorando il work-life balance e supportando 
                l'economia locale.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Il nostro team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">I nostri valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Passione",
                description: "Amiamo il nostro territorio e vogliamo farlo scoprire"
              },
              {
                icon: Users,
                title: "Comunità",
                description: "Creiamo connessioni tra persone e luoghi"
              },
              {
                icon: MapPin,
                title: "Autenticità",
                description: "Esperienze genuine e tradizioni vere"
              },
              {
                icon: Target,
                title: "Qualità",
                description: "Selezioniamo solo le migliori esperienze"
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-townly-orange/10 text-townly-orange mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-townly-orange/10 to-townly-orange/5 text-center">
            <h2 className="text-3xl font-bold mb-4">Vuoi collaborare con noi?</h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Se sei un artigiano, una guida turistica o un operatore del settore e vuoi 
              offrire le tue esperienze sulla nostra piattaforma, contattaci!
            </p>
            <a 
              href="#contact"
              className="inline-block bg-townly-orange hover:bg-townly-orangeDark text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Contattaci
            </a>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
