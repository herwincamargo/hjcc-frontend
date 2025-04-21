import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obtener el slug de la URL

const SolicitudDetalles = () => {
  const { slug } = useParams();  // Obtener el slug de la URL
  const [solicitud, setSolicitud] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realizar la solicitud al backend usando el slug
    fetch(`https://hjcc-backend.onrender.com/api/solicitudes/${slug}`)
      .then((response) => response.json())
      .then((data) => setSolicitud(data))
      .catch((error) => setError("Solicitud no encontrada"));
  }, [slug]);  // Se vuelve a ejecutar cada vez que cambie el slug

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  if (!solicitud) {
    return <p className="text-center">Cargando detalles...</p>;
  }

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">{solicitud.titulo}</h1>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Descripción</h5>
          <p className="card-text">{solicitud.descripcion}</p>
          <p className="card-text">
            <strong>Urgencia:</strong> {solicitud.urgencia}
          </p>
          <p className="card-text">
            <strong>Ciudad:</strong> {solicitud.ciudad}
          </p>
          <p className="card-text">
            <strong>País:</strong> {solicitud.pais}
          </p>
          <p className="card-text">
            <strong>Fecha:</strong> {new Date(solicitud.fecha).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Aquí puedes agregar una sección para contactar al solicitante */}
      <div className="text-center mt-4">
        <button className="btn btn-primary">Contactar solicitante</button>
      </div>
    </div>
  );
};

export default SolicitudDetalles;
