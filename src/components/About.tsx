'use client';

import { useState } from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Next.js/React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Frontend' },
  { name: 'React Native', level: 85, category: 'Other' }, // Changed from 'Mobile'
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Python/Django', level: 80, category: 'Backend' },
  { name: 'AWS/Cloud', level: 75, category: 'Tools' }, // Changed from 'DevOps'
  { name: 'MongoDB', level: 80, category: 'Tools' }, // Changed from 'Database'
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
];

// Your three profile images
const profileImages = [
  { 
    id: 1, 
    src: "/profile1.jpg", 
    alt: "Lemayian Kirionki Denis - Professional Headshot 1" 
  },
  { 
    id: 2, 
    src: "/profile2.jpg", 
    alt: "Lemayian Kirionki Denis - Professional Headshot 2" 
  },
  { 
    id: 3, 
    src: "/profile3.jpg", 
    alt: "Lemayian Kirionki Denis - Professional Headshot 3" 
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
    target.src = 'https://ui-avatars.com/api/?name=Lemayian+Denis&size=400&background=3B82F6&color=ffffff';
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
              
              {/* Navigation Arrows */}
              <button className="carousel-arrow carousel-prev" onClick={prevImage}>
                ‹
              </button>
              <button className="carousel-arrow carousel-next" onClick={nextImage}>
                ›
              </button>
              
              {/* Image Indicators */}
              <div className="carousel-indicators">
                {profileImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm Lemayian Kirionki Denis, a passionate Senior Software Engineer with expertise 
              in full-stack web and mobile development. I love creating efficient, scalable applications 
              that solve real-world problems.
            </p>
            <p>
              With extensive experience in modern technologies like React, Next.js, Node.js, and React Native, 
              I specialize in building robust solutions from concept to deployment. I'm always eager to 
              tackle challenging projects and learn new technologies.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects, mentoring 
              junior developers, or exploring the latest trends in software architecture and cloud computing.
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