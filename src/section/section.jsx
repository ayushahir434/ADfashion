import React, { useEffect, useState } from 'react';
import '../section/section.css';
import img1 from './1 (3).png';
import img2 from './2 (3).png';
import img3 from './3 (3).png';
const images = [img1, img2, img3];

const Section = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <div
          className={`mySlides fade ${index === current ? 'active-slide' : ''}`}
          key={index}
        >
          <div className="numbertext">{index + 1} / {images.length}</div>
          <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
        </div>
      ))}

      <div style={{ textAlign: 'center' }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Section;
