import type { Metadata } from 'next';
import ResumeToolbar from '@/components/ResumeToolbar';

export const metadata: Metadata = {
  title: 'CV — Denis Lemayian Kirionki',
  description:
    'Curriculum vitae of Denis Lemayian Kirionki — Software Engineer, AI Developer, Full-Stack Developer. Nairobi, Kenya.',
};

const skills = [
  { group: 'Languages', items: 'Python · JavaScript · TypeScript · Java · Kotlin · PHP · Go' },
  { group: 'AI / ML', items: 'RAG · LangChain · LlamaIndex · FAISS · Sentence Transformers · Ollama · Prompt Engineering · NLP' },
  { group: 'Frontend', items: 'React · Next.js · React Native · Tailwind CSS · Material UI · Bootstrap · Chakra UI' },
  { group: 'Backend', items: 'FastAPI · Flask · Node.js · Express · GraphQL · REST APIs · WebSockets' },
  { group: 'Databases', items: 'MySQL · PostgreSQL · SQLite · TiDB Cloud · Firebase · MongoDB' },
  { group: 'Cloud / DevOps', items: 'Docker · Git · CI/CD · Render · Linux' },
  { group: 'Other', items: 'System Architecture · Agile · Technical Documentation · ERP Systems · LAN Configuration' },
];

const experience = [
  {
    role: 'ICT Attachment',
    org: 'NACADA (National Campaign Against Alcohol and Drug Abuse) · NSSF Building, Nairobi',
    period: 'June 2026 – September 2026',
    points: [
      'Provided technical support: connected and configured printers, installed and troubleshooted drivers, and resolved hardware/software conflicts.',
      'Responded to and resolved reported network outages, diagnosing connectivity issues and coordinating with teams to restore services promptly.',
      'Set up video-conferencing for senior officers — running Zoom meeting screens on Mondays, Wednesdays and Fridays.',
      'Troubleshot network unavailability and LAN issues; documented system review findings for internal IT support.',
    ],
  },
  {
    role: 'CRM & Systems Developer',
    org: 'Aquashine Limited · Nairobi, Kenya',
    period: 'March 2026 (one-month contract)',
    points: [
      'Led end-to-end rewrite of a legacy 450-file PHP CRM/ERP system into a modern Python/Flask application — cutting codebase complexity by 90%.',
      'Architected core modules: job card management, customer database, inventory control, technician scheduling, financial tracking, quotation generation with margin analysis, and real-time reporting.',
      'Added role-based access control, audit logging and a responsive Bootstrap UI; integrated PDFShift (document generation) and Africa’s Talking (automated SMS).',
      'Deployed to production on Render (MySQL/TiDB) and maintained it through handover; shipped Excel/CSV export, dynamic dashboards and automated daily status reports.',
    ],
  },
  {
    role: 'Freelance Developer',
    org: 'Independent · Nairobi, Kenya',
    period: 'Ongoing',
    points: [
      'Designed and shipped automation systems for small businesses — a furniture e-commerce platform (FurniEase) and a retail shop’s record-keeping system.',
      'Delivered a WiFi billing and hotspot management system for small ISPs, deployed in production.',
    ],
  },
];

const projects = [
  {
    name: '⭐ TUK-ConvoSearch — github.com/lemayian23/tuk-convosearch',
    note: 'AI-Powered RAG Student Support Assistant · Final Year Project · Nov 2025 – Jun 2026',
    points: [
      'Full RAG pipeline: document ingestion (PDF/DOCX/TXT) → chunking → 384-dim embeddings (Sentence Transformers) → FAISS semantic search → llama3.2:1b generation via Ollama.',
      'Solved a critical asyncio event-loop blocking bug by bridging a synchronous Ollama stream to an async SSE endpoint via queue.Queue and run_in_executor.',
      'Built a React admin panel (JWT auth, auto-reindexing uploads, query logs) and a streaming student chat interface; SQLite persistence with WAL mode.',
      'Results: 100% source citation across 22 test queries · 18.65s avg response on CPU-only · 7 documents, 66 FAISS chunks · 120+ pages of documentation.',
    ],
  },
];

const miniProjects = [
  { name: 'Real-Time Personalization Engine', stack: 'JavaScript', desc: 'Content recommendation with real-time, user-specific personalization.' },
  { name: 'SchemaGuard', stack: 'Python', desc: 'Database schema validation and protection utility.' },
  { name: 'FurniEase', stack: 'PHP · Blade', desc: 'Furniture e-commerce and management system — the platform behind the Funiease automation.' },
  { name: 'Student Management App', stack: 'Kotlin', desc: 'Mobile application for student records and administration.' },
  { name: 'Livestock Outbreak Detection', stack: 'Python', desc: 'AI-powered detection and monitoring of disease outbreaks in livestock.' },
  { name: 'Code Review AI', stack: 'Python', desc: 'AI assistant for automated feedback on pull requests.' },
];

const achievements = [
  'Python Programming Certificate — Institute of Advanced Technology, Nairobi.',
  'Final Year Project Presentation — successfully defended TUK-ConvoSearch before a panel of academic lecturers.',
  'Open source — 60+ public repositories; flagship RAG project holds 22 stars.',
];

const references = [
  { name: 'Prof. Salesio M. Kiura', title: 'Former Director, School of Computing and IT · Technical University of Kenya' },
  { name: 'Shadrack Ngumbau', title: 'Lecturer & Final Year Project Supervisor · Technical University of Kenya' },
  { name: 'Mr. Erick O. Jodwar', title: 'ICT Officer · National Campaign Against Alcohol and Drug Abuse' },
];

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="container">
        <ResumeToolbar />

        <article className="resume-sheet">
          <header className="rs-head">
            <h1>Denis Lemayian Kirionki</h1>
            <p className="rs-title">Software Engineer · AI Developer · Full-Stack Developer</p>
            <p className="rs-contact">
              Nairobi, Kenya &nbsp;|&nbsp; lemayianledavit2018@gmail.com &nbsp;|&nbsp; +254 799 801 096
              &nbsp;|&nbsp; github.com/lemayian23 &nbsp;|&nbsp; lemayian.com
            </p>
          </header>

          <section className="rs-section">
            <h2>Professional Summary</h2>
            <p>
              Software Engineer building full-stack applications and AI systems — spanning
              freelance business automation (CRM/ERP rewrites, retail record-keeping, ISP
              billing) and enterprise IT support. Architected and delivered TUK-ConvoSearch — a
              production-grade Retrieval-Augmented Generation (RAG) AI assistant that returns
              cited, grounded answers using open-source LLMs and FAISS vector search, running
              entirely on CPU without cloud dependency. Combines deep expertise in Python,
              JavaScript and modern frameworks with a proven record of shipping systems that
              solve real-world problems.
            </p>
          </section>

          <section className="rs-section">
            <h2>Technical Skills</h2>
            <div className="rs-skills">
              {skills.map((s) => (
                <div key={s.group} className="rs-skill">
                  <strong>{s.group}:</strong> {s.items}
                </div>
              ))}
            </div>
          </section>

          <section className="rs-section">
            <h2>Professional Experience</h2>
            {experience.map((job) => (
              <div key={job.role + job.period} className="rs-job">
                <div className="rs-job-head">
                  <h3>{job.role}</h3>
                  <span className="rs-period">{job.period}</span>
                </div>
                <p className="rs-org">{job.org}</p>
                <ul>
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="rs-section">
            <h2>Projects</h2>
            {projects.map((p) => (
              <div key={p.name} className="rs-job">
                <div className="rs-job-head">
                  <h3>{p.name}</h3>
                </div>
                <p className="rs-org">{p.note}</p>
                <ul>
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rs-mini-grid">
              {miniProjects.map((p) => (
                <div key={p.name} className="rs-mini">
                  <strong>{p.name}</strong> <span className="rs-mini-stack">· {p.stack}</span>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="rs-all-repos">All repositories: github.com/lemayian23 · 60+ public repos</p>
          </section>

          <section className="rs-section">
            <h2>Education</h2>
            <div className="rs-job">
              <div className="rs-job-head">
                <h3>Bachelor of Technology in Information Technology</h3>
                <span className="rs-period">2022 – 2026 (Expected)</span>
              </div>
              <p className="rs-org">Technical University of Kenya · Nairobi, Kenya</p>
              <ul>
                <li>Final Year Project: TUK-ConvoSearch — RAG-based AI Student Support Assistant.</li>
                <li>Coursework: Artificial Intelligence, Data Structures & Algorithms, Machine Learning, NLP, Database Systems, Software Engineering.</li>
              </ul>
            </div>
            <div className="rs-job">
              <div className="rs-job-head">
                <h3>Python Programming Certificate</h3>
              </div>
              <p className="rs-org">Institute of Advanced Technology · Nairobi</p>
            </div>
          </section>

          <section className="rs-section">
            <h2>Achievements &amp; Awards</h2>
            <ul>
              {achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </section>

          <section className="rs-section">
            <h2>Professional References</h2>
            <div className="rs-refs">
              {references.map((r) => (
                <div key={r.name} className="rs-ref">
                  <strong>{r.name}</strong>
                  <span>{r.title}</span>
                </div>
              ))}
            </div>
            <p className="rs-refs-note">Contact details available on request.</p>
          </section>
        </article>
      </div>
    </div>
  );
}
