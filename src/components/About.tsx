'use client';

import { useState } from 'react';

const skills = [
  { name: 'Python / FastAPI / Flask', level: 92, category: 'Backend' },
  { name: 'JavaScript / TypeScript', level: 88, category: 'Frontend' },
  { name: 'React / Next.js', level: 85, category: 'Frontend' },
  { name: 'MySQL / TiDB / SQLite', level: 82, category: 'Data' },
  { name: 'AI / RAG / LangChain', level: 88, category: 'AI' },
  { name: 'Docker / Git / CI-CD', level: 80, category: 'DevOps' },
];

const photos = ['/profile1.jpg', '/profile2.jpg', '/profile3.jpg'];

export default function About() {
  const [idx, setIdx] = useState(0);
  const total = photos.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          {/* Photo Carousel */}
          <div className="image-carousel">
            {photos.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Denis Lemayian photo ${i + 1}`}
                className="about-image"
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  inset: i === 0 ? undefined : 0,
                  opacity: i === idx ? 1 : 0,
                }}
              />
            ))}
            <button
              aria-label="Previous photo"
              className="carousel-arrow carousel-prev"
              onClick={prev}
            >
              ‹
            </button>
            <button
              aria-label="Next photo"
              className="carousel-arrow carousel-next"
              onClick={next}
            >
              ›
            </button>
            <div className="carousel-indicators">
              {photos.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to photo ${i + 1}`}
                  className={`indicator ${i === idx ? 'active' : ''}`}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
          </div>

          {/* Bio + Skills */}
          <div className="about-text">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
              I&apos;m a Software Engineer and AI Developer based in Nairobi, Kenya, focused on
              building production-grade applications that solve real problems. My work spans
              full-stack web systems, AI-powered retrieval pipelines, and enterprise CRM/ERP
              platforms.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
              I care deeply about clean architecture, thoughtful UX, and shipping things that
              actually work in the real world &mdash; whether it&apos;s a RAG assistant handling
              thousands of student queries, or a CRM replacing a 450-file legacy system.
            </p>

            <div className="skills-grid">
              {skills.map((s) => (
                <div key={s.name} className="skill-item">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.3rem',
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>{s.name}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      {s.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}