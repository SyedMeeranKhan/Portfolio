import React from "react";
import "./App.css";
import heroImage from "./assets/Syed_Meeran_Khan.jpg";

function Hero() {
  return (
    <section id="hero" className="hero-section" data-aos="fade-up">
      <div className="hero-content">
        <img src={heroImage} alt="Dev" className="hero-avatar" />
        <h1>
          Hi, I'm <span className="highlight">Syed Meeran Khan</span>
        </h1>
        <h2>Creative Front-End Developer</h2>
        <p>
          Custom & CMS Front-End Developer focused on building fast, user-friendly websites with React, JavaScript, and modern web tools
        </p>
        <a href="#contact" className="cta-btn">Let's Connect</a>
      </div>
    </section>
  );
}
export default Hero;