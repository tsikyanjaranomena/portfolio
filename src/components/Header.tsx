import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'education', label: 'Formation' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center rounded-full glass-gold px-6 py-3 gold-glow">
          <button onClick={() => scrollToSection('hero')} className="text-left">
            <div className="text-lg font-semibold text-white">
              Tsiky Anjara Nomena
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">
              Portfolio
            </div>
          </button>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs uppercase tracking-[0.25em] transition-colors ${
                  activeSection === item.id ? 'text-gold' : 'text-slate-300 hover:text-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 rounded-2xl glass-gold px-6 py-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 text-xs uppercase tracking-[0.25em] transition-colors ${
                  activeSection === item.id ? 'text-gold' : 'text-slate-300 hover:text-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
