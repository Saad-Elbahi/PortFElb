import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectDetail() {

  const projets = [
    {
      title: "hearth-disease-prediction ",
      description: "Machine Learning helps in predicting the Heart diseases, and the predictions made are quite accurate.",
      Link:"https://github.com/Saad-Elbahi/hearth-disease-prediction.git"

    },
    {
      title: "Emsi Salary Management",
      description: "using C# with Framework Guna.",
      Link:"https://github.com/Saad-Elbahi/Emsi_Management_System.git"
    },
    {
      title: "GAINAIR Website",
      description: "using php with Mysql.",
      Link:"https://github.com/Saad-Elbahi/GAINAIR.git"
    }
  ];

  return (
    <div style={{ paddingTop: '5vh' }}>
      <section className="row justify-content-center" style={{ padding: '10vh 10vh 10vh 10vh' }}>
        {projets.map((projet, index) => (
          <div key={index} className="col-sm-6 col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{projet.title}</h5>
                <p className="card-text">{projet.description}</p>
                <a href={projet.Link} className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default ProjectDetail;
