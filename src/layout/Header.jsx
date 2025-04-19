import React from "react";
import { Link } from "react-router-dom";  // Usamos Link para navegación sin recargar la página

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">HJCC</Link> {/* Nombre del sitio */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/solicitar-servicio">Solicitar Servicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/solicitudes">Solicitudes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profesionales">Profesionales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/iniciar-sesion">Iniciar Sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
