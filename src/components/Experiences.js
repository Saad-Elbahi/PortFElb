import 'bootstrap/dist/css/bootstrap.min.css';

function Experience() {
  const experiences = [
    {
      company: 'GAINAIR, CASABLANCA',
      position: 'Stagiaire',
      technologies: ['PHP', 'Mysql', 'Github'],
      date: 'juillet 2022 - aout 2022'
    },
    {
      company: "Aremac-International",
      position: 'Stagiaire',
      technologies: [ 'JEE', 'Programmation multiplateforme'],
      date: 'september 2022 - janv 2023'
    }
  ];

  const experienceCards = experiences.map((experience, index) => (
    <div key={index} className="shadow p-3 mb-3 bg-white rounded card">
      <div className="p-card-body">
        <div
          className="p-card-title"
          style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}
        >
          {experience.company}
        </div>
        <div className="p-card-subtitle">{experience.position}</div>
        <div className="p-card-content">
          {experience.technologies && (
            <div>
              <h5>
                <br />
                Technologies :
              </h5>
              <ul>
                {experience.technologies.map((technology, index) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="p-card-footer">{experience.date}</div>
      </div>
    </div>
  ));

  return (
    <section style={{ padding: '10vh 20vh 10vh 20vh', textAlign: 'left' }}>
      {experienceCards}
    </section>
  );
}

export default Experience;
