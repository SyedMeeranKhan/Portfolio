import React from "react";
import "./App.css";

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer with a knack for building beautiful &
        interactive web experiences. I specialize in React, Node.js, and PHP,
        and love bringing ideas to life with animation and clean code.
      </p>
      <div className="skills">
        <div>React</div>
        <div>PHP</div>
        <div>MySQL</div>
        <div>Node.js</div>
        <div>JavaScript</div>
        <div>CSS/SCSS</div>
        <div>GSAP/AOS</div>
      </div>
    </section>
  );
}
export default About;