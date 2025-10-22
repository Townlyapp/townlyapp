
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
      title: 'Scopri il Territorio',
      description: 'Ogni città ha i suoi segreti. Guide locali appassionate ti portano dove i turisti non arrivano, nei luoghi autentici che rendono speciale ogni quartiere.',
      icon: Building,
      color: 'text-townly-orange bg-townly-orange/10',
      delay: 100
    },
    {
      title: 'Connessioni Autentiche',
      description: 'Non solo eventi, ma occasioni per incontrare persone che condividono le tue passioni. Crea legami veri con chi vive e ama la tua città.',
      icon: Users,
      color: 'text-blue-500 bg-blue-500/10',
      delay: 200
    },
    {
      title: 'Impara Facendo',
      description: 'Dimentica le lezioni noiose. Qui impari cucinando, creando, esplorando. Ogni esperienza ti lascia non solo ricordi, ma anche nuove competenze.',
      icon: BookOpen,
      color: 'text-green-500 bg-green-500/10',
      delay: 300
    },
    {
      title: 'Benessere Vero',
      description: "Prenditi cura di te attraverso esperienze che nutrono mente e corpo. Dalla natura alla cultura, ogni momento è pensato per il tuo equilibrio.",
      icon: Heart,
      color: 'text-pink-500 bg-pink-500/10',
      delay: 400
    },
    {
      title: 'Momenti da Ricordare',
      description: 'Non giorni qualunque, ma ricordi che rimangono. Ogni esperienza è progettata per regalarti emozioni che porterai con te.',
      icon: Calendar,
      color: 'text-purple-500 bg-purple-500/10',
      delay: 500
    },
    {
      title: 'Community Viva',
      description: 'Entra a far parte di una community di esploratori urbani. Condividi le tue scoperte, trova ispirazione, crea la tua mappa personale della città.',
      icon: MessageCircle,
      color: 'text-cyan-500 bg-cyan-500/10',
      delay: 600
    }
  ];

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-townly-orange/10 text-townly-orange rounded-full">
            Perché Townly
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Più di esperienze, un nuovo modo di vivere la città</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Non vendiamo tour o corsi. Ti offriamo la chiave per scoprire la tua città come non l'hai mai vista, 
            attraverso gli occhi di chi la vive e la ama ogni giorno.
          </p>
        </div>
        
        
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll" style={{ transitionDelay: '700ms' }}>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Cosa rende speciale ogni esperienza</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ogni esperienza su Townly è selezionata con cura per garantirti autenticità, 
              qualità e quel tocco speciale che trasforma un momento in un ricordo.
            </p>
            <ul className="space-y-4">
              {[
                'Guide locali appassionate che conoscono ogni segreto',
                'Piccoli gruppi per un\'esperienza più intima e personale',
                'Luoghi autentici, lontani dalle solite mete turistiche',
                'Flessibilità: prenota quando vuoi, cancella se serve',
                'Sicurezza garantita e assistenza sempre disponibile',
                'Recensioni verificate da chi ha già vissuto l\'esperienza'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-townly-orange to-townly-orangeLight rounded-full flex items-center justify-center mt-1">
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
                src="./networking.jpeg"
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
