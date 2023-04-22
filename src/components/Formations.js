import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Formations extends Component {
  render() {
    return (
      <section style={{ padding: '10vh 20vh 10vh 20vh', textAlign: 'left' }}>
        <div className="shadow p-3 mb-3 bg-white rounded card" >
          <div className="card-body">
            <div className="card-title h5">
              Ingenieurie, Informatique (MIAGE)
            </div>
            <div className="mb-2 text-muted card-subtitle h6">
              Ecole Maroccaine des sciences de l'ingenieur M'arrakech
            </div>
            <p className="card-text">
              2019 - 2024
            </p>
          </div>
        </div>
        <div className="shadow p-3 mb-3 bg-white rounded card" >
          <div className="card-body">
            <div className="card-title h5">
              Baccalaureat
            </div>
            <div className="mb-2 text-muted card-subtitle h6">
              Lycee Moulay Baamran Kelaat Mgouna Tinghir
            </div>
            <p className="card-text">
              2017 - 2019
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Formations;
