import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Sparkles } from 'lucide-react';

const Projects = () => {
  const highlights = [
    {
      title: 'FR Madagascar — Plateforme RH',
      description:
        "Refonte complète du système de paie vers une architecture microservices Java Spring Boot.",
      impact: 'Automatisation des reportings RH +70% plus rapides.',
      stack: ['Spring Boot', 'PostgreSQL', 'Vaadin', 'React', 'Chart.js'],
      image: `${import.meta.env.BASE_URL}assets/java-spring-illustration.jpg`,
    },
    {
      title: 'ADER — Monitoring réseau',
      description:
        "Suivi temps réel des infrastructures électriques avec Django + dashboards React.",
      impact: 'Alertes critiques traitées en moins de 5 minutes.',
      stack: ['Django', 'Celery', 'React', 'PostgreSQL'],
      image: `${import.meta.env.BASE_URL}assets/python-django-illustration.jpg`,
    },
    {
      title: 'Gallois Graphites — Core Salarial',
      description:
        "Centralisation des calculs et automatisation des congés sur Oracle JDBC.",
      impact: 'Fiabilité des salaires sécurisée à 99,9%.',
      stack: ['Java Servlets', 'JSP', 'Oracle', 'JWT'],
      image: `${import.meta.env.BASE_URL}assets/database-systems-illustration.jpg`,
    },
    {
      title: 'Ops & CI/CD',
      description:
        "Pipelines GitLab, intégration continue et déploiements Dockerisés.",
      impact: 'Cycles de livraison divisés par 3.',
      stack: ['GitLab', 'Docker', 'Tests', 'Monitoring'],
      image: `${import.meta.env.BASE_URL}assets/hero-developer-workspace.jpg`,
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-sand">
      <div className="absolute inset-0 bg-hero opacity-40"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Highlights</p>
          <h2 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            Projets premium, résultats mesurables.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Des missions stratégiques où chaque détail compte : performance, fiabilité et design.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel opts={{ align: 'start', loop: true }} className="relative">
            <CarouselContent className="-ml-6">
              {highlights.map((project) => (
                <CarouselItem key={project.title} className="pl-6 md:basis-1/2">
                  <Card className="border-black/10 bg-white/90 shadow-paper card-3d overflow-hidden">
                    <div className="relative h-44 w-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                        <Sparkles size={14} className="text-amber-300" />
                        Projet
                      </div>
                    </div>
                    <CardContent className="p-7">
                      <div className="flex items-center justify-between">
                        <Badge className="rounded-full bg-ink text-white">Impact</Badge>
                        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          Remplacer l'image
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-ink card-3d-layer">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 card-3d-layer">
                        {project.description}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-teal card-3d-layer">
                        {project.impact}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-full bg-mist text-slate-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-5 bg-white/90 border-black/10" />
            <CarouselNext className="-right-5 bg-white/90 border-black/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
