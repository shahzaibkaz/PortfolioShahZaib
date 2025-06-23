import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "./Index.css";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Experience from "../components/Experience";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`portfolio-container ${isLoaded ? "loaded" : ""}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
