import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 bg-black"
    >
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-[#d4af37] via-[#f6e7b2] to-[#9f7d1b] p-1 gold-glow-strong">
            <img
              src={`${import.meta.env.BASE_URL}assets/profil.jpeg`}
              alt="Portrait de Tsiky Anjara Nomena"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight luxe-title">
            RAMITANDRINTSOA
            <br />
            <span className="text-gold">TSIKY ANJARA NOMENA</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 uppercase tracking-[0.3em]">
            Développeur Java / Python
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Développeur Java orienté produit, je conçois des applications web et métiers
            fiables, performantes et faciles à maintenir. Curieux et rigoureux, j'aime
            transformer des besoins complexes en solutions claires et élégantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-[#d4af37] hover:bg-[#e8c45a] text-black px-8 py-3 font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Me Contacter
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-gold text-white px-8 py-3 hover:bg-transparent hover:text-white active:text-white focus:text-white"
              onClick={() => scrollToSection('about')}
            >
              En Savoir Plus
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="mailto:tsikyanjaranomena@gmail.com"
              className="text-slate-400 hover:text-gold transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/tsikyanjaranomena"
              className="text-slate-400 hover:text-gold transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tsiky-anjara-nomena-ramitandrintsoa-02a469293/"
              className="text-slate-400 hover:text-gold transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-500 hover:text-gold transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
