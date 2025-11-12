import { Search, Calendar, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Scegli cosa ti ispira",
    description: "Scroll, esplora, scopri. Qui trovi solo esperienze autentiche, selezionate da chi il territorio lo vive davvero."
  },
  {
    icon: Calendar,
    title: "Prenota in 2 minuti",
    description: "Data, orario, pagamento. Tutto online, tutto sicuro. Conferma istantanea e sei già pronto a partire 🚀"
  },
  {
    icon: Sparkles,
    title: "Vivi il momento",
    description: "Presentati, rilassati, goditi. Guide locali fighe che sanno tutto. Il resto? Viene da sé."
  }
];

const HowItWorks = () => {
  return (
    <section id="come-funziona" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Facile come bere un bicchiere d'acqua
          </h2>
          <p className="text-xl text-muted-foreground">
            3 step e sei dentro l'avventura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connector line - hidden on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent"></div>
                )}
                
                <div className="text-center space-y-4 relative z-10">
                  {/* Icon circle */}
                  <div className="relative inline-flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
