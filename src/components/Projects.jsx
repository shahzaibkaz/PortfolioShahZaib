import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";
import { assets } from "../assets/assets";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Clothing Store (Front End UI)",
      category: "frontend",
      description:
        "A modern e-commerce platform built with React and Node.jsThe project features a product carousel, category browsing, and interactive animations, focusing on a user-centric experience.",
      image: assets.clothing,
      technologies: ["React js", "html", "css"],
      link: "https://shahzaib151214.github.io/Clothing/",
      github: "https://github.com/ShahZaib151214",
    },
    {
      id: 2,
      title: "Electronic Store (Front End UI)",
      category: "frontend",
      description:
        "The front-end design embraces a sleek, modern aesthetic tailored to showcase electronics with intuitive navigation, clear product displays, and a seamless user experience.",
      image: assets.electronic,
      technologies: ["React js", "html", "css"],
      link: "https://shahzaib151214.github.io/Electronics/",
      github: "https://github.com/ShahZaib151214",
    },
    {
      id: 3,
      title: "Groceries Store (Front End UI)",
      category: "frontend",
      description:
        "The grocery store’s front-end offers a clean, user-focused design that blends aesthetics with functionality for a smooth and intuitive shopping experience.",
      image: assets.groceries,
      technologies: ["React js", "html", "css"],
      link: "https://shahzaib151214.github.io/Groceries/",
      github: "https://github.com/ShahZaib151214",
    },
    {
      id: 4,
      title: "Portfolio Website (Front End UI)",
      category: "frontend",
      description:
        "A portfolio website with a clean, modern design and responsive layout.",
      image: assets.portfolio,
      technologies: ["React js", "html", "css"],
      link: "https://shahzaibkaz.github.io/ShahZaibPortfolio/",
      github: "https://github.com/ShahZaib151214",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="projects-container">
        <div className={`projects-header ${isVisible ? "visible" : ""}`}>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent works that showcase my skills and
            creativity
          </p>
        </div>

        <div className={`filter-tabs ${isVisible ? "visible" : ""}`}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-tab ${
                activeFilter === filter.key ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? "visible" : ""}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} className="project-link">
                      <span>View Live</span>
                    </a>
                    <a href={project.github} className="project-link">
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
