import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <h1>Hi, I&apos;m Denis Lemayian Kirionki</h1>
            <p>Software Engineer &middot; AI Developer &middot; Full-Stack Developer</p>
            <p style={{ fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem' }}>
              I build full-stack applications and AI systems &mdash; from production-grade RAG
              pipelines to enterprise CRM/ERP platforms &mdash; using Python, JavaScript/TypeScript,
              and frameworks like FastAPI, Flask, React, and Next.js.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="mailto:lemayianledavit2018@gmail.com" className="btn btn-secondary">Hire Me</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="section" style={{ backgroundColor: 'var(--card-bg)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--secondary-color)' }}>
              Get In Touch
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-color)' }}>
              Interested in working together? I&apos;m always open to discussing new opportunities and projects.
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <p><strong>Email:</strong> lemayianledavit2018@gmail.com</p>
              <p><strong>Phone:</strong> +254 799 801 096</p>
              <p><strong>Location:</strong> Nairobi, Kenya &mdash; available for remote work worldwide</p>
            </div>
            <a href="mailto:lemayianledavit2018@gmail.com" className="btn btn-primary">
              Send Message
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}