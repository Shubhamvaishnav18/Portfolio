import React from 'react';
import './Projects.css';
import foodapp from '../../assets/foodapp.png';
import travelingweb from '../../assets/travelingweb.png';
import coffeeshop from '../../assets/coffeeshop.png';
import weatherapp from '../../assets/weatherapp.png';
import simongame from '../../assets/simongame.png';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        
        <div className="project-card">
          <div className="project-image" style={{ backgroundImage: `url(${foodapp})` }}></div>
          <div className="project-content">
            <h3>foodApp</h3>
            <p>A full-stack ( using MERN) food ordering platform with an AI chatbot for seamless browsing, ordering, and user assistance.</p>
            <div className="verfy-links">
            <a href="https://foodapp-frontend-qdcl.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">
              WebLink
            </a>
            <a href="https://github.com/Shubhamvaishnav18/foodApp" target="_blank" rel="noopener noreferrer" className="project-link">
              GithubLink
            </a>
            </div>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-image" style={{ backgroundImage: `url(${travelingweb})` }}></div>
          <div className="project-content">
            <h3>travelingWebsite</h3>
            <p>It is a full-stack (using ejs) travel website that enables users to explore destinations, plan trips, and access travel resources seamlessly.</p>
            <div className="verfy-links">
            <a href="https://wanderlust-8f0r.onrender.com/listings" target="_blank" rel="noopener noreferrer" className="project-link">
              WebLink
            </a>
            <a href="https://github.com/Shubhamvaishnav18/Wanderlust" target="_blank" rel="noopener noreferrer" className="project-link">
              GithubLink
            </a>
            </div>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-image" style={{ backgroundImage: `url(${coffeeshop})` }}></div>
          <div className="project-content">
            <h3>coffeeShop</h3>
            <p>This website (only frontend) is an engaging platform for browsing, ordering, and learning about a wide range of coffee offerings.</p>
            <div className="verfy-links">
            <a href="https://coffee-shop-ten-lac.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
              WebLink
            </a>
            <a href="https://shubhamvaishnav18.github.io/coffee-shop/" target="_blank" rel="noopener noreferrer" className="project-link">
              GithubLink
            </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image" style={{ backgroundImage: `url(${weatherapp})` }}></div>
          <div className="project-content">
            <h3>weatherApp</h3>
            <p>A dynamic Weather App built with React that provides real-time weather updates, forecasts, and location-based insights.</p>
            <div className="verfy-links">
            <a href="https://weather-app-d4lk.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
              WebLink
            </a>
            <a href="https://github.com/Shubhamvaishnav18/Weather-app" target="_blank" rel="noopener noreferrer" className="project-link">
              GithubLink
            </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image" style={{ backgroundImage: `url(${simongame})` }}></div>
          <div className="project-content">
            <h3>simonGame</h3>
            <p>A JavaScript-based Simon Game that tests memory by challenging users to repeat increasingly complex color sequences.</p>
            <div className="verfy-links">
            <a href="https://shubhamvaishnav18.github.io/Simon-game/" target="_blank" rel="noopener noreferrer" className="project-link">
              WebLink
            </a>
            <a href="https://github.com/Shubhamvaishnav18/Simon-game" target="_blank" rel="noopener noreferrer" className="project-link">
              GithubLink
            </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects;
