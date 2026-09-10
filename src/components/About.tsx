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
                loading={i === 0 ? 'eager' : 'lazy'}
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

          {/* Bio */}
          <div className="about-text">
            <div className="about-heading">
              <h3>Denis Lemayian Kirionki</h3>
              <span className="about-role">
                Software Engineer &middot; AI Developer &middot; Full-Stack Developer
              </span>
            </div>

            <p>
              I&apos;m a Software Engineer with <strong>4+ years of hands-on experience</strong>{' '}
              building full-stack applications and AI systems. Currently completing a Bachelor
              of Technology in Information Technology at the Technical University of Kenya.
            </p>

            <p>
              I architected and delivered <strong>TUK-ConvoSearch</strong> &mdash; a
              production-grade Retrieval-Augmented Generation (RAG) AI assistant that
              processes institutional documents and returns cited, grounded answers using
              open-source LLMs and FAISS vector search, running entirely on CPU without cloud
              dependency.
            </p>

            <p>
              I care deeply about clean architecture, thoughtful UX, and shipping software
              that actually works in the real world &mdash; whether it&apos;s an AI assistant
              handling student queries or a CRM replacing a 450-file legacy system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}