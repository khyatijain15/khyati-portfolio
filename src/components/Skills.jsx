const Skills = () => (
  <section id="skills">
    <div className="container">
      <h2>Skills</h2>
      <div className="grid">
        {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Figma', 'C++', 'Git'].map((skill) => (
          <div key={skill} className="card">{skill}</div>
        ))}
      </div>
    </div>
  </section>
);
export default Skills;
