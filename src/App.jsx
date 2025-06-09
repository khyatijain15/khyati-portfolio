import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import UIUX from './components/UIUX';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';    
function App() {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '120px' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <UIUX />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
