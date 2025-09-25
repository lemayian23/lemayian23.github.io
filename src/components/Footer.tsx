export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Lemayian Kirionki Denis. All rights reserved.</p>
        <p style={{ marginTop: '1rem', opacity: 0.8 }}>
          Built with Next.js, TypeScript, and CSS | 
          <a href="mailto:lemayianledavit2018@gmail.com" style={{ color: 'white', marginLeft: '0.5rem' }}>
            Get in touch
          </a>
        </p>
      </div>
    </footer>
  );
}