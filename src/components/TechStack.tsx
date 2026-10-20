const techStack = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'Go', 'PHP', 'C'] },
  { category: 'AI / ML', items: ['RAG', 'LangChain', 'LlamaIndex', 'FAISS', 'Sentence Transformers', 'Ollama', 'NLP'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Tailwind', 'Material UI', 'Chakra UI'] },
  { category: 'Backend', items: ['FastAPI', 'Flask', 'Node.js', 'Express', 'GraphQL', 'REST APIs', 'WebSockets'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'TiDB Cloud', 'Firebase', 'MongoDB'] },
  { category: 'Cloud / DevOps', items: ['Docker', 'Git', 'CI/CD', 'Render', 'Linux'] },
];

export default function TechStack() {
  return (
    <section id="stack" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">stack</span>
          <h2 className="section-title">Tools of the trade</h2>
          <p className="section-sub">
            The languages, frameworks and infrastructure I reach for when building AI systems
            and the products around them.
          </p>
        </div>
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
  );
}
