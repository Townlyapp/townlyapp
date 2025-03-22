
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-5">
            <span className="text-townly-orange text-2xl font-bold">Townly</span>
          </div>
          <p className="text-gray-600 mb-6 max-w-md text-center">
            Trasformiamo il welfare aziendale in un'esperienza integrata con il territorio, ottimizzando costi e migliorando KPI aziendali.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Townly. P.IVA 04133580367. Tutti i diritti riservati.
          </p>
          <div className="mt-4 md:mt-0 md:ml-6">
            <a href="#" className="text-gray-500 hover:text-townly-orange transition-colors duration-200 text-sm">
              Made with <span className="text-townly-orange">♥</span> in Italy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
