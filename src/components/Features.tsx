
import { Check, Building, Users, Store, Heart, Calendar, LineChart, BookOpen, MessageCircle } from 'lucide-react';
import BlurContainer from './ui/BlurContainer';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      title: 'Integrazione Locale',
      description: 'Accelera l\'adattamento dei dipendenti nel territorio, riducendo il turnover e aumentando la produttività con iniziative locali mirate.',
      icon: Building,
      color: 'text-townly-orange bg-townly-orange/10',
      delay: 100
    },
    {
      title: 'Networking Strategico',
      description: 'Trasforma le relazioni in valore aziendale: eventi esclusivi e connessioni qualificate che potenziano il brand e creano opportunità di business.',
      icon: Users,
      color: 'text-blue-500 bg-blue-500/10',
      delay: 200
    },
    {
      title: 'Formazione a Costi Ridotti',
      description: 'Abbatti i costi di formazione del 30% con corsi mirati online e offline che ottimizzano il budget mantenendo alta la qualità dell\'apprendimento.',
      icon: BookOpen,
      color: 'text-green-500 bg-green-500/10',
      delay: 300
    },
    {
      title: 'Obiettivi ESG Misurabili',
      description: "Raggiungi target ESG concreti attraverso iniziative di welfare che migliorano benessere, inclusione e impatto sociale con KPI facilmente rendicontabili.",
      icon: Heart,
      color: 'text-pink-500 bg-pink-500/10',
      delay: 400
    },
    {
      title: 'Retention dei Talenti',
      description: 'Fidelizza i migliori talenti offrendo un\'esperienza lavorativa completa che va oltre lo stipendio, con eventi personalizzati e opportunità esclusive.',
      icon: Calendar,
      color: 'text-purple-500 bg-purple-500/10',
      delay: 500
    },
    {
      title: 'Community Aziendale',
      description: 'Costruisci una cultura aziendale solida con una piattaforma di comunicazione dedicata che riduce il siloing e potenzia la collaborazione.',
      icon: MessageCircle,
      color: 'text-cyan-500 bg-cyan-500/10',
      delay: 600
    }
  ];

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-townly-orange/10 text-townly-orange rounded-full">
            Vantaggi Aziendali
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trasforma il welfare in vantaggio competitivo</h2>
          <p className="text-lg text-gray-600">
            Townly ottimizza l'investimento in persone, combinando welfare, formazione e networking in un'unica soluzione che migliora KPI aziendali e obiettivi ESG.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <BlurContainer 
              key={index} 
              className={cn(
                "p-8 hover-lift reveal-on-scroll", 
                "transform translate-y-10"
              )}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className={cn("w-12 h-12 flex items-center justify-center rounded-lg mb-6", feature.color)}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </BlurContainer>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center reveal-on-scroll" style={{ transitionDelay: '700ms' }}>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">ROI misurabile del welfare aziendale</h3>
            <p className="text-gray-600 text-lg">
              Townly non è solo un programma di welfare, ma un investimento strategico con ritorni tangibili su costi, reputazione e competitività.
            </p>
            <ul className="space-y-4">
              {[
                'Riduzione fino al 25% dei costi di onboarding',
                'Diminuzione del 20% del turnover annuale',
                'Risparmio del 30% sui budget di formazione tradizionale',
                'Accelerazione della rendicontazione ESG con dati automatizzati',
                'Aumento del 40% nell\'engagement dei dipendenti',
                'Miglioramento dell\'employer branding e talent attraction'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-townly-orange rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <BlurContainer className="p-0 overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-townly-orange/10 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1024" 
                alt="Team meeting" 
                className="object-cover w-full h-full rounded-2xl"
              />
            </BlurContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
