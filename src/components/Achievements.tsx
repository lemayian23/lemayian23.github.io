const achievements = [
  {
    title: '22★ flagship open-source repo',
    description:
      'TUK-ConvoSearch earned 22 stars from the developer community — organic recognition of production-grade RAG work.',
    when: 'github.com/lemayian23/tuk-convosearch',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.8L5.8 21l1.6-7L2 9.3l7.1-.7L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Final Year Project — panel defended',
    description:
      'Architected a RAG student support assistant and defended it before a panel of academic lecturers at TUK.',
    when: 'Technical University of Kenya · 2026',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l8 4-8 4-8-4 8-4z" />
        <path d="M4 11l8 4 8-4" />
        <path d="M4 15l8 4 8-4" />
      </svg>
    ),
  },
  {
    title: 'Legacy system rewrite, 90% smaller',
    description:
      'Replaced a 450-file legacy PHP CRM/ERP with a modern Python/Flask application at Aquashine — cutting codebase complexity by 90%.',
    when: 'Aquashine CRM/ERP',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2l-8.5 8.5a2.1 2.1 0 0 0 3 3L17 5" />
        <path d="M14 2l4 4" />
        <path d="M9 15l-4 4" />
        <path d="M17 13l4 4-5 5-4-4" />
      </svg>
    ),
  },
  {
    title: 'Python Programming Certificate',
    description:
      'Formal certification in Python programming from the Institute of Advanced Technology, Nairobi.',
    when: 'Institute of Advanced Technology',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="9" r="6" />
        <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
      </svg>
    ),
  },
  {
    title: 'Hobby x86_64 OS in C',
    description:
      'Building Lema-OS from scratch — bootloaders, memory management and hardware handling, no tutorials copied.',
    when: 'github.com/lemayian23/lema-os',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
        <path d="M7 9l2.5 2.5L7 14M12.5 14H16" />
      </svg>
    ),
  },
  {
    title: 'Fully local AI platform',
    description:
      '10-capability RAG platform — hybrid search, knowledge graphs, corrective retrieval, multi-tool agents. Nine ADRs, golden test suite.',
    when: 'github.com/lemayian23/metadata-rag',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    ),
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">recognition</span>
          <h2 className="section-title">Milestones &amp; proof of work</h2>
          <p className="section-sub">
            Stars, certifications and shipped outcomes — the receipts behind the résumé.
          </p>
        </div>

        <div className="achieve-grid">
          {achievements.map((a) => (
            <div key={a.title} className="achieve-card">
              <div className="achieve-icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
              <span className="when">{a.when}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
