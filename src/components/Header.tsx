'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '/#home', label: 'home', section: 'home' },
  { href: '/#about', label: 'about', section: 'about' },
  { href: '/#experience', label: 'experience', section: 'experience' },
  { href: '/#projects', label: 'projects', section: 'projects' },
  { href: '/#contact', label: 'contact', section: 'contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.section))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <nav className="nav" aria-label="Primary">
            <a href="/#home" className="logo" onClick={() => setOpen(false)}>
              <span className="prompt">~$</span> denis lemayian <span className="cursor" aria-hidden="true" />
            </a>

            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.section}>
                  <a href={l.href} className={active === l.section ? 'active' : ''}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              <a
                className="nav-github"
                href="https://github.com/lemayian23"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.69-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
              <a href="/resume" className="btn btn-primary btn-sm">
                Resume
              </a>
              <button
                className={`menu-toggle${open ? ' open' : ''}`}
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                <span /><span /><span />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        {links.map((l, i) => (
          <a
            key={l.section}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${0.06 * i + 0.08}s` : '0s' }}
          >
            <span className="idx">0{i + 1}</span> {l.label}
          </a>
        ))}
        <a
          href="/resume"
          onClick={() => setOpen(false)}
          style={{ transitionDelay: open ? '0.4s' : '0s', color: 'var(--accent)' }}
        >
          <span className="idx">↓</span> view resume
        </a>
      </div>
    </>
  );
}
