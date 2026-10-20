export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-panel">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>contact</span>
          <h2>
            Let&apos;s build something <span className="grad-text">worth shipping</span>
          </h2>
          <p className="lede">
            Open to junior software engineering and AI development roles, contract work on RAG
            systems, and collaborations on open source. I read every message and reply within
            24–48 hours.
          </p>

          <div className="contact-channels">
            <a className="contact-chip" href="mailto:lemayianledavit2018@gmail.com">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              lemayianledavit2018@gmail.com
            </a>
            <a className="contact-chip" href="tel:+254799801096">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
              </svg>
              +254 799 801 096
            </a>
            <span className="contact-chip" style={{ cursor: 'default' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Nairobi, Kenya · remote worldwide
            </span>
          </div>

          <div className="contact-expect">
            <div className="expect-block">
              <h3>// what I&apos;m looking for</h3>
              <ul>
                <li>Junior software engineering or AI development roles</li>
                <li>Backend or full-stack work in Python, FastAPI or React</li>
                <li>Contract projects on AI systems and RAG pipelines</li>
                <li>Open-source collaboration in AI, EdTech or dev tooling</li>
              </ul>
            </div>
            <div className="expect-block">
              <h3>// what you can expect</h3>
              <ul>
                <li>A reply within 24–48 hours on weekdays</li>
                <li>A direct, honest conversation about fit</li>
                <li>Clear timelines on any work I take on</li>
                <li>Comfortable across time zones for remote roles</li>
              </ul>
            </div>
          </div>

          <a href="mailto:lemayianledavit2018@gmail.com" className="btn btn-primary">
            Send me an email
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
