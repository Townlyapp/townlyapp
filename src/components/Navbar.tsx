
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Vantaggi', href: '#about' },
    { name: 'Soluzioni', href: '#solutions' },
    { name: 'Contattaci', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-30 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Townly"
                className='h-14 w-auto'
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-townly-orange font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
           
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-townly-orange"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-townly-orange"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-townly-orange hover:text-townly-orangeDark"
          >
            Inizia Ora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
