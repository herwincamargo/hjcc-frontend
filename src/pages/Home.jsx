import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SolicitudesCard from "./SolicitudesCard";  // Asegúrate de tener el componente SolicitudesCard
import Paginacion from "./Paginacion"; // Está bien porque está en el mismo folder

const Home = () => {
  const [solicitudesRecientes, setSolicitudesRecientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Estado para la página actual
  const [totalPages, setTotalPages] = useState(1); // Total de páginas

  // Establecer cuántos elementos mostrar por página
  const itemsPerPage = 7;

  useEffect(() => {
    fetch(`https://hjcc-backend.onrender.com/api/solicitudes?page=${page}&limit=${itemsPerPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar las solicitudes");
        }
        return response.json();
      })
      .then((data) => {
        setSolicitudesRecientes(data.solicitudes);
        setTotalPages(data.totalPages); // Asumimos que la API te da el total de páginas
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
      });
  }, [page]);  // Cuando la página cambie, se volverá a ejecutar el useEffect

  const handleCloseModal = () => {
    setShowModal(false); // Función para cerrar el modal
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

                <Link to={`/solicitudes/${solicitud.urlSlug}`} className="btn btn-link d-inline-block">
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Paginación */}
      <Paginacion 
        currentPage={page} 
        totalPages={totalPages} 
        onPageChange={setPage} // Cambiar de página
      />

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
