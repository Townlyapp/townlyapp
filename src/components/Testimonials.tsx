import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marco R.',
      experience: 'Giro in bicicletta',
      rating: 5,
      text: "Non immaginavo che la mia città nascondesse angoli così magici. La guida locale ci ha portato in posti che non avrei mai scoperto da solo. Un'esperienza che consiglio a tutti!",
      avatar: '👨‍💼'
    },
    {
      name: 'Elena S.',
      experience: 'Corso di cucina tipica',
      rating: 5,
      text: "Ho imparato a cucinare piatti che mangiavo da bambina. L'atmosfera familiare e l'autenticità dell'esperienza mi hanno emozionato. Tornerò sicuramente!",
      avatar: '👩‍🍳'
    },
    {
      name: 'Luca M.',
      experience: 'Tour fotografico urbano',
      rating: 5,
      text: 'Come fotografo amatoriale cercavo qualcosa di diverso. Questo tour mi ha aperto gli occhi su prospettive completamente nuove della città. Assolutamente da fare!',
      avatar: '📸'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-4">
            <Star className="w-4 h-4 text-townly-orange fill-townly-orange" />
            <span className="text-sm font-medium text-townly-orange">Storie vere</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Chi ha vissuto l'esperienza
          </h2>
          <p className="text-lg text-gray-600">
            Ogni recensione è una storia, ogni storia è un'emozione condivisa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-white to-orange-50/30"
            >
              <div className="space-y-4">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-townly-orange opacity-50" />
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-townly-orange fill-townly-orange" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.experience}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
