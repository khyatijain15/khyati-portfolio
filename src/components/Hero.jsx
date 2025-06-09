import profile from '../assets/khyati.jpg';

const Hero = () => (
  <section id="home" className="hero">
    <img src={profile} alt="Khyati Jain" />
    <h2>Frontend Developer & UI/UX Designer</h2>
    <p>Design with purpose, code with clarity.</p>
    <a href="#projects" className="button">View Projects</a>
  </section>
);
export default Hero;
