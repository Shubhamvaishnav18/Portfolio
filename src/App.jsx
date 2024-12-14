import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./pages/Home/Home"
import Skillspage from "./pages/Skills/Skillspage"
import Projectspage from "./pages/Projects/Projectspage"
import Aboutpage from "./pages/About/Aboutpage"
import Contactpage from "./pages/Contact/Contactpage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skillspage />} />
        <Route path="/projects" element={<Projectspage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
