export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Denis Lemayian Kirionki. All rights reserved.</p>
        <p style={{ marginTop: '1rem', opacity: 0.8 }}>
          Built with Next.js, TypeScript &amp; CSS |
          <a href="https://github.com/lemayian23" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '0.5rem' }}>
            GitHub
          </a>
          {' | '}
          <a href="mailto:softwareengineer@lemayian.comS" style={{ color: 'white' }}>
            Get in touch
          </a>
        </p>
      </div>
    </footer>
  );
}
