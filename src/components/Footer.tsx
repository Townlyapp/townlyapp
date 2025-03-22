
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Azienda',
      links: [
        { label: 'Chi Siamo', href: '#about' },
        { label: 'Missione', href: '#' },
        { label: 'Carriere', href: '#' },
        { label: 'Contatti', href: '#contact' },
      ],
    },
    {
      title: 'Prodotto',
      links: [
        { label: 'Funzionalità', href: '#benefits' },
        { label: 'Soluzioni', href: '#solutions' },
        { label: 'Testimonianze', href: '#' },
        { label: 'Casi di studio', href: '#' },
      ],
    },
    {
      title: 'Risorse',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Guide', href: '#' },
        { label: 'Eventi', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Legali',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Termini di Servizio', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-townly-orange text-2xl font-bold">Townly</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-xs">
              La piattaforma che trasforma il welfare aziendale in un'esperienza integrata con il territorio.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-townly-orange hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-base text-gray-600 hover:text-townly-orange transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Townly. Tutti i diritti riservati.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-townly-orange transition-colors duration-200 text-sm">
              Made with <span className="text-townly-orange">♥</span> by Webion
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
