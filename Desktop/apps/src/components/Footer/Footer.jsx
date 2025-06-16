import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          <h6 className="fw-bold mb-3">LIENS UTILES</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="text-decoration-none text-muted">Accueil</a></li>
              <li><a href="#" className="text-decoration-none text-muted">À propos</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Nos services</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Contact</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Nos produits</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Carrière</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">SECTEURS D'ACTIVITÉS</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Entreprises Maritimes</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Logistique et Transport</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Shipping en Liner</a></li>
            </ul>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-start align-items-md-end">
            <div className="mb-2 text-center d-flex ">
              <a href="#" className="me-2 text-decoration-none text-muted"><FaFacebook size={24} /></a>
              <a href="#" className="me-2 text-decoration-none text-muted"><FaLinkedin size={24} /></a>
              <a href="#" className="text-decoration-none text-muted"><FaWhatsapp size={24} /></a>
            </div>
            <button className="btn btn-outline-primary rounded-pill">Contactez-nous</button>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <img
              src={logo} // Replace with the actual URL of your logo
              alt="Softronic Innoving Logo"
              className="img-fluid"
              style={{ width: '150px', height: '150px' }} // Adjust the size as needed
            />
          </div>
        </div>
      </div>
      <div className="bg-dark text-light py-3 mt-4 text-center">
        copyright © {new Date().getFullYear()} Softronic Innoving. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;