import { Search, Calendar, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Scegli',
      description: 'Esplora centinaia di esperienze uniche selezionate per te',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Prenota',
      description: 'Seleziona data e orario in pochi click, tutto online',
      color: 'from-townly-orange to-amber-500'
    },
    {
      icon: Heart,
      title: 'Vivi',
      description: 'Immergiti in un\'avventura autentica e indimenticabile',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="come-funziona" className="py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Semplice come deve essere
          </h2>
          <p className="text-lg text-gray-600">
            Tre passi per trasformare un giorno qualunque in un ricordo speciale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connector line - hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
              )}
              
              <div className="text-center space-y-4 relative z-10">
                {/* Icon circle */}
                <div className="relative inline-flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-gray-700" />
                    </div>
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-townly-orange text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
