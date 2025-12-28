import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      toast.error("Le formulaire n'est pas prêt. Réessayez.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS n'est pas configuré. Vérifiez le fichier .env.");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey
      });
      toast.success('Message envoyé avec succès !');
      setFormData({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-gold" size={24} />,
      title: 'Email',
      value: 'tsikyanjaranomena@gmail.com',
      link: 'mailto:tsikyanjaranomena@gmail.com'
    },
    {
      icon: <Phone className="text-gold" size={24} />,
      title: 'Téléphone',
      value: '+261 34 96 96 790',
      link: 'tel:+261349696790'
    },
    {
      icon: <MapPin className="text-gold" size={24} />,
      title: 'Localisation',
      value: 'Madagascar',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/tsikyanjaranomena',
      color: 'hover:text-gold'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tsiky-anjara-nomena-ramitandrintsoa-02a469293/',
      color: 'hover:text-gold'
    },
    {
      icon: <Mail size={24} />,
      name: 'Email',
      url: 'mailto:tsikyanjaranomena@gmail.com',
      color: 'hover:text-gold'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 luxe-title">
            Contactez-Moi
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ouvert aux collaborations et aux missions ambitieuses. Discutons de votre besoin et de la meilleure solution.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Coordonnées
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glass-gold text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        {info.icon}
                        <div>
                          <p className="text-slate-400 text-sm mb-1">{info.title}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="font-medium hover:text-gold transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Réseaux Sociaux
              </h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`text-slate-300 ${social.color} transition-colors p-3 bg-black/60 rounded-full border border-gold/30 hover:border-gold`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <Card className="marble-card text-slate-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 luxe-heading">
                  Disponible pour collaborer ?
                </h3>
                <p className="text-white mb-4">
                  Je suis disponible pour de nouveaux défis et opportunités.
                  Que ce soit pour un projet web, une application ou une consultation technique,
                  parlons-en.
                </p>
                <Button
                  className="bg-[#d4af37] hover:bg-[#e8c45a] text-black"
                  onClick={() => window.location.href = 'mailto:tsikyanjaranomena@gmail.com'}
                >
                  <Mail className="mr-2" size={16} />
                  Envoyer un Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="marble-card text-slate-900">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2 luxe-heading">
                  <Send className="text-[#d4af37]" size={24} />
                  Parlons de votre projet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="title" value={formData.subject} />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Nom *
                      </label>
                      <Input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-slate-200 text-black focus:border-[#d4af37]"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-slate-200 text-black focus:border-[#d4af37]"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Sujet *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white border-slate-200 text-black focus:border-[#d4af37]"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-white border-slate-200 text-black focus:border-[#d4af37] resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#d4af37] hover:bg-[#e8c45a] text-black py-3"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2" size={16} />
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
