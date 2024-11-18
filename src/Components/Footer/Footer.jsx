import React from 'react';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {

    const logo = 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png';

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h2>Shubham</h2>
                    <p>I am a passionate software and web developer focused on delivering high-quality solutions and contributing to innovative projects.</p>
                </div>
                <div className="footer-top-right">
                    <h2>WorkLinks</h2>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/shubham-vaishnav-2399742a3/"><LinkedInIcon/></a></li>
                        <li><a href="https://github.com/Shubhamvaishnav18"><GitHubIcon/></a></li>
                        <li><a href="https://leetcode.com/u/shubhamvaishnav332/" className='leetcode_logo'><img src={logo} alt="" /></a></li>
                        <li><a href="mailto:shubhamvaishnav332@gmail.com"><MailIcon/></a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                <p>&copy; {new Date().getFullYear()} Shubham Vaishnav. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;