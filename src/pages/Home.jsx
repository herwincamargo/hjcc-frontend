import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router para redirigir

const Home = () => {
  const [solicitudesRecientes, setSolicitudesRecientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://hjcc-backend.onrender.com/api/solicitudes")
      .then((response) => response.json())
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

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Solicitudes Recientes</h1>

      {error && <p className="text-center text-danger">{error}</p>}

      {cargando ? (
        <p className="text-center">Cargando solicitudes...</p>
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

                {/* Enlace para ver los detalles de la solicitud */}
                <Link to={`/solicitudes/${solicitud.urlSlug}`} className="btn btn-link">
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CTA - "Trabaja con Nosotros" */}
      <div className="cta-container text-center mt-5 py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <h3>¿Eres un especialista en algún sector?</h3>
        <p>¡Alguien puede necesitar de tus servicios! Regístrate ahora y empieza a ayudar a quienes te necesitan.</p>
        <a href="/registro-profesional" className="cta-button">Trabaja con Nosotros</a>
      </div>
    </div>
  );
};

export default Home;
