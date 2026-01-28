import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Map from "@/components/Map";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/hero-esperienze.jpg";
import PageTransition from "@/components/PageTransition";

// Placeholder experiences data
const placeholderExperiences = [
  {
    id: "1",
    title: "Degustazione in Cantina",
    description: "Scopri i vini pregiati dell'Emilia-Romagna con una degustazione guidata in una cantina storica.",
    category: "Gusto",
    price: 45,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Trekking nelle Colline",
    description: "Un'escursione panoramica tra i paesaggi mozzafiato delle colline emiliane.",
    category: "Avventura",
    price: 35,
    image: "/placeholder.svg"
  },
  {
    id: "3",
    title: "Tour dei Borghi Medievali",
    description: "Visita guidata ai borghi più affascinanti della regione, ricchi di storia e tradizioni.",
    category: "Cultura",
    price: 50,
    image: "/placeholder.svg"
  },
  {
    id: "4",
    title: "Corso di Cucina Romagnola",
    description: "Impara a preparare la pasta fresca e altri piatti tipici con uno chef locale.",
    category: "Gusto",
    price: 75,
    image: "/placeholder.svg"
  },
  {
    id: "5",
    title: "Yoga al Tramonto",
    description: "Sessione di yoga rilassante con vista sulle colline al calar del sole.",
    category: "Relax",
    price: 25,
    image: "/placeholder.svg"
  },
  {
    id: "6",
    title: "Aperitivo con Networking",
    description: "Incontra nuove persone in un evento sociale esclusivo con degustazione di prodotti locali.",
    category: "Networking",
    price: 30,
    image: "/placeholder.svg"
  }
];

const Esperienze = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tutte");

  const filteredExperiences = selectedCategory === "Tutte" 
    ? placeholderExperiences 
    : placeholderExperiences.filter(exp => exp.category === selectedCategory);

  const categories = ["Tutte", "Gusto", "Cultura", "Relax", "Avventura", "Networking"];

  return (
    <PageTransition>
      <Helmet>
        <title>Esperienze in Emilia-Romagna | Townly</title>
        <meta name="description" content="Scopri e prenota le migliori esperienze autentiche in Emilia-Romagna: enogastronomia, cultura, natura e attività outdoor nella Food Valley italiana." />
        <link rel="canonical" href="https://townly.it/esperienze" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Esperienze in Emilia-Romagna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)' }}>
                Esperienze
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)' }}>
                Scopri le migliori esperienze in Emilia-Romagna
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Game Button */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  Vediamo quanto conosci il tuo territorio
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-display">Quiz Emilia-Romagna</DialogTitle>
                  <DialogDescription>
                    Collega le emoji alle città dell'Emilia-Romagna
                  </DialogDescription>
                </DialogHeader>
                <Map />
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm" 
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredExperiences.length === 0 ? (
              <Card className="py-20">
                <CardContent className="text-center">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-2">
                    Nessuna esperienza trovata
                  </h3>
                  <p className="text-muted-foreground">
                    Prova a cambiare filtri
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExperiences.map((experience) => (
                  <Card key={experience.id} className="h-full hover:shadow-glow transition-all duration-300 hover-scale overflow-hidden">
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                        <MapPin className="w-12 h-12 text-primary/40" />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">
                        {experience.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl line-clamp-2">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {experience.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">
                          €{experience.price.toFixed(2)}
                        </span>
                        <Button size="sm" variant="outline" disabled>
                          Prossimamente
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Coming Soon Notice */}
            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
                <CardContent className="py-8">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    Sistema di prenotazione in arrivo! 🚀
                  </h3>
                  <p className="text-muted-foreground">
                    Stiamo lavorando per offrirti la migliore esperienza di prenotazione. Resta sintonizzato!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Esperienze;
