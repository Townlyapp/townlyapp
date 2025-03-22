
import { ArrowRight } from 'lucide-react';
import BlurContainer from './ui/BlurContainer';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-white opacity-70"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-townly-orange opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-townly-orangeLight opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-townly-orange/10 text-townly-orange rounded-full">
                Welfare Aziendale Territoriale
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                Connetti aziende, dipendenti e <span className="text-townly-orange">territorio</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700 md:text-xl max-w-xl">
                La piattaforma che trasforma il welfare aziendale in un'esperienza integrata con il territorio, creando valore condiviso e benessere diffuso.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-townly-orange text-white font-medium rounded-lg hover:bg-townly-orangeDark transition duration-300 ease-in-out hover-glow"
              >
                Scopri di più
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#benefits" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-townly-orange font-medium rounded-lg border border-townly-orange/30 hover:bg-townly-orange/5 transition duration-300 ease-in-out"
              >
                Vantaggi
              </a>
            </div>
          </div>
          
          <div className="relative h-full flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '300ms' }}>
            <BlurContainer className="relative w-full max-w-md mx-auto">
              <div className="aspect-square relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-townly-orange/20 to-transparent rounded-xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-townly-orange/10 rounded-full blur-2xl"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-townly-orange/20 animate-pulse"></div>
                    <div className="absolute inset-2 rounded-full bg-townly-orange/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 md:w-20 md:h-20 text-townly-orange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L14.0357 8.16153H19.8749L15.1925 11.6768L17.2282 16.8383L12 13.3231L6.77178 16.8383L8.80752 11.6768L4.12512 8.16153H9.9643L12 3Z" fill="currentColor"/>
                        <path d="M12 20V22M8 18L6 20M16 18L18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-center">Il Faro del Territorio</h3>
                  <p className="text-sm md:text-base text-gray-600 text-center mt-2">
                    Orientiamo le aziende e i dipendenti verso il valore del territorio
                  </p>
                </div>
              </div>
            </BlurContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
