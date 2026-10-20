const langColors: Record<string, string> = {
  Python: '#3572a5',
  TypeScript: '#3178c6',
  JavaScript: '#e8d44d',
  Java: '#b07219',
  Kotlin: '#a97bff',
  C: '#9aa5b1',
  Go: '#00add8',
  PHP: '#777bb4',
};

const projects = [
  {
    title: 'TUK-ConvoSearch',
    description:
      'Production-grade RAG student assistant — document ingestion to cited answers, streaming chat UI and React admin panel, running fully on CPU. Final-year project.',
    lang: 'Python',
    stars: 22,
    url: 'https://github.com/lemayian23/tuk-convosearch',
    featured: true,
  },
  {
    title: 'metadata-rag',
    description:
      'Fully local 10-capability RAG platform — hybrid search, knowledge graphs, corrective retrieval and multi-tool agents. Nine ADRs, golden Q/A test suite.',
    lang: 'Python',
    stars: 1,
    url: 'https://github.com/lemayian23/metadata-rag',
    featured: true,
  },
  {
    title: 'lema_wifi',
    description:
      'Self-hosted WiFi billing system — vouchers, payments and hotspot management for small ISPs.',
    lang: 'Python',
    stars: 1,
    url: 'https://github.com/lemayian23/lema_wifi',
  },
  {
    title: 'lema-os',
    description:
      'An x86_64 hobby operating system written from scratch in C — bootloaders, memory management and all.',
    lang: 'C',
    stars: 1,
    url: 'https://github.com/lemayian23/lema-os',
  },
  {
    title: 'markdown-chunker',
    description:
      'Token-aware Markdown chunker built for RAG pipelines — respects structure, not just character counts.',
    lang: 'Python',
    stars: 1,
    url: 'https://github.com/lemayian23/markdown-chunker',
  },
  {
    title: 'help-desk + AI assistant',
    description:
      'Ticketing system with an integrated AI assistant to triage, suggest and resolve support queries.',
    lang: 'Python',
    stars: 0,
    url: 'https://github.com/lemayian23/Help-Desk-Ticketing-System-With-AI-Assistant',
  },
  {
    title: 'mpesa-frontend',
    description:
      'M-Pesa payment frontend — mobile-money checkout flows for the Kenyan market, built end-to-end.',
    lang: 'JavaScript',
    stars: 1,
    url: 'https://github.com/lemayian23/mpesa-frontend',
  },
  {
    title: 'livestock-outbreak-detection',
    description:
      'AI-powered detection and monitoring of disease outbreaks in livestock populations.',
    lang: 'Python',
    stars: 1,
    url: 'https://github.com/lemayian23/livestock_outbreak_detection',
  },
];

const moreBuilds = [
  {
    title: 'Real-Time Personalization Engine',
    description: 'Content recommendation system delivering real-time, user-specific personalization.',
    stack: ['JavaScript'],
  },
  {
    title: 'SchemaGuard',
    description: 'Database schema validation and protection utility.',
    stack: ['Python'],
  },
  {
    title: 'FurniEase',
    description: 'Furniture e-commerce and management platform — the system behind the Funiease automation.',
    stack: ['PHP', 'Blade'],
  },
  {
    title: 'Student Management App',
    description: 'Native Android app for student records, built with Room and modern architecture.',
    stack: ['Kotlin'],
  },
];

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.8L5.8 21l1.6-7L2 9.3l7.1-.7L12 2z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">projects</span>
          <h2 className="section-title">Real repos, real code</h2>
          <p className="section-sub">
            Every card links to a live repository — no vaporware. Stars and language pulled
            straight from GitHub.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <div className="project-top">
                <h3>{p.title}</h3>
                {p.stars > 0 && (
                  <span className="project-stars">
                    <StarIcon /> {p.stars}
                  </span>
                )}
              </div>
              <p>{p.description}</p>
              <div className="project-meta">
                <span className="project-lang">
                  <span
                    className="lang-dot"
                    style={{ background: langColors[p.lang] ?? 'var(--accent)' }}
                  />
                  {p.lang}
                </span>
                <span className="project-link">
                  View repo →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="projects-more">
          <a
            href="https://github.com/lemayian23?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            All repositories on GitHub
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="projects-mini">
          <h3 className="projects-mini-title">More builds — client &amp; coursework systems</h3>
          <div className="projects-mini-grid">
            {moreBuilds.map((p) => (
              <div key={p.title} className="project-mini-card">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <div className="tech-tags">
                  {p.stack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="projects-mini-note">
            Client and coursework systems — not all code is public. Happy to walk through any of them.
          </p>
        </div>
      </div>
    </section>
  );
}
