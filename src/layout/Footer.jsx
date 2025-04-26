import React from "react";
import { Link } from "react-router-dom"; // Importa Link para navegación interna

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p className="mb-0">
        &copy; 2025 HJCC Smart Services. Todos los derechos reservados.{" "}
        <a
          href="https://www.hjcc.com.co"
          className="text-white text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.hjcc.com.co
        </a>{" "}
        |{" "}
        <Link to="/disclaimer" className="text-white text-decoration-none">
          Aviso Legal
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
