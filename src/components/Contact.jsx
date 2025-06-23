import React, { useState, useRef, useEffect } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from "emailjs-com";
import "./Contact.css";
import { assets } from "../assets/assets";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const contactRef = useRef(null);
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSending(true); // Start loading

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_j1aak58",
        "template_ny7pzx6",
        templateParams,
        "W_maQKP9wSAY45d3f"
      )
      .then(() => {
        toast.success("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        toast.error("Oops! Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsSending(false); // Stop loading whether success or fail
      });
  };

  const contactInfo = [
    {
      icon: <MdMarkEmailUnread />,
      title: "Email",
      value: "syedshahzaibshahkazmi786@gmail.com",
      link: "mailto:syedshahzaibshahkazmi786@gmail.com",
    },
    {
      icon: <CiMobile2 />,
      title: "Phone",
      value: "+92 321 7391140",
      link: "tel:+923217391140",
    },
    {
      icon: <FaLocationCrosshairs />,
      title: "Location",
      value: "Jauharabad Khushab, Punjab, Pakistan",
      link: "https://maps.app.goo.gl/EYY22wGSEFS5vNpg6",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "Contact Me at WhatsApp",
      link: "https://wa.me/+923217391140",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ShahZaib151214",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shah-zaib-08914a282",
      icon: <FaLinkedin />,
    },
    {
      name: "X space(Twitter)",
      url: "https://x.com/shahzaibkazmi70",
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/syedshahzaibkazmi151214",
      icon: <FaInstagramSquare />,
    },
    {
      name: "FaceBook",
      url: "https://www.facebook.com/shahzaib.kazmi.1044/",
      icon: <FaFacebook />,
    },
  ];

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <ToastContainer position="top-right" />
      <div className="contact-container">
        <div className={`contact-header ${isVisible ? "visible" : ""}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together to create something amazing. I'm always excited
            to take on new challenges.
          </p>
        </div>

        <div className={`contact-content ${isVisible ? "visible" : ""}`}>
          <div className="contact-info">
            <div className="info-cards">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="info-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4 className="info-title">{item.title}</h4>
                    <p className="info-value">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h3 className="social-title">Social Links</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    title={social.name}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSending ? "submitting" : ""}`}
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
