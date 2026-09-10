import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import HeroCarousel from '@/components/HeroCarousel';
import ScrollReveal from '@/components/ScrollReveal';

const techStack = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'PHP', 'Go'] },
  { category: 'AI / ML', items: ['RAG', 'LangChain', 'LlamaIndex', 'FAISS', 'Sentence Transformers', 'Ollama', 'NLP'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Tailwind', 'Material UI', 'Bootstrap', 'Chakra UI'] },
  { category: 'Backend', items: ['FastAPI', 'Flask', 'Node.js', 'Express', 'GraphQL', 'REST APIs', 'WebSockets'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite', 'TiDB Cloud', 'Firebase', 'MongoDB'] },
  { category: 'Cloud / DevOps', items: ['Docker', 'Git', 'CI/CD', 'Render', 'Linux'] },
];

export default function Home() {
  return (
    <>
      {/* Hero — full-bleed background carousel */}
      <section id="home" className="hero">
        <HeroCarousel />
        <div className="container">
          <span className="hero-eyebrow">Available for work</span>
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

      {/* Tech Stack */}
      <ScrollReveal delay={60}>
        <section id="stack" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
          <div className="container">
            <h2 className="section-title">Tech Stack</h2>
            <div className="stack-grid">
              {techStack.map((group) => (
                <div key={group.category} className="stack-card">
                  <h3>{group.category}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <Experience />
      </ScrollReveal>

      {/* TUK-ConvoSearch Case Study */}
      <ScrollReveal delay={60}>
        <section id="case-study" className="section">
          <div className="container">
            <h2 className="section-title">Featured Case Study</h2>
            <div className="case-study">
              <span className="case-study-badge">⭐ Final Year Project</span>
              <h3>TUK-ConvoSearch</h3>
              <p className="case-study-sub">
                AI-Powered RAG Student Support Assistant &middot; Technical University of Kenya &middot; Nov 2025 – Jun 2026
              </p>
              <p>
                Architected and shipped a full RAG pipeline: document ingestion
                (PDF/DOCX/TXT) → chunking (500-char, 100-char overlap) → 384-dim vector
                embeddings (Sentence Transformers) → FAISS semantic search → llama3.2:1b
                response generation via Ollama — running entirely on CPU with no cloud
                dependency.
              </p>
              <p>
                Solved a critical asyncio event-loop blocking bug by running the synchronous
                Ollama stream generator in a background thread, bridging to the async SSE
                endpoint via <code>queue.Queue</code> and <code>run_in_executor</code>.
                Built a React admin panel (JWT auth, document upload/delete with auto-reindex,
                query logs) and a vanilla JS streaming chat interface. Added SQLite persistence
                with WAL mode for concurrent-safe access alongside the FastAPI server.
              </p>

              <div className="case-metrics">
                <div className="metric">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Source Citation</span>
                </div>
                <div className="metric">
                  <span className="metric-value">18.65s</span>
                  <span className="metric-label">Avg Response (CPU)</span>
                </div>
                <div className="metric">
                  <span className="metric-value">66</span>
                  <span className="metric-label">FAISS Chunks</span>
                </div>
                <div className="metric">
                  <span className="metric-value">120+</span>
                  <span className="metric-label">Pages of Docs</span>
                </div>
              </div>

              <div className="tech-tags">
                {['Python', 'FastAPI', 'LangChain', 'FAISS', 'Sentence Transformers', 'Ollama', 'SQLite', 'React', 'Vite', 'JWT'].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="https://github.com/lemayian23/tuk-convosearch"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <Projects />
      </ScrollReveal>

      {/* Education */}
      <ScrollReveal delay={60}>
        <section id="education" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="edu-card">
              <h3>Bachelor of Technology in Information Technology</h3>
              <p className="edu-sub">
                Technical University of Kenya &middot; Nairobi, Kenya &middot; Expected Graduation 2026
              </p>
              <p style={{ color: 'var(--text-color)', fontSize: '0.95rem' }}>
                <strong>Final Year Project:</strong> TUK-ConvoSearch — RAG-based AI Student
                Support Assistant (defended before a panel of academic lecturers).
              </p>
              <ul>
                <li><strong>Relevant coursework:</strong> Artificial Intelligence, Data Structures &amp; Algorithms, Machine Learning, NLP, Database Systems, Software Engineering</li>
                <li><strong>Python Programming Certificate</strong> — Institute of Advanced Technology, Nairobi</li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal delay={60}>
        <section id="contact" className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Get In Touch</h2>
            <p
              style={{
                fontSize: '1.05rem',
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