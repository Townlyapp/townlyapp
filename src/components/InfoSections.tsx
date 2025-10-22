
import { Home, Users, Smile, LineChart } from 'lucide-react';
import { useEffect } from 'react';
import BlurContainer from './ui/BlurContainer';
import { cn } from '@/lib/utils';

const InfoSections = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const sections = [
    {
      id: 'natura',
      title: 'Avventure nella Natura',
      description: "Respira aria fresca e riconnettiti con la natura a due passi da casa. Escursioni, passeggiate a cavallo, pic-nic panoramici: ogni esperienza è un tuffo nel verde che ti fa dimenticare lo stress della città.",
      icon: Home,
      color: 'text-green-600 bg-green-600/10',
      imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1024',
      direction: 'right',
      animation: 'animate-fade-in-right'
    },
    {
      id: 'cultura',
      title: 'Arte e Cultura Locale',
      description: "Scopri i tesori nascosti della tua città. Musei segreti, atelier d'artista, storie dimenticate: ogni esperienza culturale è un viaggio nel tempo e nella bellezza che ti circonda senza che tu lo sappia.",
      icon: Smile,
      color: 'text-purple-600 bg-purple-600/10',
      imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1024',
      direction: 'left',
      animation: 'animate-fade-in-left'
    },
    {
      id: 'food',
      title: 'Sapori Autentici',
      description: "Assaggia la vera anima della città. Mercati rionali, trattorie familiari, corsi di cucina con nonne doc: ogni boccone racconta una storia, ogni ricetta è un pezzo di tradizione che diventa tuo.",
      icon: Users,
      color: 'text-townly-orange bg-townly-orange/10',
      imageSrc: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1024',
      direction: 'right',
      animation: 'animate-fade-in-right'
    }
  ];

  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-white opacity-30"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-townly-orange/10 text-townly-orange rounded-full">
            Esplora per Tema
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Trova la tua prossima avventura</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Che tu cerchi relax, adrenalina, cultura o convivialità, 
            abbiamo l'esperienza perfetta per te.
          </p>
        </div>
        
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div 
              key={index} 
              id={section.id} 
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll",
                section.direction === 'left' ? 'lg:flex-row-reverse' : ''
              )}
            >
              <div className={cn(
                "order-2 lg:order-1", 
                section.direction === 'left' ? 'lg:order-2' : 'lg:order-1'
              )}>
                <div className={cn("space-y-6", section.animation)}>
                  <div className={cn("w-14 h-14 flex items-center justify-center rounded-2xl", section.color)}>
                    <section.icon size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{section.title}</h3>
                  <p className="text-lg text-gray-600">
                    {section.description}
                  </p>
                </div>
              </div>
              
              <div className={cn(
                "order-1",
                section.direction === 'left' ? 'lg:order-1' : 'lg:order-2'
              )}>
                <BlurContainer className="p-1 overflow-hidden hover-lift">
                  <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-townly-orange/10 via-transparent to-townly-orange/5"></div>
                    <img 
                      src={section.imageSrc}
                      alt={section.title} 
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </BlurContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSections;
