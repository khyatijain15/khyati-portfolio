const certs = [
  { name: 'SQL Basics to Expert – Udemy', link: 'https://www.udemy.com/certificate/UC-f4bc9ef1-e2e4-417c-9172-4592cb587e3a/' }
];

const Certificates = () => (
  <section id="certificates">
    <div className="container">
      <h2>Certificates</h2>
      <ul>
        {certs.map((c, i) => (
          <li key={i}><a href={c.link} target="_blank" rel="noreferrer">{c.name}</a></li>
        ))}
      </ul>
    </div>
  </section>
);
export default Certificates;
