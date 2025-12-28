import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 luxe-title">
            À Propos de Moi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <div className="inline-block relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#d4af37] via-[#f6e7b2] to-[#9f7d1b] p-1 gold-glow-strong">
                <img
                  src="/assets/profil.jpeg"
                  alt="Portrait de Tsiky Anjara Nomena"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center gold-glow">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Développeur Full-Stack Passionné
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Développeur Java passionné, j'excelle aussi bien côté client que serveur pour
                concevoir des solutions web et applicatives performantes. Curieux et motivé,
                j'aime relever des défis et donner vie à des projets ambitieux.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Ensemble, bâtissons des expériences innovantes ! Mon expertise s'étend des
                architectures microservices aux interfaces utilisateur modernes, en passant
                par l'optimisation des bases de données et l'intégration continue.
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
