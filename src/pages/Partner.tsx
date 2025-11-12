import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Handshake, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const benefits = [
  {
    icon: TrendingUp,
    title: "Visibilità immediata",
    description: "La tua attività vista da centinaia di persone ogni giorno. Zero costi di marketing."
  },
  {
    icon: Users,
    title: "Clienti già pronti",
    description: "Ti mandiamo gente che vuole davvero prenotare. No perdite di tempo, solo business."
  },
  {
    icon: Shield,
    title: "Pagamenti sicuri",
    description: "Incassi gestiti da noi, pagamenti puntuali. Tu pensa solo all'esperienza."
  },
  {
    icon: Handshake,
    title: "Supporto totale",
    description: "Un team che ti segue passo passo. Problemi? Li risolviamo insieme."
  }
];

const Partner = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Richiesta inviata! Ti ricontatteremo presto 🚀", {
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
              <Handshake className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Diventa Partner</span>
            </div>
            
            <h1 className="mb-6 leading-tight">
              Hai un'esperienza figa da offrire?
              <br />
              <span className="text-primary">Facciamola conoscere insieme</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Sei una guida, un produttore, un'azienda agricola o un centro sportivo in Emilia-Romagna? 
              Unisciti a noi e porta la tua passione a centinaia di persone ogni mese.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="mb-4">Perché diventare partner Townly</h2>
              <p className="text-xl text-muted-foreground">
                Non è la solita partnership. È un vero boost per il tuo business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-2">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="mb-4">Come funziona</h2>
              <p className="text-xl text-muted-foreground">
                3 step e sei online. Facilissimo.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Compila il form",
                  description: "Raccontaci cosa fai, dove, e perché la gente dovrebbe provarla. Più dettagli dai, meglio è."
                },
                {
                  step: "02",
                  title: "Ti contattiamo",
                  description: "Chiamata veloce per capire se c'è match. Di solito rispondiamo in 24-48 ore max."
                },
                {
                  step: "03",
                  title: "Sei online",
                  description: "Foto, descrizione, calendario. Mettiamo tutto online e iniziamo a portarti clienti."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="text-5xl font-bold text-primary/20 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12 border-2">
              <div className="text-center mb-8">
                <h2 className="mb-4">Iniziamo subito</h2>
                <p className="text-lg text-muted-foreground">
                  Compila il form e ti ricontatteremo velocemente
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input required placeholder="Il tuo nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Cognome</label>
                    <Input required placeholder="Il tuo cognome" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input required type="email" placeholder="tua@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telefono</label>
                  <Input required type="tel" placeholder="+39 123 456 7890" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nome attività/azienda</label>
                  <Input required placeholder="Come si chiama la tua attività" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tipo di esperienza</label>
                  <Input required placeholder="Es: Tour in bici, degustazione vini, corso di pasta..." />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Dove si svolge</label>
                  <Input required placeholder="Città o zona in Emilia-Romagna" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Raccontaci la tua esperienza</label>
                  <Textarea 
                    required 
                    placeholder="Cosa rende speciale la tua attività? Perché le persone dovrebbero provarla?"
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Invia richiesta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Rispondiamo di solito entro 24-48 ore. Check la tua email!
                </p>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partner;
