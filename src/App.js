
import React from "react";
import './App.css';
import {Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Formations from './components/Formations';
import Projets from "./components/Projets";
import Experiences from "./components/Experiences";
import { Card } from 'primereact/card';

import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Profilepic from "./components/Profilepic";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function App() {
  return (
    <BrowserRouter>
      <div>
      <header className="header">
          <Profilepic />
          <h1>SAAD ELBAHI</h1>
          <h2>Etudiant Ingénieur en 4eme annee IIR</h2>
        </header>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experiences" className="nav-link">
                Expériences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link">
                Projets
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/project" element={<Projets />} />
          </Routes>
          <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://web.facebook.com/profile.php?id=100004720546851'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/saadelbahi3'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/saadel.5/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/saad-elbahi-8b4b4a233/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/Saad-Elbahi'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'>
          elbahi.saademsi.1@gmail.com
        </a>
      </div>
    </MDBFooter>
        </div>
    </BrowserRouter>
  );
}
function Accueil() {
  return (
    <section className="section">
      <Card title="SAAD ELBAHI">
        <p className="m-0">
        I am a computer engineering student with a passion for cutting edge technologies and their impact on the world. I have significant experience in software development, design and analysis, project management and programming skills. I am proficient in several programming 
        </p>
        <p className="m-0">
        As an aspiring professional, I am aware of the importance of managerial skills such as marketing and quality management, as well as cross-functional skills such as teamwork, active listening, time management, creativity and initiative. I am convinced that my technical skills and my transversal skills will allow me to contribute significantly to any project I join in the future.
        </p>
      </Card>
    </section>
  );
}

export default App;
