import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paginacion from './Paginacion'; // Importamos la paginación
import SolicitudesCard from "./SolicitudesCard";

const Home = () => {
  const [solicitudesRecientes, setSolicitudesRecientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const solicitudesPorPagina = 7; // Mostrar 7 solicitudes por página

  useEffect(() => {
    fetch("https://hjcc-backend.onrender.com/api/solicitudes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar las solicitudes");
        }
        return response.json();
      })
      .then((data) => {
        data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        setSolicitudesRecientes(data);
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
      });
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Lógica de paginación
  const indexUltimaSolicitud = currentPage * solicitudesPorPagina;
  const indexPrimeraSolicitud = indexUltimaSolicitud - solicitudesPorPagina;
  const solicitudesActuales = solicitudesRecientes.slice(indexPrimeraSolicitud, indexUltimaSolicitud);
  const totalPages = Math.ceil(solicitudesRecientes.length / solicitudesPorPagina);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Subir suavemente al top
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Solicitudes Recientes</h1>

      {cargando ? (
        <p className="text-center">Cargando solicitudes...</p>
      ) : error ? (
        <p className="text-center text-danger">Error: {error}</p>
      ) : solicitudesRecientes.length === 0 ? (
        <p className="text-center">No hay solicitudes recientes disponibles.</p>
      ) : (
        <>
          <div className="list-group">
            {solicitudesActuales.map((solicitud) => (
              <SolicitudesCard key={solicitud.id} solicitud={solicitud} />
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <Paginacion
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}

      {/* CTA de solicitar servicio */}
      <div className="cta-container text-center mt-5 py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <h3>¿Necesitas servicio especializado?</h3>
        <p>¡Solicítalo ahora y recibe ayuda rápida!</p>
        <Link to="/solicitar-servicio" className="btn btn-primary">Solicitar Servicio</Link>
      </div>

      {/* Cuadro flotante */}
      {showModal && (
        <div className="floating-box">
          <div className="floating-box-content">
            <button onClick={handleCloseModal} className="close-btn">×</button>
            <h4>¿Prestas algún servicio profesional?</h4>
            <p>¡Alguien puede estar necesitando tu ayuda! Únete a nuestro canal de Telegram y recibe todas las solicitudes en tu teléfono.</p>
            <a
              href="https://t.me/+KcLGOEqZaElhZmQx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-telegram"
            >
              <i className="fab fa-telegram-plane"></i> Unirme al Canal
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
