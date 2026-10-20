const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/lemayian23',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lemakirionki/',
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/Lema_Kirionki',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/#home" className="logo">
              <span className="prompt">~$</span> denis lemayian
            </a>
            <p>
              AI &amp; full-stack engineer building retrieval systems and the products around
              them. Always building. Always learning.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <div>
              <h4>Navigate</h4>
              <ul>
                <li><a href="/#about">About</a></li>
                <li><a href="/#experience">Experience</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Elsewhere</h4>
              <ul>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer">
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {year} Denis Lemayian Kirionki · Nairobi → worldwide</p>
          <a href="/#home" className="to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
