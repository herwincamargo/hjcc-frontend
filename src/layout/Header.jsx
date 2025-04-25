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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/solicitar-servicio">
                  Solicitar Servicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/solicitudes">
                  Solicitudes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registro-profesional">
                  Trabaja con Nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mensaje de Telegram debajo del header pero dentro del mismo contenedor */}
      <div className="telegram-message-container">
        <p className="telegram-message">
          ¡Únete a nuestro canal de Telegram y recibe notificaciones de nuevas solicitudes!{" "}
          <a
            href="https://t.me/+KcLGOEqZaElhZmQx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Haz clic aquí para unirte
          </a>
        </p>
      </div>
    </>
  );
};

export default Header;
