import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section - UPDATE THIS */}
        <section id="home" className="hero">
          <div className="container">
            <h1>Hi, I'm Lemayian Kirionki Denis</h1>
            <p>Senior Software Engineer & Full-Stack Developer</p>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              I create amazing web and mobile applications using modern technologies like Next.js, 
              React Native, TypeScript, and cloud platforms.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#about" className="btn btn-primary">View My Work</a>
              <a href="mailto:lemayianledavit2018@gmail.com" className="btn btn-secondary">Hire Me</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Projects Section Placeholder */}
        <section id="projects" className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--secondary-color)' }}>
              My Projects
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>
              Projects section coming soon...
            </p>
          </div>
        </section>

       {/* Contact Section */}
<section id="contact" className="section" style={{ backgroundColor: 'var(--card-bg)', textAlign: 'center' }}>
  <div className="container">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--secondary-color)' }}>
      Get In Touch
    </h2>
    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-color)' }}>
      Interested in working together? I'm always open to discussing new opportunities and projects.
    </p>
    <div style={{ marginBottom: '2rem' }}>
      <p><strong>Email:</strong> lemayianledavit2018@gmail.com</p>
      <p><strong>Phone:</strong> +254 799 801 096</p>
      <p><strong>Location:</strong> Available for remote work worldwide</p>
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