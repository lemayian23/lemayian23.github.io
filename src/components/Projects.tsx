const projects = [
  {
    title: 'TUK-ConvoSearch',
    featured: true,
    description:
      'Production-grade RAG AI assistant for TUK students. Full pipeline: document ingestion → chunking → vector embeddings → FAISS semantic search → llama3.2:1b response generation via Ollama, with a React admin panel and streaming chat interface.',
    stack: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Ollama', 'React', 'Vite', 'JWT'],
    link: 'https://github.com/lemayian23',
  },
  {
    title: 'Real-Time Personalization Engine',
    description:
      'Content recommendation system delivering real-time, user-specific personalization.',
    stack: ['JavaScript'],
    link: 'https://github.com/lemayian23',
  },
  {
    title: 'SchemaGuard',
    description: 'A database schema validation and protection utility.',
    stack: ['Python'],
    link: 'https://github.com/lemayian23',
  },
  {
    title: 'Livestock Outbreak Detection',
    description:
      'AI-powered system for detecting and monitoring disease outbreaks in livestock populations.',
    stack: ['Python'],
    link: 'https://github.com/lemayian23',
  },
  {
    title: 'Code Review AI',
    description:
      'AI-powered code review assistant that gives automated feedback on pull requests.',
    stack: ['Python'],
    link: 'https://github.com/lemayian23',
  },
  {
    title: 'FurniEase',
    description: 'Furniture e-commerce and management system.',
    stack: ['PHP', 'Blade'],
    link: 'https://github.com/lemayian23',
  },
  {
    title: 'Student Management App',
    description:
      'Native Android app for student records with Room database and modern architecture.',
    stack: ['Kotlin'],
    link: 'https://github.com/lemayian23',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className={`project-card ${p.featured ? 'featured' : ''}`}>
              <h3>
                {p.featured && <span className="star">⭐</span>}
                {p.title}
              </h3>
              <p>{p.description}</p>

              <div className="tech-tags">
                {p.stack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/lemayian23"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            More on github.com/lemayian23
          </a>
        </div>
      </div>
    </section>
  );
}