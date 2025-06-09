import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section id="contact">
    <div className="container">
      <h2>Contact</h2>
      <p>khyati31574@gmail.com</p>
      <div className="icons">
        <a href="https://linkedin.com/in/khyati-jain-a9106824b" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/khyatijain15" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:khyati31574@gmail.com"><FaEnvelope /></a>
      </div>
    </div>
  </section>
);
export default Contact;
