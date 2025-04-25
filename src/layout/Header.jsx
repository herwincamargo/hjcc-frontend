import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            HJCC - Smart Services
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/solicitar-servicio">
                  <i className="fas fa-plus-circle"></i> Solicitar Servicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/solicitudes">
                  <i className="fas fa-list"></i> Solicitudes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registro-profesional">
                  <i className="fas fa-briefcase"></i> Trabaja con Nosotros
                </Link>
              </li>
            </ul>
            <div className="ms-3">
              <a
                href="https://t.me/+KcLGOEqZaElhZmQx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info text-white"
              >
                <i className="fas fa-users"></i> Unirme a la Comunidad
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
