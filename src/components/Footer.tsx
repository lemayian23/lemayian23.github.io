import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Lemayian Kirionki Denis</h3>
            <p>IT Graduate | AI/ML Enthusiast</p>
          </div>

          <div className="footer-social">
            <a 
              href="https://github.com/lemayian23" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:lemayianledavit2018@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="footer-links">
            <a href="/projects">Projects</a>
            <a href="mailto:lemayianledavit2018@gmail.com">Contact</a>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Lemayian Kirionki Denis. All rights reserved.</p>
            <p className="footer-built">
              Built with Next.js, TypeScript, and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}