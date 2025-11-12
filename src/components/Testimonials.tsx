import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';

const testimonials = [
  {
    name: "Marco R.",
    location: "Bologna",
    rating: 5,
    text: "Raga, esperienza TOP. Ho scoperto posti che manco sapevo esistessero qui vicino. Guida super preparata e anche simpatica. 10/10",
    image: "/cristian.jpeg"
  },
  {
    name: "Laura S.",
    location: "Modena",
    rating: 5,
    text: "Regalo perfetto per il mio ragazzo. Ci siamo divertiti un sacco e speso il giusto. Già prenotato la prossima!",
    image: "/iuliana.jpeg"
  },
  {
    name: "Alessandro T.",
    location: "Rimini",
    rating: 5,
    text: "Zero sbattimenti, tutto organizzato alla perfezione. Vai tranquillo che funziona tutto. Consigliatissimo!",
    image: "/cristian.jpeg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            La gente è contenta
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chi ha provato le nostre esperienze non vede l'ora di tornare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
            >
              <div className="space-y-4">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary opacity-50" />
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
