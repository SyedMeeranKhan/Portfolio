import React from "react";
import "./App.css";

const projects = [
  {
    title: "Animated Portfolio",
    description: "A modern, animated portfolio site showcasing my work, built with React, PHP, and MySQL.",
    link: "#",
    tags: ["React", "AOS", "PHP", "MySQL"],
  },
  {
    title: "E-commerce Dashboard",
    description: "Interactive admin dashboard for managing products, orders, and analytics.",
    link: "https://www.getnow.pk/",
    tags: ["React", "Node.js", "REST API"],
  },
  {
    title: "Blog Platform",
    description: "Full-featured blogging platform with user authentication and markdown support.",
    link: "https://www.beingguru.com/",
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx} data-aos="zoom-in" data-aos-delay={150 * (idx+1)}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tags">
              {proj.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a
              href={proj.link}
              className="proj-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;