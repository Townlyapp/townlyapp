import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BlurContainer from "./ui/BlurContainer";
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
  const screens = [{
    title: "Home e Notifiche",
    description: "Accedi a tutte le funzionalità principali e rimani aggiornato sugli eventi locali.",
    image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600&h=1200"
  }, {
    title: "Eventi e Attività",
    description: "Scopri le iniziative sul territorio legate al programma di welfare aziendale.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600&h=1200"
  }, {
    title: "Profilo e Preferenze",
    description: "Personalizza la tua esperienza in base ai tuoi interessi e alla tua posizione.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600&h=1200"
  }, {
    title: "Analisi e Report",
    description: "Monitora l'impatto delle iniziative con dashboard e metriche dettagliate.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600&h=1200"
  }];
  return <section id="app-demo" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-white opacity-50"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-townly-orange/10 text-townly-orange rounded-full">
            Demo dell&apos;App
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Esplora Townly</h2>
          <p className="text-lg text-gray-600">
            Scopri le principali funzionalità della nostra app di welfare territoriale
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 items-center reveal-on-scroll">
          {/* Mobile App Preview */}
          <div className="order-2 lg:order-1 animate-fade-in-left delay-200">
            <Carousel opts={{
            loop: true
          }} onSelect={api => {
            if (api) {
              setActiveScreen(api.selectedScrollSnap());
            }
          }} className="w-full max-w-[320px] mx-auto">
              <CarouselContent>
                {screens.map((screen, index) => <CarouselItem key={index}>
                    <div className="p-1">
                      <BlurContainer className="p-2 overflow-hidden rounded-3xl">
                        <div className="bg-townly-navy/5 rounded-3xl overflow-hidden p-2">
                          {/* Phone frame */}
                          <div className="relative mx-auto rounded-[32px] overflow-hidden border-8 border-townly-navy/20 aspect-[9/19] bg-black">
                            {/* Status bar */}
                            <div className="absolute top-0 inset-x-0 h-6 bg-black z-10 flex items-center justify-between px-5">
                              <div className="text-white text-xs">9:41</div>
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
                                <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
                                <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
                              </div>
                            </div>
                            
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
                            
                            {/* Screen Content */}
                            <img src={screen.image} alt={screen.title} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </BlurContainer>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <div className="flex items-center justify-center mt-4 gap-2">
                <button className="p-2 text-townly-orange hover:bg-townly-orange/10 rounded-full transition" onClick={() => {
                document.querySelector('#app-demo [data-carousel-prev]')?.dispatchEvent(new MouseEvent('click', {
                  bubbles: true
                }));
              }}>
                  <ChevronLeft size={24} />
                </button>
                <button className="p-2 text-townly-orange hover:bg-townly-orange/10 rounded-full transition" onClick={() => {
                document.querySelector('#app-demo [data-carousel-next]')?.dispatchEvent(new MouseEvent('click', {
                  bubbles: true
                }));
              }}>
                  <ChevronRight size={24} />
                </button>
              </div>
              <CarouselPrevious className="hidden" data-carousel-prev />
              <CarouselNext className="hidden" data-carousel-next />
            </Carousel>
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
                {screens.map((screen, index) => <div key={index} className={cn("p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center", activeScreen === index ? "bg-townly-orange/10 border border-townly-orange/20" : "hover:bg-gray-100")} onClick={() => {
                const carousel = document.querySelector('#app-demo [data-carousel-next]');
                const diff = index - activeScreen;
                if (diff > 0) {
                  // Click next diff times
                  for (let i = 0; i < diff; i++) {
                    setTimeout(() => {
                      carousel?.dispatchEvent(new MouseEvent('click', {
                        bubbles: true
                      }));
                    }, i * 100);
                  }
                } else if (diff < 0) {
                  // Click prev |diff| times
                  const prev = document.querySelector('#app-demo [data-carousel-prev]');
                  for (let i = 0; i < Math.abs(diff); i++) {
                    setTimeout(() => {
                      prev?.dispatchEvent(new MouseEvent('click', {
                        bubbles: true
                      }));
                    }, i * 100);
                  }
                }
              }}>
                    <div className={cn("w-3 h-3 rounded-full mr-3", activeScreen === index ? "bg-townly-orange" : "bg-gray-300")}></div>
                    <span>{screen.title}</span>
                  </div>)}
              </div>
              
              <a href="#contact" className="inline-flex items-center text-townly-orange font-medium hover:underline mt-4">
                Richiedi una demo completa
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AppDemo;