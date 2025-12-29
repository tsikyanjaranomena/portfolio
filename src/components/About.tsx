import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" data-reveal-section className="py-20 snap-section section-panel section-reveal relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 luxe-title">
            À Propos de Moi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <div className="inline-block relative">
              <div className="w-80 h-80 rounded-full accent-ring p-1 gold-glow-strong">
                <img
                  src={`${import.meta.env.BASE_URL}assets/profil.jpeg`}
                  alt="Portrait de Tsiky Anjara Nomena"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 accent-orb rounded-full flex items-center justify-center gold-glow">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Développeur Full-Stack orienté impact
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Spécialisé en Java et Python, je combine un backend solide et des interfaces soignées
                pour livrer des expériences fiables, rapides et faciles à maintenir.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Mon approche : architecture claire, qualité de code, performance mesurée et
                collaboration proactive. J'apprécie les projets où la valeur métier et
                l'expérience utilisateur avancent main dans la main.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="glass-gold text-white">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-gold" size={20} />
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="font-medium">tsikyanjaranomena@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-gold text-white">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-gold" size={20} />
                    <div>
                      <p className="text-slate-400 text-sm">Téléphone</p>
                      <p className="font-medium">+261 34 96 96 790</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-gold text-white">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-gold" size={20} />
                    <div>
                      <p className="text-slate-400 text-sm">Localisation</p>
                      <p className="font-medium">Madagascar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
