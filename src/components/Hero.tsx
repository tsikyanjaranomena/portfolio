import { Button } from '@/components/ui/button';

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
      className="min-h-screen snap-section flex items-center justify-center relative overflow-hidden pt-28 bg-transparent"
    >
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mx-auto h-28 w-28 rounded-full accent-ring p-1 gold-glow-strong">
            <img
              src={`${import.meta.env.BASE_URL}assets/profil.jpeg`}
              alt="Portrait de Tsiky Anjara Nomena"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight luxe-title">
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
              className="cta-aurora px-8 py-3 font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Me Contacter
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white px-8 py-3 bg-white/5 backdrop-blur hover:bg-white/10 hover:text-white active:text-white focus:text-white"
              onClick={() => scrollToSection('about')}
            >
              En Savoir Plus
            </Button>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
