import React from "react";
import "./Experience.css";
import { FiExternalLink } from "react-icons/fi"; // Import the external link icon

const experiences = [
  {
    company: "Bizowl",
    role: "Full Stack Developer",
    duration: "Mar 2025 - Present",
    location: "Delhi, India • Remote",
    certificate: "https://drive.google.com/file/d/1vsNnnaSi6GyUDys93DMjjnysjfZ2P2er/view?usp=sharing",
    description:
      "Developed a real-time bidding system with dynamic client-partner interactions, while building scalable full-stack applications using the MERN stack—integrating secure payment systems with automated partner payout workflows.",
  },
  {
    company: "Celebal Technologies",
    role: "React Js Intern",
    duration: "Jun 2025 - Present",
    location: "Jaipur, Rajasthan, India • Remote",
    certificate: "https://drive.google.com/file/d/13eCzD6A5_dkfrW4TsWqtLDsX1cLeP5SE/view?usp=sharing",
    description:
      "Built weekly projects like form validation, a to-do app, and a Spotify clone, while currently working on a MERN stack e-commerce website as a major project.",
  },
  {
    company: "iConnect",
    role: "Website & Data Management Coordinator",
    duration: "Dec 2024 - May 2025",
    location: "Hisar, Haryana, India • On-Site",
    certificate: "https://drive.google.com/file/d/1p18iuF4Sr1K-9fIJ38UoJ1yz9iwMvBzd/view?usp=sharing",
    description:
      "Create organization websites, ensured data integrity, managed updates, and coordinated with cross-functional teams for efficient data flow.",
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-title-container">
        <h2 className="experience-title">Experience</h2>
      </div>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{exp.company}</h3>
              <span className="experience-duration">{exp.duration}</span>
            </div>
            <h4 className="experience-role">{exp.role}</h4>
            <p className="experience-location">{exp.location}</p>
            <a
              className="experience-certificate"
              href={exp.certificate}
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate <FiExternalLink className="link-icon" />
            </a>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
