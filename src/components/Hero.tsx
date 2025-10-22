import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 opacity-60"></div>
        <img 
          src="./bg.png" 
          alt="Persone che vivono esperienze autentiche" 
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      
      {/* Decorative elements - più vivaci */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-townly-orange to-townly-orangeLight opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-400 to-orange-400 opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge emozionale */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-orange-100">
            <Sparkles className="w-4 h-4 text-townly-orange" />
            <span className="text-sm font-medium text-gray-700">Vivi la tua città come mai prima</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Scopri la tua città attraverso{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-townly-orange to-townly-orangeLight">
              esperienze autentiche
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Non tour guidati, ma avventure da vivere. Non corsi, ma momenti che ricorderai. 
            Ogni esperienza è un viaggio nel cuore della città.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="#esperienze" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-townly-orange to-townly-orangeLight text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Scopri le esperienze
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#come-funziona" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              Come funziona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
