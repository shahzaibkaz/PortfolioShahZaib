import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import { PiReadCvLogoFill } from "react-icons/pi";
import { toast, ToastContainer } from "react-toastify";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ATS_ShahZaibCV.pdf";
    link.download = "ShahZaib_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Alert or toast
    toast("Download started! Check your browser’s download section.");
  };
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const skills = [
    { name: "HTML", level: 90, color: "#f7df1e" },
    { name: "CSS", level: 90, color: "#61dafb" },
    { name: "JAVASCRIPT", level: 80, color: "#1572b6" },
    { name: "REACT JS", level: 70, color: "#47a248" },
    { name: "PHP", level: 60, color: "#f7df1e" },
    { name: "Node.js", level: 70, color: "#61dafb" },
    { name: "C++", level: 75, color: "#1572b6" },
    { name: "KOTLIN", level: 60, color: "#1572b6" },
    { name: "EXPRESS.js", level: 60, color: "#47a248" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <ToastContainer position="top-left" />
      <div className="about-container">
        <div className={`about-content ${isVisible ? "visible" : ""}`}>
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I'm a passionate Web Developer & Designer who loves turning ideas
              into beautiful, functional websites. I focus on writing clean code
              and crafting smooth, user-friendly experiences using modern web
              technologies. I have over 3 years of hands-on experience, I've
              worked on everything from simple landing pages to full-scale web
              applications — always with attention to detail and performance.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              {/* <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div> */}
            </div>
            <div className="stats-container">
              <button
                onClick={handleDownload}
                className="stat-item"
                style={{ cursor: "pointer" }}
              >
                <p className="stat-number">{<PiReadCvLogoFill />}</p>
                <span className="stat-label">My Resume</span>{" "}
              </button>
            </div>
          </div>

          <div className="skills-container">
            <h3 className="skills-title">My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
