import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Société BICI Madagascar',
      position: 'Développeur Full-Stack',
      period: "Décembre 2022 - aujourd'hui",
      location: 'Madagascar',
      type: 'CDI',
      projects: [
        {
          name: 'Projet FR (Fond Routier Madagascar)',
          description: 'Migration des systèmes de gestion de la paie vers une architecture centralisée basée sur Java Spring Boot.',
          achievements: [
            "Conception et développement d'APIs REST avec Java (Spring Boot) pour interconnecter les différents services internes",
            'Implémentation de tableaux de bord analytiques avec Java (Spring Boot), Thymeleaf et Chart.js pour le suivi RH',
            "Optimisation et refonte de l'expérience utilisateur à l'aide de frameworks Java modernes tels que Vaadin et React.js"
          ],
          technologies: ['Java (Spring Boot)', 'PostgreSQL', 'Vaadin', 'React.js', 'Chart.js', 'GitLab']
        }
      ]
    },
    {
      company: 'Projet ADER',
      position: 'Développeur Back-End',
      period: '2023',
      location: 'Madagascar',
      type: 'Projet',
      projects: [
        {
          name: "Agence d'électrification rurale",
          description: "Développement d'outils de gestion pour le suivi des infrastructures électriques avec Python Django.",
          achievements: [
            "Création d'un système de monitoring en temps réel utilisant Django et un front-end React.js",
            "Automatisation des workflows grâce à Django, Celery pour les traitements asynchrones, et l'ORM natif de Django"
          ],
          technologies: ['Python (Django, Django REST Framework)', 'PostgreSQL', 'React.js', 'Celery', 'GitLab']
        }
      ]
    },
    {
      company: 'Projet Gallois Graphites',
      position: 'Développeur Back-End',
      period: '2022-2023',
      location: 'Madagascar',
      type: 'Projet',
      projects: [
        {
          name: 'Industrie de minage',
          description: 'Migration des calculs de salaires vers une base de données centralisée Oracle via JDBC.',
          achievements: [
            'Développement du module de gestion des congés en utilisant Java Servlets et JSP (architecture MVC)',
            "Mise en place d'APIs REST sécurisées pour la gestion du personnel grâce à des Servlets, des filtres de sécurité et des tokens JWT",
            'Rédaction et exécution de tests unitaires et fonctionnels avec JUnit et Mockito'
          ],
          technologies: ['Java (Servlets/JSP)', 'Oracle Database (JDBC)', 'GitLab', 'Docker']
        }
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-black relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 luxe-title">
            Expérience Professionnelle
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Un parcours riche en projets variés et en défis techniques stimulants
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="luxe-card text-white"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-white mb-2 flex items-center gap-2">
                      <Briefcase className="text-gold" size={24} />
                      {exp.position}
                    </CardTitle>
                    <h3 className="text-xl text-gold font-semibold mb-2">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="border-gold text-gold w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="border-l-4 border-[#d4af37] pl-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {project.name}
                    </h4>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-black/50 text-slate-200 border border-gold/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
