import React, { useState, useEffect, useRef } from "react";
import "./Experience.css";
import { assets } from "../assets/assets";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const experienceRef = useRef(null);

  const experiences = [
    {
      title: "Front End Development",
      company: "Social Swiral",
      duration: "Oct 2024, Nov 2024",
      location: "Jauharabad , Khushab",
      description:
        "During my two-month internship as a Front-End Development Intern at Social Swrial Company, I focused on creating seamless user experiences by ensuring cross-browser compatibility and optimizing website performance. My work involved utilizing technologies like HTML, CSS, JavaScript, and React.js to develop and enhance interactive web components, including forms, animations, and navigation systems. Additionally, I participated in code reviews, troubleshooting, and debugging to maintain high code quality and functionality. I also gained hands-on experience with version control tools like Git and worked in an Agile environment to efficiently deliver tasks and meet project goals. This experience helped me strengthen my technical skills while contributing to real-world projects.",
      technologies: ["React js", "html", "css", "tailwind css", " javascript"],
      image: assets.intern,
      achievements: ["Gained Experience by creating real time projects"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) observer.observe(experienceRef.current);
    return () => observer.disconnect();
  }, []);

  const closeModal = () => setModalImage(null);

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="experience-container">
        <div className={`experience-content ${isVisible ? "visible" : ""}`}>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My journey in software development</p>

          <div className="experience-timeline">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="experience-card"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="timeline-dot"></div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-row">
                      <span className="company-name">{exp.company}</span>
                      <span className="duration">{exp.duration}</span>
                    </div>
                    <span className="location">{exp.location}</span>
                  </div>
                  <div className="card-body">
                    <p className="job-description">{exp.description}</p>
                    <div
                      className="experience-image-container"
                      onClick={() => setModalImage(exp.image)}
                      title="Click to view workspace"
                    >
                      <img
                        src={exp.image}
                        alt={`${exp.title} at ${exp.company}`}
                        className="experience-image"
                      />
                      <div className="image-overlay">
                        <span>Click to enlarge</span>
                      </div>
                    </div>
                    <div className="achievements">
                      <h5>Key Achievements</h5>
                      <ul>
                        {exp.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="technologies">
                      <h5>Technologies Used</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {modalImage && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal}>
                  &times;
                </button>
                <img src={modalImage} alt="Workspace" className="modal-image" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
