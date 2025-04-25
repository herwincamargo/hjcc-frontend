import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router para redirigir
import SolicitudesCard from "./SolicitudesCard";  // Asegúrate de tener el componente SolicitudesCard

const Home = () => {
  const [solicitudesRecientes, setSolicitudesRecientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(true); // Estado para mostrar el modal flotante

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
    setShowModal(false); // Función para cerrar el modal
  };

  return (
    <div className="container py-5">
      {/* Cuadro flotante */}
      {showModal && (
        <div className="floating-box">
          <div className="floating-box-content">
            <button onClick={handleCloseModal} className="close-btn">×</button>
            <h4>¿Prestas algún servicio profesional?</h4>
            <p>¡Alguien puede estar necesitando tu ayuda! Únete a nuestro canal de Telegram y recibe todas las solicitudes de manera automatizada.</p>
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

      {/* Título y solicitud de servicio */}
      <h1 className="display-4 text-center mb-4">Solicitudes Recientes</h1>

      {cargando ? (
        <p className="text-center">Cargando solicitudes...</p>
      ) : error ? (
        <p className="text-center text-danger">Error: {error}</p>
      ) : solicitudesRecientes.length === 0 ? (
        <p className="text-center">No hay solicitudes recientes disponibles.</p>
      ) : (
        <div className="list-group">
          {solicitudesRecientes.map((solicitud) => (
            <div key={solicitud.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{solicitud.titulo}</h5>
                <p className="card-text">{solicitud.descripcion}</p>
                <p className="card-text">
                  <small className="text-muted">Urgencia: {solicitud.urgencia}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">Ciudad: {solicitud.ciudad}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">País: {solicitud.pais}</small>
                </p>

                <Link to={`/solicitudes/${solicitud.urlSlug}`} className="btn btn-link">
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cta-container text-center mt-5 py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <h3>¿Necesitas servicio especializado?</h3>
        <p>¡Solicítalo ahora y recibe ayuda rápida!</p>
        <Link to="/solicitar-servicio" className="btn btn-primary">Solicitar Servicio</Link>
      </div>
    </div>
  );
};

export default Home;
