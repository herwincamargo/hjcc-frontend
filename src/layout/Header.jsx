import React from "react";
import { Link } from "react-router-dom";  // Usamos Link para navegar entre páginas

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">HJCC</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Solicitar Servicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/solicitar-servicio">Lista de Técnicos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Iniciar sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
