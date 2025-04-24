import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const AppDemo = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const screens = [
    {
      title: "Esplora e Partecipa",
      description: "Scopri eventi, formazioni e iniziative che arricchiscono la tua esperienza professionale e personale."
    }, 
    {
      title: "Community Attiva",
      description: "Entra in contatto con colleghi e professionisti, scambia idee e costruisci relazioni significative."
    }, 
    {
      title: "Formazione Continua",
      description: "Accedi a corsi online e offline su temi attuali per la tua crescita professionale e personale."
    }, 
    {
      title: "Impatto Misurabile",
      description: "Visualizza metriche e analisi che mostrano il valore concreto delle tue partecipazioni."
    }
  ];

  return (
    <section id="app-demo" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-white opacity-50"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-townly-orange/10 text-townly-orange rounded-full">
            Prova l'Esperienza
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vivi Townly in prima persona</h2>
          <p className="text-lg text-gray-600">
            Scopri l'interfaccia intuitiva e le funzionalità innovative della nostra piattaforma di welfare territoriale
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll">
          <div className="order-2 lg:order-1 animate-fade-in-left delay-200 flex justify-center">
            <a href="#contact">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-townly-orange hover:bg-townly-orangeDark transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Vuoi vedere la demo? Scrivici!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          
          {/* App Features */}
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                {screens[activeScreen].title}
              </h3>
              <p className="text-lg text-gray-600">
                {screens[activeScreen].description}
              </p>
              
              <div className="flex flex-col space-y-4">
                {screens.map((screen, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center", 
                      activeScreen === index ? "bg-townly-orange/10 border border-townly-orange/20" : "hover:bg-gray-100"
                    )} 
                    onClick={() => setActiveScreen(index)}
                  >
                    <div className={cn(
                      "w-3 h-3 rounded-full mr-3", 
                      activeScreen === index ? "bg-townly-orange" : "bg-gray-300"
                    )}></div>
                    <span>{screen.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;
