import './Hero.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();
    const logo = 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png';
    return (
        <div className='hero'>
            <h1><span>Hi, I'm Shubham Vaishnav,</span> full stack developer.</h1>
            <p>I am a passionate software and web developer focused on delivering high-quality solutions and contributing to 
            innovative projects.</p>
            <div className="icons">
                <ul>
                    <li><a href="https://www.linkedin.com/in/shubham-vaishnav-2399742a3/"><LinkedInIcon/></a></li>
                    <li><a href="https://github.com/Shubhamvaishnav18"><GitHubIcon/></a></li>
                    <li><a href="https://leetcode.com/u/shubhamvaishnav332/" className='leetcode_logo'><img src={logo} alt="" /></a></li>
                    <li><a href="mailto:shubhamvaishnav332@gmail.com"><MailIcon/></a></li>
                </ul>
            </div>
            <div className="hire-Me" onClick={()=>navigate("/contact")}>HireMe</div>
        </div>
    )
}

export default Hero