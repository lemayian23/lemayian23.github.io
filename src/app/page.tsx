import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import HeroCarousel from '@/components/HeroCarousel';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <HeroCarousel />
        <div className="container">
          <h1>Hi, I&apos;m Denis Lemayian Kirionki</h1>
          <p>Software Engineer &middot; AI Developer &middot; Full-Stack Developer</p>
          <p style={{ fontSize: '1.05rem', maxWidth: '680px', margin: '1rem auto 0' }}>
            I build full-stack applications and AI systems &mdash; from production-grade RAG
            pipelines to enterprise CRM/ERP platforms &mdash; using Python, JavaScript/TypeScript,
            and frameworks like FastAPI, Flask, React, and Next.js.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="mailto:lemayianledavit2018@gmail.com" className="btn btn-secondary">Hire Me</a>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <Experience />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <Projects />
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal delay={80}>
        <section
          id="contact"
          className="section"
          style={{ backgroundColor: 'var(--card-bg)' }}
        >
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Get In Touch</h2>
            <p
              style={{
                fontSize: '1.05rem',
                marginBottom: '2.5rem',
                color: 'var(--text-muted)',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
              }}
            >
              Interested in working together? I&apos;m always open to discussing new
              opportunities and projects.
            </p>

            <div className="contact-grid">
              <div className="contact-item">
                <strong>Email</strong>
                <span>lemayianledavit2018@gmail.com</span>
              </div>
              <div className="contact-item">
                <strong>Phone</strong>
                <span>+254 799 801 096</span>
              </div>
              <div className="contact-item" style={{ gridColumn: '1 / -1' }}>
                <strong>Location</strong>
                <span>Nairobi, Kenya &mdash; available for remote work worldwide</span>
              </div>
            </div>

            <a href="mailto:lemayianledavit2018@gmail.com" className="btn btn-primary">
              Send Message
            </a>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}