import React, { useState, useEffect, useRef } from "react";
import "./Education.css";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef(null);

  const educationData = [
    {
      degree: "Matriculation",
      institution: "Technical Model High School Jauharabad",
      period: "2016 - 2018",
      description:
        "I completed Matriculation from Technical Model High School with Computer Science under Sargodha Board.",
    },
    {
      degree: "FSc Pre Engineering",
      institution: "Superior College Jauharabad",
      period: "2018 - 2020",
      description:
        "I completed Intermediate from Superior College Jauharabad with Math, Physics, Chemistry under Sargodha Board.",
    },
    {
      degree: "BS Computer Science",
      institution: "University of Education Jauharabad",
      period: "2022 - 2026",
      description:
        "I'm final year Student of BS Computer Science Degree will be completed in 2026.",
    },
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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education" ref={educationRef}>
      <div className="education-container">
        <div className={`education-content ${isVisible ? "visible" : ""}`}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and qualifications
          </p>

          <div className="timeline">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="degree-title">{item.degree}</h3>
                    <span className="period">{item.period}</span>
                  </div>
                  <h4 className="institution">{item.institution}</h4>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
