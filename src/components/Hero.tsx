'use client';

import { useEffect, useState } from 'react';
import ParticleField from './ParticleField';
import RetrievalDemo from './RetrievalDemo';

const roles = ['AI Engineer', 'RAG Systems Builder', 'Full-Stack Developer', 'Python · TypeScript'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTyped(roles[0]);
      return;
    }

    const full = roles[roleIdx];
    const done = !deleting && typed === full;
    const empty = deleting && typed === '';

    const delay = done ? 2000 : empty ? 350 : deleting ? 32 : 62;

    const t = setTimeout(() => {
      if (done) {
        setDeleting(true);
      } else if (empty) {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      } else {
        setTyped(full.slice(0, typed.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  return (
    <section id="home" className="hero">
      <ParticleField />
      <div className="container">
        <div className="hero-inner">
          <div>
            <span className="status-badge">
              <span className="dot" />
              Available for work — remote worldwide
            </span>
            <h1>
              Denis Lemayian<span className="grad-text">.</span>
              <br />
              I build AI that <span className="grad-text">retrieves, reasons &amp; ships.</span>
            </h1>
            <p className="hero-role">
              <span className="typed">{typed}</span>
              <span className="caret" aria-hidden="true" />
            </p>
            <p className="hero-lede">
              Shipping software for real businesses — from a <strong>450-file CRM rewrite</strong>{' '}
              to RAG assistants that run entirely on CPU. I specialize in retrieval-augmented
              generation and the full-stack products around it: vector search, agents, and the
              React frontends that make them usable.
            </p>
            <div className="hero-ctas">
              <a href="/#projects" className="btn btn-primary">
                View my work
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="/resume" className="btn btn-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 20h16" />
                </svg>
                Download CV
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="num"><em>22</em>★</span>
                <span className="lbl">Flagship repo</span>
              </div>
              <div className="hero-stat">
                <span className="num">60<em>+</em></span>
                <span className="lbl">Public repos</span>
              </div>
              <div className="hero-stat">
                <span className="num">100<em>%</em></span>
                <span className="lbl">Cited answers</span>
              </div>
            </div>
          </div>

          <RetrievalDemo />
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">scroll</div>
    </section>
  );
}
