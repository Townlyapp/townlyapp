
import { useState } from 'react';
import { Send } from 'lucide-react';
import BlurContainer from './ui/BlurContainer';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: '',
    messaggio: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Messaggio inviato!",
      description: "Ti contatteremo presto. Grazie per il tuo interesse.",
    });
    
    setFormData({
      nome: '',
      email: '',
      azienda: '',
      messaggio: '',
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-townly-orange opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-townly-orangeLight opacity-5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 reveal-on-scroll">
            <div>
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-townly-orange/10 text-townly-orange rounded-full">
                Contattaci
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Inizia il tuo percorso con Townly</h2>
              <p className="text-lg text-gray-600">
                Siamo qui per aiutarti a trasformare il welfare aziendale in un'esperienza integrata con il territorio. Contattaci per scoprire come Townly può creare valore per la tua azienda.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BlurContainer className="p-6">
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-townly-orange">info@townly.it</p>
              </BlurContainer>
              
              <BlurContainer className="p-6">
                <h3 className="text-lg font-medium mb-2">Telefono</h3>
                <p className="text-townly-orange">+39 02 1234567</p>
              </BlurContainer>
              
              <BlurContainer className="p-6 md:col-span-2">
                <h3 className="text-lg font-medium mb-2">Sede</h3>
                <p className="text-gray-600">Via del Territorio, 42<br />20123 Milano, Italia</p>
              </BlurContainer>
            </div>
          </div>
          
          <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            <BlurContainer className="p-8">
              <h3 className="text-xl font-semibold mb-6">Inviaci un messaggio</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-townly-orange focus:border-transparent transition-all"
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-townly-orange focus:border-transparent transition-all"
                    placeholder="La tua email"
                  />
                </div>
                
                <div>
                  <label htmlFor="azienda" className="block text-sm font-medium text-gray-700 mb-1">
                    Azienda
                  </label>
                  <input
                    type="text"
                    id="azienda"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-townly-orange focus:border-transparent transition-all"
                    placeholder="Nome dell'azienda"
                  />
                </div>
                
                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={4}
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-townly-orange focus:border-transparent transition-all resize-none"
                    placeholder="Il tuo messaggio"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-townly-orange text-white font-medium rounded-lg hover:bg-townly-orangeDark transition duration-300 ease-in-out disabled:opacity-70 hover-glow"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      Invia messaggio
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </BlurContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
