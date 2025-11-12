import { Phone, Mail, MapPin } from 'lucide-react';
import { Card } from './ui/card';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Hai dubbi? Parliamone
          </h2>
          <p className="text-xl text-muted-foreground">
            Scrivici pure, rispondiamo sempre (e velocemente)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
            <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:info@townlyapp.com" className="text-primary hover:underline">
              info@townlyapp.com
            </a>
          </Card>
          
          <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
            <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefono</h3>
            <a href="tel:+393514567890" className="text-primary hover:underline">
              +39 351 4567890
            </a>
          </Card>
          
          <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sede</h3>
            <p className="text-muted-foreground">
              Via Ruffini, 94<br />
              41124 Modena (MO)
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
