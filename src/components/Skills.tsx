import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Server, GitBranch, TestTube, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-gold" size={24} />,
      title: 'Langages de Programmation',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
      image: '/assets/java-spring-illustration.jpg'
    },
    {
      icon: <Server className="text-gold" size={24} />,
      title: 'Frameworks & Technologies',
      skills: ['Spring Boot', 'Django', 'React.js', 'Vaadin', 'Thymeleaf', 'Chart.js'],
      image: '/assets/python-django-illustration.jpg'
    },
    {
      icon: <Database className="text-gold" size={24} />,
      title: 'Bases de Données',
      skills: ['Oracle', 'PostgreSQL', 'MySQL', 'JDBC', 'ORM Django'],
      image: '/assets/database-systems-illustration.jpg'
    },
    {
      icon: <GitBranch className="text-gold" size={24} />,
      title: 'Versioning & CI/CD',
      skills: ['GitLab', 'GitHub', 'Docker', 'Git'],
      image: null
    },
    {
      icon: <TestTube className="text-gold" size={24} />,
      title: 'Tests & Qualité',
      skills: ['JUnit', 'PyTest', 'Mockito', 'Tests Unitaires', 'Tests Fonctionnels'],
      image: null
    },
    {
      icon: <Layers className="text-gold" size={24} />,
      title: 'Architecture & Patterns',
      skills: ['APIs REST', 'Microservices', 'MVC', 'JWT', 'Celery', 'Architecture Centralisée'],
      image: null
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 luxe-title">
            Compétences Techniques
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Une expertise technique diversifiée pour concevoir des solutions complètes et performantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="luxe-card text-white"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <CardTitle className="text-white text-lg">
                    {category.title}
                  </CardTitle>
                </div>
                {category.image && (
                  <div
                    className="h-32 bg-cover bg-center rounded-lg opacity-80"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                )}
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-black/50 text-slate-200 border border-gold/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="luxe-card text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Langues & Communication
              </h3>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <Badge className="bg-[#d4af37] text-black mb-2">
                    Français
                  </Badge>
                  <p className="text-slate-300 text-sm">Courant</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-[#d4af37] text-black mb-2">
                    Anglais
                  </Badge>
                  <p className="text-slate-300 text-sm">Intermédiaire</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
