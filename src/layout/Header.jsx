import React from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router para redirigir

const Header = () => {
  const closeMenu = () => {
    // Cierra el menú cuando se hace clic en un enlace
    const navbarToggler = document.getElementById("navbarNav");
    const bsCollapse = new bootstrap.Collapse(navbarToggler, {
      toggle: false,
    });
    bsCollapse.hide(); // Cerrar el menú de la navbar
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={closeMenu}
                >
                  <i className="fas fa-home"></i> Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/solicitar-servicio"
                  onClick={closeMenu}
                >
                  <i className="fas fa-plus-circle"></i> Solicitar Servicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/solicitudes"
                  onClick={closeMenu}
                >
                  <i className="fas fa-list"></i> Solicitudes
                </Link>
              </li>
              {/* 🔥 Aquí cambiamos el enlace */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/como-funciona"
                  onClick={closeMenu}
                >
                  <i className="fas fa-question-circle"></i> ¿Cómo Funciona?
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://t.me/+KcLGOEqZaElhZmQx"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <i className="fab fa-telegram-plane"></i> Unirme a Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
