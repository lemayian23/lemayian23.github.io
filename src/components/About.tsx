'use client';

import { useState } from 'react';
import { Skill } from '@/types';

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'JavaScript', level: 88, category: 'Languages' },
  { name: 'TypeScript', level: 85, category: 'Languages' },
  { name: 'Java', level: 75, category: 'Languages' },
  { name: 'Kotlin', level: 72, category: 'Languages' },
  { name: 'PHP', level: 75, category: 'Languages' },
  { name: 'Go', level: 55, category: 'Languages' },

  { name: 'RAG / LangChain / LlamaIndex', level: 85, category: 'AI/ML' },
  { name: 'FAISS / Vector Search', level: 85, category: 'AI/ML' },
  { name: 'Ollama / Prompt Engineering', level: 82, category: 'AI/ML' },
  { name: 'NLP / Sentence Transformers', level: 78, category: 'AI/ML' },

  { name: 'React / Next.js', level: 88, category: 'Frontend' },
  { name: 'Tailwind CSS / Chakra UI', level: 80, category: 'Frontend' },
  { name: 'React Native', level: 75, category: 'Frontend' },

  { name: 'FastAPI', level: 85, category: 'Backend' },
  { name: 'Flask', level: 88, category: 'Backend' },
  { name: 'Node.js / Express', level: 80, category: 'Backend' },
  { name: 'REST APIs / GraphQL / WebSockets', level: 80, category: 'Backend' },

  { name: 'MySQL / PostgreSQL', level: 82, category: 'Database' },
  { name: 'MongoDB / Firebase', level: 75, category: 'Database' },
  { name: 'SQLite / TiDB Cloud', level: 80, category: 'Database' },

  { name: 'Docker / CI-CD', level: 75, category: 'DevOps' },
  { name: 'Git / GitHub', level: 90, category: 'DevOps' },
  { name: 'Linux', level: 80, category: 'DevOps' },
];

const profileImages = [
  {
    id: 1,
    src: "/profile1.jpg",
    alt: "Denis Lemayian Kirionki - Professional Headshot 1"
  },
  {
    id: 2,
    src: "/profile2.jpg",
    alt: "Denis Lemayian Kirionki - Professional Headshot 2"
  },
  {
    id: 3,
    src: "/profile3.jpg",
    alt: "Denis Lemayian Kirionki - Professional Headshot 3"
  }
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + profileImages.length) % profileImages.length);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://ui-avatars.com/api/?name=Denis+Lemayian&size=400&background=3B82F6&color=ffffff';
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div>
            <div className="image-carousel">
              <img
                src={profileImages[currentImageIndex].src}
                alt={profileImages[currentImageIndex].alt}
                className="about-image"
                onError={handleImageError}
              />

              <button className="carousel-arrow carousel-prev" onClick={prevImage} aria-label="Previous photo">
                ‹
              </button>
              <button className="carousel-arrow carousel-next" onClick={nextImage} aria-label="Next photo">
                ›
              </button>

              <div className="carousel-indicators">
                {profileImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Show photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I&apos;m Denis Lemayian Kirionki, a Software Engineer with 4+ years of
              hands-on experience building full-stack applications and AI systems. I&apos;m
              currently completing a Bachelor of Technology in Information Technology at the
              Technical University of Kenya.
            </p>
            <p>
              My flagship project, <strong>TUK-ConvoSearch</strong>, is a production-grade
              Retrieval-Augmented Generation (RAG) AI assistant that processes institutional
              documents and returns cited, grounded answers using open-source LLMs and FAISS
              vector search &mdash; running entirely on CPU with no cloud dependency.
            </p>
            <p>
              Professionally, I led the end-to-end rewrite of a 450-file legacy PHP CRM/ERP
              system into a modern Python Flask application at Aquashine Limited, cutting
              codebase complexity by 90% while adding role-based access control, audit
              logging, and real-time reporting. I&apos;ve also contributed as a Developer
              Advocate Intern at Prisma Data Services and served as a Microsoft Learn Student
              Ambassador, leading a technical writing team and organizing hackathons.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Contact Information</h3>
              <p><strong>Email:</strong> lemayianledavit2018@gmail.com</p>
              <p><strong>Phone:</strong> +254 799 801 096</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/lemayian23" target="_blank" rel="noopener noreferrer">github.com/lemayian23</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/lemakirionki" target="_blank" rel="noopener noreferrer">linkedin.com/in/lemakirionki</a></p>
            </div>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#e2e8f0',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      backgroundColor: 'var(--primary-color)',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
