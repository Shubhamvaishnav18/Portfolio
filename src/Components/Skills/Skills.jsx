import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-card">
          <i className="skill-icon devicon-java-plain colored"></i>
          <h3>Languages & DSA</h3>
          <ul>
            <li>Cpp</li>
            <li>Java</li>
            <li>Python</li>
            <li>OOPS</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
          </ul>
        </div>
        
        <div className="skills-card">
          <i className="skill-icon devicon-html5-plain colored"></i>
          <h3>Web Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>EJS</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
        
        <div className="skills-card">
          <i className="skill-icon devicon-mongodb-plain colored"></i>
          <h3>Database & DevTools</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySql</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>AWS</li>
            <li>Postman</li>
            <li>Canva</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
