
import { Home, Users, Smile } from 'lucide-react';
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
      id: 'home',
      title: 'Sentirsi a casa',
      description: "Facciamo sentire i tuoi talenti subito a casa, con una piattaforma che li connette alla città, agli eventi locali e alla community aziendale. Un dipendente più coinvolto è un dipendente più produttivo.",
      icon: Home,
      color: 'text-townly-orange bg-townly-orange/10',
      imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1024',
      direction: 'right',
      animation: 'animate-fade-in-right'
    },
    {
      id: 'community',
      title: 'Community locale',
      description: "Misuriamo l'impatto delle iniziative aziendali con dati chiari su partecipazione ed engagement. Offriamo report dettagliati per ottimizzare le strategie di welfare, migliorare la cultura aziendale e semplificare la rendicontazione ESG.",
      icon: Users,
      color: 'text-blue-600 bg-blue-600/10',
      imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1024',
      direction: 'left',
      animation: 'animate-fade-in-left'
    },
    {
      id: 'ambiente',
      title: 'Ambiente positivo',
      description: "Rafforziamo l'attrattività della tua azienda, dimostrando attenzione al benessere e riducendo il turnover. Un ambiente di lavoro positivo è la chiave per trattenere i migliori talenti.",
      icon: Smile,
      color: 'text-green-600 bg-green-600/10',
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
            Le Nostre Soluzioni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trasformiamo il welfare aziendale</h2>
          <p className="text-lg text-gray-600">
            Scopri come Townly può migliorare l{"'"}esperienza dei tuoi dipendenti e creare valore per la tua azienda.
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
