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
    <section id="projects" className="section">
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center', color: 'var(--secondary-color)' }}>
          My Projects
        </h2>

        {featured.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
              border: '2px solid var(--primary-color)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span aria-hidden="true">⭐</span>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
            </div>
            <p style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '0.8rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    backgroundColor: 'var(--primary-color)',
                    color: '#fff',
                    opacity: 0.85,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View on GitHub
              </a>
            )}
          </div>
        ))}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {rest.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ marginBottom: '1rem', flexGrow: 1, color: 'var(--text-color)' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.15rem 0.55rem',
                      borderRadius: '999px',
                      backgroundColor: 'var(--secondary-color)',
                      color: '#fff',
                      opacity: 0.85,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          More on <a href="https://github.com/lemayian23" target="_blank" rel="noopener noreferrer">github.com/lemayian23</a>
        </p>
      </div>
    </section>
  );
}
