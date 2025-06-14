import React, { useRef } from 'react';
import './Navbar.css'
import { NavLink, useNavigate } from "react-router-dom";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

    const navigate = useNavigate();
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }

    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }

    return (
        <div className="navbar">
            <h2>Shubham</h2>
            <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/skills'>Skills</NavLink></li>
                <li><NavLink to='/experience'>Experience</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/about'>AboutMe</NavLink></li>
                <li><NavLink to='/contact'>ContactMe</NavLink></li>
            </ul>
            <div className="hireMe" onClick={()=>navigate("/contact")}>HireMe</div>
        </div>
    )
}

export default Navbar
