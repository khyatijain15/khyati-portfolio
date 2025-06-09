const Navbar = () => (
  <header className="navbar">
    <h1>Khyati Jain</h1>
    <nav>
      {['Home', 'About', 'Skills', 'Projects', 'UI/UX', 'Certificates', 'Contact'].map((id) => (
        <a key={id} href={`#${id}`}>{id}</a>
      ))}
      <a href="/Khyati-Jain-Resume.pdf" download>Resume</a>
    </nav>
  </header>
);
export default Navbar;
