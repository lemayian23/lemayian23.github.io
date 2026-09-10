import Link from 'next/link';

const stats = [
  { value: '4+', label: 'Years building software' },
  { value: '14+', label: 'Public repositories' },
  { value: '450', label: 'Files rewritten in one system migration' },
  { value: '1', label: 'Production RAG assistant shipped' },
];

const values = [
  {
    title: 'Ship, then refine',
    body: 'I get something working end-to-end first, then iterate — a working v1 beats a perfect plan.',
  },
  {
    title: 'Own the whole stack',
    body: 'From FAISS vector search to a Bootstrap form, I\u2019m comfortable moving up and down the stack to get a feature done.',
  },
  {
    title: 'Write it down',
    body: 'Documentation, commit messages, and clear architecture diagrams aren\u2019t an afterthought \u2014 they\u2019re how a project survives past me.',
  },
];

const timeline = [
  { year: '2026', text: 'ICT Attachment at NACADA \u2014 IT support and ERP systems review.' },
  { year: '2026', text: 'Rewrote a 450-file legacy PHP CRM/ERP into Python Flask at Aquashine Limited.' },
  { year: '2025\u201326', text: 'Built TUK-ConvoSearch, a production RAG assistant, as my final-year project at TUK.' },
  { year: '2024\u201325', text: 'Developer Advocate Intern at Prisma Data Services \u2014 docs, examples, community.' },
  { year: '2023\u201324', text: 'Microsoft Learn Student Ambassador \u2014 led a technical writing team, ran hackathons.' },
];

const skillGroups = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'PHP', 'Go'] },
  { category: 'AI / ML', items: ['RAG', 'LangChain', 'FAISS', 'Ollama', 'Sentence Transformers'] },
  { category: 'Web', items: ['React', 'Next.js', 'FastAPI', 'Flask', 'Node.js'] },
  { category: 'Data & Infra', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Docker', 'Git'] },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <p className="eyebrow">About me</p>
          <h1 className="gradient-text">
            I build software that turns messy problems into working systems.
          </h1>
          <p className="about-hero-sub">
            Software Engineer &amp; AI Developer based in Nairobi, Kenya &mdash; final-year
            BTech IT student at the Technical University of Kenya, currently shipping
            full-stack apps and retrieval-augmented AI systems.
          </p>
          <div className="about-hero-actions">
            <a href="mailto:lemayianledavit2018@gmail.com" className="btn btn-primary">Say hello</a>
            <Link href="/#projects" className="btn btn-secondary">See my work</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container narrow">
          <h2>My story</h2>
          <p>
            I started out curious about how software actually works underneath the apps I used
            every day, and that curiosity turned into a habit of building things end-to-end
            rather than just following tutorials. That habit is what led to
            <strong> TUK-ConvoSearch</strong> &mdash; a retrieval-augmented AI assistant I built
            as my final-year project, running entirely on open-source models with no cloud
            dependency, returning cited answers grounded in real institutional documents.
          </p>
          <p>
            Professionally, that same instinct to understand a system before rebuilding it
            showed up at <strong>Aquashine Limited</strong>, where I led the rewrite of a
            450-file legacy PHP CRM/ERP into a modern Python Flask application &mdash; cutting
            complexity by 90% while adding role-based access, audit logging, and real-time
            reporting the old system never had.
          </p>
          <p>
            I care about code that&apos;s still understandable six months later, systems that
            degrade gracefully instead of falling over, and shipping something real instead of
            polishing something theoretical. Outside of client and academic work, I&apos;m usually
            reading up on new developments in AI/ML or contributing to open-source projects.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>How I work</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container narrow">
          <h2 style={{ marginBottom: '2rem' }}>A quick timeline</h2>
          <div className="mini-timeline">
            {timeline.map((t, i) => (
              <div key={i} className="mini-timeline-item">
                <span className="mini-timeline-year">{t.year}</span>
                <span className="mini-timeline-text">{t.text}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/#experience" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>
              See the full experience section &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>What I work with</h2>
          <div className="skill-groups">
            {skillGroups.map((g) => (
              <div key={g.category} className="skill-group-card">
                <h3>{g.category}</h3>
                <div className="chip-row">
                  {g.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Want to work together?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-color)' }}>
            I&apos;m open to new opportunities and interesting projects.
          </p>
          <a href="mailto:lemayianledavit2018@gmail.com" className="btn btn-primary">
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
