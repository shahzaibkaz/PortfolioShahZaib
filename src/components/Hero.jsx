import React, { useState, useEffect } from "react";
import "./Hero.css";
import { assets } from "../assets/assets";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const texts = ["Full Stack Developer", "Creative Problem Solver"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Shah Zaib</span>
          </h1>

          <div className="role-container">
            <span className="role-prefix">I'm a </span>
            <span className="role-text" key={currentText}>
              {texts[currentText]}
            </span>
          </div>

          <p className="hero-description">
            Full-Stack Web Developer skilled in building responsive,
            user-friendly interfaces with HTML, CSS, JavaScript, Bootstrap,
            Tailwind CSS, and React.js. Proficient in PHP and MySQL for
            developing secure, efficient back-end systems. Passionate about
            creating seamless, high-quality solutions that balance performance,
            design, and functionality.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-container">
            <div className="profile-image">
              <img src={assets.profile} className="image-placeholder" />
            </div>
            <div className="skill-badges">
              <span className="badge">React</span>
              <span className="badge">JavaScript</span>
              <span className="badge">CSS</span>
              <span className="badge">Node.js</span>
              <span className="badge">PHP</span>
              <span className="badge">Express js</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
