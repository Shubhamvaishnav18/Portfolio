import React from 'react';
import './About.css'
import profile_img from '../../assets/profile_img.jpeg';

const About = () => {
    return (
        <div className="about about-phn">
            <div className="about-title">
                <h2>AboutMe</h2>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p><span>I am a full stack developer</span> with expertise in architecting comprehensive web applications from inception to deployment. I manage both frontend and backend development, delivering responsive, intuitive user interfaces alongside robust, scalable server-side functionality.</p>
                        <p>I integrate databases, APIs, and tools to deliver seamless, high-performance experiences, turning concepts into polished digital solutions with expertise in various languages and frameworks.</p>
                        <p>I work with the MERN stack, utilizing MongoDB for efficient database management, Express.js for backend routing, React for building dynamic user interfaces, and Node.js for server-side logic.</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1A3SWeys4OVfqcY2rjyHVqeBeqTkR4zSZ/view?usp=sharing" className="resume">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About;
