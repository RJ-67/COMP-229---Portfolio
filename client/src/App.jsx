import React, { useState } from "react";
import "./App.css";

import profilePic from "./assets/headshot.jpg";
import resumePdf from "./assets/resume.pdf";
import medInterpreter from "./assets/project1.jpeg";
import game from "./assets/project2.jpeg";
import eventBooking from "./assets/project3.png";
import webDev from "./assets/webdev.jpg";
import programs from "./assets/programs.png";
import gameDev from "./assets/gamedev.png";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home navigate={setPage} />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      case "services":
        return <Services />;
      case "contact":
        return <Contact navigate={setPage} />;
      default:
        return <Home navigate={setPage} />;
    }
  };

  return (
    <div className="app-container">
      <Header navigate={setPage} />
      <div className="page-content">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

/* HEADER COMPONENT */
function Header({ navigate }) {
  return (
    <div>
      <header className="header">
        <div className="logo">RJ</div>
        <h1>My Portfolio</h1>
      </header>
      <nav className="navbar">
        <button onClick={() => navigate("home")}>Home</button>
        <button onClick={() => navigate("about")}>About Me</button>
        <button onClick={() => navigate("projects")}>Projects</button>
        <button onClick={() => navigate("education")}>Education</button>
        <button onClick={() => navigate("services")}>Services</button>
        <button onClick={() => navigate("contact")}>Contact</button>
      </nav>
    </div>
  );
}

/* HOME COMPONENT */
function Home({ navigate }) {
  return (
    <div className="home">
      <div className="welcome-section">
        <h1>Welcome to My Portfolio</h1>
        <p className="mission">
          I’m an aspiring software engineer passionate about learning, building,
          and solving real-world problems through code. My mission is to grow
          as a developer and create innovative applications that make a difference.
        </p>
        <button className="about-button" onClick={() => navigate("about")}>
          Learn More About Me
        </button>
      </div>
    </div>
  );
}

/* ABOUT COMPONENT */
function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <img src={profilePic} alt="My headshot" className="profile-pic" />
        <div className="about-text">
          <h2>Ron Joshua Concepcion</h2>
          <p>
            I’m an aspiring software engineer passionate about coding, learning,
            and building applications that solve real-world problems. I’m currently
            working on improving my skills in front-end and back-end technologies,
            and I’m excited to contribute to innovative projects in the future.
          </p>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="resume-link">
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

/* PROJECTS COMPONENT */
function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <Project title="Medical Interpreter" img={medInterpreter} role="Aspiring Full Stack Developer"
               desc="Developing a real-time medical interpretation application to bridge language barriers between patients and healthcare providers." />
      <Project title="Game Project" img={game} role="Aspiring Game Developer"
               desc="Designing and developing an interactive game that enhances problem-solving and programming skills, while creating a fun and engaging experience." />
      <Project title="Event Booking System" img={eventBooking} role="Aspiring Backend Developer"
               desc="Building a comprehensive platform for event creation, ticketing, and management to streamline booking processes for organizers and attendees." />
    </div>
  );
}

function Project({ title, img, role, desc }) {
  return (
    <div className="project">
      <img src={img} alt={title} className="project-pic" />
      <h2>{title}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p>{desc}</p>
    </div>
  );
}

/* EDUCATION COMPONENT */
function Education() {
  return (
    <div className="education">
      <h1>My Education</h1>
      <div className="edu-item">
        <h2>Centennial College</h2>
        <p>Software Engineering Technician Diploma (In Progress)</p>
        <p className="edu-date">2024 - 2026</p>
      </div>
      <div className="edu-item">
        <h2>St. John Paul II</h2>
        <p>Ontario Secondary School Diploma</p>
        <p className="edu-date">Graduated: 2021</p>
      </div>
    </div>
  );
}

/* SERVICES COMPONENT */
function Services() {
  return (
    <div className="services">
      <h1>My Services</h1>
      <Service title="Web Development" img={webDev} desc="I create responsive, user-friendly websites using modern technologies such as HTML, CSS, JavaScript, and React." />
      <Service title="General Programming" img={programs} desc="Experienced in problem solving and building programs in languages like Java, Python, and C# to solve real-world challenges." />
      <Service title="Game Development" img={gameDev} desc="Aspiring game developer, learning to design and build interactive games using tools such as Unity, C#, and JavaScript game libraries." />
    </div>
  );
}

function Service({ title, img, desc }) {
  return (
    <div className="service-card">
      <img src={img} alt={title} className="service-pic" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

/* CONTACT COMPONENT */
function Contact({ navigate }) {
  const [formData, setFormData] = React.useState({
    firstName: "", lastName: "", contactNumber: "", email: "", message: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("home");
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p><strong>Email:</strong> ronjoshua.c03@gmail.com</p>
        <p><strong>Phone:</strong> (437) 328-4199</p>
        <p><strong>GitHub:</strong> <a href="https://github.com" target="_blank" rel="noreferrer">github.com/RJ-67</a></p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Enter your message..." value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

/* FOOTER COMPONENT */
function Footer() {
  return (
    <footer className="footer">
      <p>© Ron Joshua Concepcion - Built with React</p>
    </footer>
  );
}
