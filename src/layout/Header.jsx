import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el clic en el botón del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en una opción
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu} // Cambia el estado del menú cuando se hace clic
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={closeMenu}>
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/solicitar-servicio" onClick={closeMenu}>
                  <i className="fas fa-plus-circle"></i> Solicitar Servicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/solicitudes" onClick={closeMenu}>
                  <i className="fas fa-list"></i> Solicitudes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registro-profesional" onClick={closeMenu}>
                  <i className="fas fa-briefcase"></i> Trabaja con Nosotros
                </Link>
              </li>
            </ul>
            <div className="ms-3">
              <a
                href="https://t.me/+KcLGOEqZaElhZmQx"
                target="_blank"
                rel="noopener noreferrer"
                className="bbtn btn-telegram"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderColor: 'black',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
              >
                <i className="fab fa-telegram-plane"></i> Unirme a Telegram
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
