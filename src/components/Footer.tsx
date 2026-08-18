import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <h3>Denis Lemayian Kirionki </h3>
            <p>IT Graduate | AI/ML Enthusiast</p>
            <div className={styles.badge}>
              <span>🚀</span> Built TUK-ConvoSearch
            </div>
          </div>

          {/* Projects Section */}
          <div className={styles.section}>
            <h4>Projects</h4>
            <ul>
              <li>
                <a 
                  href="https://github.com/lemayian23/tuk-convosearch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  TUK-ConvoSearch (RAG System)
                </a>
              </li>
              <li>
                <a href="#">
                  Personal Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack Section */}
          <div className={styles.section}>
            <h4>Tech Stack</h4>
            <ul>
              <li>Python & FastAPI</li>
              <li>FAISS & ChromaDB</li>
              <li>LLMs & RAG</li>
              <li>React, Next.js, TypeScript</li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className={styles.section}>
            <h4>Let's Connect</h4>
            <div className={styles.social}>
              <a 
                href="https://github.com/lemayian23" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/lemakirionki/" 
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
            <p className={styles.email}>lemayianledavit2018@gmail.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p>&copy; {currentYear} Denis Lemayian Kirionki . All rights reserved.</p>
          <p className={styles.built}>
            Built with <FaCode /> & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}