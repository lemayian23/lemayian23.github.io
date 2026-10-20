export default function CaseStudy() {
  return (
    <section id="case-study" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">case study</span>
          <h2 className="section-title">Featured deep-dive</h2>
        </div>

        <div className="case-wrap">
          <div className="case-body">
            <span className="case-badge">★ Final Year Project — defended before academic panel</span>
            <h3>TUK-ConvoSearch</h3>
            <p className="case-sub">
              AI-Powered RAG Student Support Assistant · Technical University of Kenya · Nov 2025 – Jun 2026
            </p>
            <p>
              Architected and shipped a full RAG pipeline: document ingestion (PDF/DOCX/TXT) →
              chunking (500-char, 100-char overlap) → 384-dim vector embeddings (Sentence
              Transformers) → FAISS semantic search → llama3.2:1b response generation via Ollama —
              running entirely on CPU with no cloud dependency.
            </p>
            <p>
              Solved a critical asyncio event-loop blocking bug by running the synchronous Ollama
              stream generator in a background thread, bridging to the async SSE endpoint via{' '}
              <code>queue.Queue</code> and <code>run_in_executor</code>. Built a React admin panel
              (JWT auth, document upload/delete with auto-reindex, query logs) and a vanilla JS
              streaming chat interface. Added SQLite persistence with WAL mode for concurrent-safe
              access alongside the FastAPI server.
            </p>

            <div className="case-metrics">
              <div className="metric">
                <span className="metric-value">100%</span>
                <span className="metric-label">Source citation</span>
              </div>
              <div className="metric">
                <span className="metric-value">18.65s</span>
                <span className="metric-label">Avg response (CPU)</span>
              </div>
              <div className="metric">
                <span className="metric-value">66</span>
                <span className="metric-label">FAISS chunks</span>
              </div>
              <div className="metric">
                <span className="metric-value">120+</span>
                <span className="metric-label">Pages of docs</span>
              </div>
            </div>

            <div className="tech-tags">
              {['Python', 'FastAPI', 'LangChain', 'FAISS', 'Sentence Transformers', 'Ollama', 'SQLite', 'React', 'Vite', 'JWT'].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <a
                href="https://github.com/lemayian23/tuk-convosearch"
                target="_blank"
                rel="noreferrer"
                className="case-link"
              >
                Read the code on GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
