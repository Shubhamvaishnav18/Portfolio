import {React} from 'react';
import Hero from '../../Components/Hero/Hero';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        </>
  );
};

export default Home;
