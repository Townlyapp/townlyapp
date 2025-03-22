
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return <section id="home" className="relative pt-20 pb-16 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./bg.png" 
          alt="Business team" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-townly-orange opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-townly-orangeLight opacity-5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                Diamo valore al <span className="text-townly-orange">tempo</span> fuori dall'ufficio
              </h1>
              <p className="mt-6 text-lg text-gray-700 md:text-xl max-w-xl">
                Con Townly, ogni dipendente si integra facilmente nella città grazie a formazione, eventi culturali e networking. L’azienda migliora il work-life balance, rafforza la cultura aziendale e supporta la reportistica ESG.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about" className="inline-flex items-center justify-center px-6 py-3 bg-townly-orange text-white font-medium rounded-lg hover:bg-townly-orangeDark transition duration-300 ease-in-out hover-glow">
                Scopri di più
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default Hero;
