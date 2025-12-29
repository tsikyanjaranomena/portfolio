import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ParallaxBackground from '@/components/ParallaxBackground';
export default function Index() {
  const year = new Date().getFullYear();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-reveal-section]'));
    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <ParallaxBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>

        <footer className="border-t border-gold section-panel py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-slate-300">
              © {year} Tsiky Anjara Nomena. Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
