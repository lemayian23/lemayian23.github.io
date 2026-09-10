'use client';

import { useEffect, useState } from 'react';

const images = ['/profile1.jpg', '/profile2.jpg', '/profile3.jpg'];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-bg" aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={src}
          className={`hero-bg-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero-bg-overlay" />
    </div>
  );
}