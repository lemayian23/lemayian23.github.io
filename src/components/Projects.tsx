import { PortfolioItem } from '@/types';

const projects: PortfolioItem[] = [
  {
    id: 1,
    title: 'TUK-ConvoSearch',
    description:
      'Production-grade RAG (Retrieval-Augmented Generation) AI assistant for TUK students. Full pipeline: document ingestion (PDF/DOCX/TXT) → chunking → 384-dim vector embeddings → FAISS semantic search → llama3.2:1b response generation via Ollama, with a React admin panel and a streaming vanilla-JS chat interface. 100% source citation rate across test queries, running entirely on CPU.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Sentence Transformers', 'Ollama', 'SQLite', 'React', 'Vite', 'JWT'],
    github: 'https://github.com/lemayian23/tuk-convosearch',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-Time Personalization Engine',
    description: 'Content recommendation system that delivers real-time, user-specific content personalization.',
    technologies: ['JavaScript'],
    github: 'https://github.com/lemayian23',
  },
  {
    id: 3,
    title: 'SchemaGuard',
    description: 'A database schema validation and protection utility.',
    technologies: ['Python'],
    github: 'https://github.com/lemayian23',
  },
  {
    id: 4,
    title: 'Livestock Outbreak Detection',
    description: 'AI-powered system for detecting and monitoring disease outbreaks in livestock populations.',
    technologies: ['Python'],
    github: 'https://github.com/lemayian23',
  },
  {
    id: 5,
    title: 'Code Review AI',
    description: 'AI-powered code review assistant that gives automated feedback on pull requests.',
    technologies: ['Python'],
    github: 'https://github.com/lemayian23',
  },
  {
    id: 6,
    title: 'FurniEase',
    description: 'Furniture e-commerce and management system.',
    technologies: ['PHP', 'Blade'],
    github: 'https://github.com/lemayian23',
  },
  {
    id: 7,
    title: 'Student Management App',
    description: 'Native Android mobile application for student records and administration, built with a Room database and modern Android architecture.',
    technologies: ['Kotlin'],
    github: 'https://github.com/lemayian23',
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        {/* Featured Project */}
        {featured.map((project) => (
          <div key={project.id} className="project-card featured" style={{ marginBottom: '2.5rem' }}>
            <h3>
              <span className="star">⭐</span>
              {project.title}
            </h3>
            <p>{project.description}</p>

            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}

        {/* Other Projects */}
        <div className="projects-grid">
          {rest.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/lemayian23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            More on github.com/lemayian23
          </a>
        </div>
      </div>
    </section>
  );
}