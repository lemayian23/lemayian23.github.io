import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import CaseStudy from '@/components/CaseStudy';
import GitHubActivity from '@/components/GitHubActivity';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <TechStack />
      </ScrollReveal>

      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      <ScrollReveal>
        <CaseStudy />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <GitHubActivity />
      </ScrollReveal>

      <ScrollReveal>
        <Achievements />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <Education />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}
