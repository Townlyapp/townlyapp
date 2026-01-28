import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sparkles, Calendar, ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-chi-siamo.jpg";
import PageTransition from "@/components/PageTransition";

const ChiSiamo = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Chi Siamo | Townly - Esperienze in Emilia-Romagna</title>
        <meta name="description" content="Scopri chi siamo e la nostra missione: aiutarti a scoprire esperienze autentiche in Emilia-Romagna. Guide locali, food valley italiana." />
        <link rel="canonical" href="https://townly.it/chi-siamo" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImage} alt="Chi siamo - Townly" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)' }}>
                Chi Siamo
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)' }}>
                La tua guida per scoprire l'Emilia-Romagna
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{
                color: '#E9570D'
              }}>
                  Townly nasce per dare vita ai tuoi weekend
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Perché la vita è troppo corta per scrollare social o sentire <br className="hidden md:block" />
                  <span className="font-semibold">"Eh, tanto non c'è niente da fare"</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Cards */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center" style={{
              color: '#8B4513'
            }}>
                Con noi puoi
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <Card className="hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                    backgroundColor: '#FEF3EC'
                  }}>
                      <Heart className="w-8 h-8" style={{
                      color: '#E9570D'
                    }} />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-3" style={{
                    color: '#8B4513'
                  }}>
                      Non annoiarti mai
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Ogni weekend è un'avventura diversa: serate, gite, esperienze insolite o classiche, ma tutte da vivere sul serio
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                    backgroundColor: '#FEF3EC'
                  }}>
                      <Sparkles className="w-8 h-8" style={{
                      color: '#E9570D'
                    }} />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-3" style={{
                    color: '#8B4513'
                  }}>
                      Scoprire passioni nuove
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Dallo sport outdoor alle degustazioni gourmet, dalle attività creative agli eventi locali: provi cose nuove
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                    backgroundColor: '#FEF3EC'
                  }}>
                      <Users className="w-8 h-8" style={{
                      color: '#E9570D'
                    }} />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-3" style={{
                    color: '#8B4513'
                  }}>
                      Sentirti a casa
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Incontri persone autentiche, vivi la cultura locale e senti subito il territorio come tuo
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-display font-bold leading-relaxed" style={{
              color: '#E9570D'
            }}>
                Noi ci mettiamo il territorio e le esperienze, <br className="hidden md:block" />
                tu ci metti la voglia di viverle
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center" style={{
            color: '#E9570D'
          }}>
              Come Funziona
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
              Tre semplici passi per trasformare il tuo weekend
            </p>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Step 1 */}
                <div className="relative">
                  <Card className="h-full hover:shadow-glow transition-all duration-300 border-2">
                    <CardContent className="pt-8 pb-8 text-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold font-display mx-auto mb-6 shadow-lg" style={{
                      backgroundColor: '#E9570D',
                      color: 'white'
                    }}>
                        1
                      </div>
                      <MapPin className="w-10 h-10 mx-auto mb-4" style={{
                      color: '#E9570D'
                    }} />
                      <h3 className="text-2xl font-display font-bold mb-3" style={{
                      color: '#8B4513'
                    }}>
                        Scegli
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Sfoglia le esperienze disponibili nella tua zona o scopri nuovi territori dell'Emilia-Romagna
                      </p>
                      <ul className="text-left text-sm text-muted-foreground space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Filtra per categoria</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Leggi recensioni</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Controlla disponibilità</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  {/* Connector Arrow - Hidden on mobile */}
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-12 h-12 text-primary/30" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <Card className="h-full hover:shadow-glow transition-all duration-300 border-2">
                    <CardContent className="pt-8 pb-8 text-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold font-display mx-auto mb-6 shadow-lg" style={{
                      backgroundColor: '#E9570D',
                      color: 'white'
                    }}>
                        2
                      </div>
                      <Calendar className="w-10 h-10 mx-auto mb-4" style={{
                      color: '#E9570D'
                    }} />
                      <h3 className="text-2xl font-display font-bold mb-3" style={{
                      color: '#8B4513'
                    }}>
                        Prenota
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Prenota online in pochi click con pagamento sicuro e ricevi conferma immediata
                      </p>
                      <ul className="text-left text-sm text-muted-foreground space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Pagamento sicuro</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Conferma via email</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Gestione prenotazioni</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  {/* Connector Arrow - Hidden on mobile */}
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-12 h-12 text-primary/30" />
                  </div>
                </div>

                {/* Step 3 */}
                <Card className="h-full hover:shadow-glow transition-all duration-300 border-2">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold font-display mx-auto mb-6 shadow-lg" style={{
                    backgroundColor: '#E9570D',
                    color: 'white'
                  }}>
                      3
                    </div>
                    <Heart className="w-10 h-10 mx-auto mb-4" style={{
                    color: '#E9570D'
                  }} />
                    <h3 className="text-2xl font-display font-bold mb-3" style={{
                    color: '#8B4513'
                  }}>
                      Vivi
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Goditi la tua esperienza e crea ricordi indimenticabili con persone speciali
                    </p>
                    <ul className="text-left text-sm text-muted-foreground space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Esperienze autentiche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Guide esperte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Momenti unici</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-warm text-white border-0 shadow-glow overflow-hidden">
                <CardContent className="py-12 md:py-16 px-6 md:px-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Pronto a vivere la tua prossima avventura?
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                    Scopri tutte le esperienze disponibili in Emilia-Romagna e inizia a creare ricordi indimenticabili
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/esperienze">
                      <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 hover:scale-105 transition-transform text-lg">
                        Esplora le Esperienze
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                    <Link to="/contatti">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/30 hover:bg-white/20 text-white text-lg">
                        Contattaci
                      </Button>
                    </Link>
                  </div>
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
export default ChiSiamo;