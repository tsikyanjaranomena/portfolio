import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'License',
      field: 'Option Web - Intégration et Web Designer',
      school: 'IT University',
      period: '2022',
      status: 'Diplômée',
      description: "Formation orientée produit et design, axée sur le développement web, l'intégration front-end et l'UX.",
      highlights: [
        'Développement web full-stack',
        "Design d'interfaces utilisateur",
        'Intégration front-end',
        'Responsive design'
      ]
    },
    {
      degree: 'Master I',
      field: 'Informatique',
      school: 'IT University',
      period: '2023-2024',
      status: 'Diplômée',
      description: 'Approfondissement en développement logiciel, architecture des systèmes et gestion de projets informatiques.',
      highlights: [
        'Architecture des systèmes distribués',
        'Gestion de projets agiles',
        'Sécurité informatique',
        'Intelligence artificielle'
      ]
    },
    {
      degree: 'Master II',
      field: 'BIHAR : Big Data & Artificial Intelligence',
      school: 'ESTIA',
      period: '2024-2025',
      status: 'En cours',
      description: "Spécialisation en data engineering, intelligence artificielle et systèmes analytiques à grande échelle.",
      highlights: [
        'Data engineering & pipelines',
        'Machine learning appliqué',
        'Systèmes distribués',
        'Gouvernance des données'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Java Spring Boot Development',
      issuer: 'Formation Continue',
      year: '2023',
      type: 'Certification Technique'
    },
    {
      name: 'Python Django Framework',
      issuer: 'Formation Continue',
      year: '2022',
      type: 'Certification Technique'
    },
    {
      name: 'Database Management & Optimization',
      issuer: 'Formation Continue',
      year: '2022',
      type: 'Certification Technique'
    }
  ];

  return (
    <section id="education" data-reveal-section className="py-20 snap-section section-panel section-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 luxe-title">
            Formation & Éducation
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Un parcours académique structuré, renforcé par une formation continue
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-gold" size={28} />
              Formation Académique
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="luxe-card text-white"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-xl text-white mb-2">
                          {edu.degree}
                        </CardTitle>
                        <h4 className="text-lg text-gold font-semibold">
                          {edu.field}
                        </h4>
                      </div>
                      <Badge
                        variant={edu.status === 'En cours' ? 'default' : 'secondary'}
                        className={edu.status === 'En cours' ? 'badge-accent' : 'badge-outline'}
                      >
                        {edu.status}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} />
                        <span>{edu.school}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="text-white font-semibold mb-2">Compétences acquises :</h5>
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 accent-orb rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-300 text-sm">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Award className="text-gold" size={28} />
              Certifications & Formation Continue
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="luxe-card text-white"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 accent-orb rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-black" size={24} />
                    </div>
                    <h4 className="font-semibold mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-slate-400 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex justify-center gap-2">
                      <Badge variant="outline" className="badge-outline">
                        {cert.year}
                      </Badge>
                      <Badge className="chip-panel text-slate-200">
                        {cert.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Card className="marble-card text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 luxe-heading">
                  Développement Continu des Compétences
                </h3>
                <p className="text-white leading-relaxed max-w-3xl mx-auto">
                  Mon parcours éducatif reflète une progression constante vers l'excellence technique.
                  De la formation académique aux certifications spécialisées, chaque étape a contribué
                  à forger une expertise solide en développement logiciel et une réelle capacité
                  d'adaptation aux technologies émergentes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
