import React from "react";
import "./App.css";

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        I'm a front-end developer specializing in creating custom and CMS-based websites with clean, responsive designs and smooth user experiences. Whether it's a fully custom-built interface or a dynamic CMS theme, I bring ideas to life using modern tools like React, HTML, CSS, and JavaScript. I focus on performance, accessibility, and attention to detail to deliver engaging digital experiences that work seamlessly across all devices
      </p>
      <div className="skills">
        <div>React</div>
        <div>PHP</div>
        <div>MySQL</div>
        <div>Node.js</div>
        <div>JavaScript</div>
        <div>CSS/Tailwind CSS</div>
        <div>CMS dev(Wordpress)</div>
      </div>
    </section>
  );
}
export default About;