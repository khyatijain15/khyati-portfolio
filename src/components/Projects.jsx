const projects = [
  {
    title: 'Sage – Food Ordering Website',
    tech: 'React, Tailwind',
    link: 'https://sage-food-website.netlify.app/',
  },
  {
    title: 'HN College Website',
    tech: 'HTML, CSS, JavaScript',
    
  },
];

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2>Projects</h2>
     <div className="grid">
  {projects.map((p, i) => (
    <div key={i} className="card">
      <h3>{p.title}</h3>
      <p>{p.tech}</p>
      {p.link && (
        <a href={p.link} target="_blank" rel="noreferrer">Live Demo</a>
      )}
    </div>
  ))}
</div>
    </div>
  </section>
);
export default Projects;
