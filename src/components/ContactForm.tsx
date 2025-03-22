
import { Phone, Mail, MapPin } from 'lucide-react';
import BlurContainer from './ui/BlurContainer';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const TeamMember = ({ name, role, imgSrc, initials }: { name: string; role: string; imgSrc?: string; initials: string }) => (
  <div className="flex flex-col items-center text-center">
    <Avatar className="h-24 w-24 mb-4">
      {imgSrc ? (
        <AvatarImage src={imgSrc} alt={name} />
      ) : null}
      <AvatarFallback className="bg-townly-orange/10 text-townly-orange text-xl font-semibold">
        {initials}
      </AvatarFallback>
    </Avatar>
    <h4 className="text-lg font-semibold">{name}</h4>
    <p className="text-gray-600">{role}</p>
  </div>
);

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-townly-orange opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-townly-orangeLight opacity-5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 gap-20">
          {/* Contact Information */}
          <div className="text-center max-w-3xl mx-auto reveal-on-scroll">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-townly-orange/10 text-townly-orange rounded-full">
              Contattaci
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Inizia il tuo percorso con Townly</h2>
            <p className="text-lg text-gray-600 mb-12">
              Siamo qui per aiutarti a trasformare il welfare aziendale in un'esperienza integrata con il territorio. Contattaci per scoprire come Townly può creare valore per la tua azienda.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BlurContainer className="p-8 hover-lift">
                <Mail className="h-10 w-10 text-townly-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:info@townly.it" className="text-townly-orange hover:underline">info@townly.it</a>
              </BlurContainer>
              
              <BlurContainer className="p-8 hover-lift">
                <Phone className="h-10 w-10 text-townly-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Telefono</h3>
                <a href="tel:+390212345678" className="text-townly-orange hover:underline">+39 02 1234567</a>
              </BlurContainer>
              
              <BlurContainer className="p-8 hover-lift">
                <MapPin className="h-10 w-10 text-townly-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sede</h3>
                <p className="text-gray-600">Via del Territorio, 42<br />20123 Milano, Italia</p>
              </BlurContainer>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="reveal-on-scroll">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-townly-orange/10 text-townly-orange rounded-full">
                Il Nostro Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Le persone dietro Townly</h2>
              <p className="text-lg text-gray-600">
                Un team di professionisti appassionati, esperti in welfare aziendale, tecnologia e sviluppo territoriale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              <TeamMember 
                name="Marco Rossi" 
                role="CEO & Founder" 
                imgSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400"
                initials="MR" 
              />
              
              <TeamMember 
                name="Laura Bianchi" 
                role="COO" 
                imgSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400"
                initials="LB" 
              />
              
              <TeamMember 
                name="Andrea Verdi" 
                role="CTO" 
                imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400"
                initials="AV" 
              />
              
              <TeamMember 
                name="Sofia Neri" 
                role="CMO" 
                imgSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400"
                initials="SN" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
