import React from 'react';
import "../section/section.css"; 

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About AD Fashion</h1>
      <p className="about-description">
        Welcome to <strong>AD Fashion</strong> — your one-stop destination for the latest and trendiest fashion apparel. 
        We specialize in delivering top-quality clothing and accessories for men, women, and kids. 
        Our mission is to bring global fashion trends right to your doorstep at affordable prices.
      </p>
      <p className="about-mission">
        Whether you're looking for streetwear, ethnic, formal, or casual styles, AD Fashion has got you covered. 
        We believe in quality, sustainability, and providing our customers with the best shopping experience online.
      </p>
      <p className="about-thanks">
        Thank you for choosing AD Fashion. Stay stylish, stay confident.
      </p>
    </div>
  );
}

export default About;
