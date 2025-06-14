import React from 'react';
import './About.css'
import profile_img from '../../assets/profile_img.jpeg';

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h2>AboutMe</h2>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p><span>I am a full stack developer</span> with 2+ years of professional experience, I specialize in architecting comprehensive web applications from inception to deployment. I manage both frontend and backend development, delivering responsive, intuitive user interfaces alongside robust, scalable server-side functionality.</p>
                        <p>I'm currently working full-time as a Full Stack Developer at Bizowl while also completing a part-time React JS internship at Celebal Technologies.</p>
                        <p>I work with the MERN stack, utilizing MongoDB for efficient database management, Express.js for backend routing, React for building dynamic user interfaces, and Node.js for server-side logic.</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1A3SWeys4OVfqcY2rjyHVqeBeqTkR4zSZ/view?usp=sharing" className="resume">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About;
