import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/hero-partner.jpg";
import PageTransition from "@/components/PageTransition";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri").max(100, "Il nome è troppo lungo"),
  email: z.string().email("Inserisci un'email valida").max(255, "L'email è troppo lunga"),
  phone: z.string().min(8, "Inserisci un numero di telefono valido").max(20, "Il telefono è troppo lungo"),
  business: z.string().max(200, "Il nome dell'attività è troppo lungo").optional(),
  experience: z.string().max(200, "Il tipo di esperienza è troppo lungo").optional(),
  location: z.string().max(100, "La zona è troppo lunga").optional(),
  message: z.string().max(2000, "Il messaggio è troppo lungo").optional(),
});

type FormValues = z.infer<typeof formSchema>;

const DiventaPartner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      business: "",
      experience: "",
      location: "",
      message: "",
    },
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Visibilità",
      description: "Raggiungi migliaia di potenziali clienti in cerca di esperienze autentiche",
    },
    {
      icon: CheckCircle,
      title: "Zero Costi Fissi",
      description: "Paghi solo una commissione sulle prenotazioni ricevute",
    },
  ];

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldagqge";
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          business: values.business || "Non specificato",
          experience: values.experience || "Non specificato",
          location: values.location || "Non specificato",
          message: values.message || "Nessun messaggio aggiuntivo",
          _replyto: values.email,
          _subject: `Nuova richiesta partner da ${values.name}`,
        }),
      });

      if (response.ok) {
        toast.success("Grazie! La tua richiesta è stata inviata con successo 🎉");
        form.reset();
      } else {
        throw new Error("Errore nell'invio del form");
      }
    } catch (error) {
      console.error("Errore invio form:", error);
      toast.error("Si è verificato un errore. Riprova più tardi o contattaci direttamente a townlyapp@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Diventa Partner | Townly - Offri Esperienze in Emilia-Romagna</title>
        <meta name="description" content="Unisciti a Townly come partner: offri le tue esperienze in Emilia-Romagna a migliaia di visitatori. Zero costi fissi, massima visibilità." />
        <link rel="canonical" href="https://townly.it/diventa-partner" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Diventa Partner Townly"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)' }}>
                Diventa Partner
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)' }}>
                Unisciti a noi e porta la tua esperienza sulla piattaforma
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center" style={{ color: '#E9570D' }}>
                Perché Diventare Partner
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {benefits.map((benefit) => (
                  <Card key={benefit.title} className="hover:shadow-glow transition-all duration-300">
                    <CardContent className="pt-8 pb-8">
                      <benefit.icon className="w-12 h-12 mb-4" style={{ color: '#E9570D' }} />
                      <h3 className="text-xl font-display font-bold mb-2" style={{ color: '#8B4513' }}>
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center" style={{ color: '#E9570D' }}>
                Compila il Form
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Raccontaci qualcosa di te e della tua attività. Ti ricontatteremo al più presto!
              </p>

              <Card>
                <CardContent className="pt-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome *</FormLabel>
                              <FormControl>
                                <Input placeholder="Mario Rossi" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="mario@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefono *</FormLabel>
                            <FormControl>
                              <Input placeholder="+39 123 456 7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="business"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome Attività (opzionale)</FormLabel>
                            <FormControl>
                              <Input placeholder="La mia azienda" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo di Esperienza (opzionale)</FormLabel>
                            <FormControl>
                              <Input placeholder="Es: degustazione vini, tour guidato, corso di cucina" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zona / Località (opzionale)</FormLabel>
                            <FormControl>
                              <Input placeholder="Es: Bologna, Modena, Parma..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Messaggio (opzionale)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Raccontaci di più sulla tua esperienza..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                      </Button>
                    </form>
                  </Form>
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

export default DiventaPartner;
