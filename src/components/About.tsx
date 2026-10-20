'use client';

import { useState } from 'react';

const photos = ['/profile1.jpg', '/profile2.jpg', '/profile3.jpg'];

export default function About() {
  const [idx, setIdx] = useState(0);
  const total = photos.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">about</span>
          <h2 className="section-title">Behind the terminal</h2>
        </div>

        <div className="about-grid">
          <div className="about-photo">
            <span className="frame-tag">denis@nairobi:~$</span>
            {photos.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Denis Lemayian, photo ${i + 1}`}
                className={i === idx ? 'active' : ''}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
            <button aria-label="Previous photo" className="carousel-arrow carousel-prev" onClick={prev}>
              ‹
            </button>
            <button aria-label="Next photo" className="carousel-arrow carousel-next" onClick={next}>
              ›
            </button>
            <div className="carousel-dots">
              {photos.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to photo ${i + 1}`}
                  className={i === idx ? 'active' : ''}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
          </div>

          <div className="about-text">
            <p>
              I&apos;m a Software Engineer working across freelance business automation, AI systems
              and IT support — from rewriting a <strong>450-file CRM/ERP</strong> at Aquashine in a
              one-month sprint to an ICT attachment at NACADA. Currently completing a Bachelor of
              Technology in IT at the Technical University of Kenya.
            </p>
            <p>
              I architected and delivered <strong>TUK-ConvoSearch</strong> — a production-grade
              Retrieval-Augmented Generation (RAG) assistant that processes institutional documents
              and returns cited, grounded answers using open-source LLMs and FAISS vector search,
              running entirely on CPU without cloud dependency.
            </p>
            <p>
              I&apos;ve also automated systems for real businesses — a furniture platform, a retail
              shop&apos;s record keeping — and I mentor Maasai youth aged 13–17 in coding. I care
              deeply about clean architecture, thoughtful UX, and shipping software that actually
              works in the real world. When I&apos;m not shipping products, I&apos;m building a
              hobby OS in C.
            </p>

            <div className="about-meta">
              <div className="m">
                <span className="num">7</span>
                <span className="lbl">Languages shipped</span>
              </div>
              <div className="m">
                <span className="num">60+</span>
                <span className="lbl">Public repos</span>
              </div>
              <div className="m">
                <span className="num">450→1</span>
                <span className="lbl">Legacy rewrite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
