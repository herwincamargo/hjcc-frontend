import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obtener el slug de la URL

const SolicitudDetalles = () => {
  const { slug } = useParams();  // Obtener el slug de la URL
  const [solicitud, setSolicitud] = useState(null);
  const [error, setError] = useState(null);
  const [showContact, setShowContact] = useState(false);  // Estado para controlar la visibilidad de la información de contacto

  useEffect(() => {
    // Realizar la solicitud al backend usando el slug
    fetch(`https://hjcc-backend.onrender.com/api/solicitudes/${slug}`)
      .then((response) => response.json())
      .then((data) => setSolicitud(data))
      .catch((error) => setError("Solicitud no encontrada"));
  }, [slug]);  // Se vuelve a ejecutar cada vez que cambie el slug

  const handleContactClick = () => {
    setShowContact(!showContact);  // Alternar la visibilidad de los datos de contacto
  };

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

      {/* Botón para mostrar los detalles de contacto del solicitante */}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleContactClick}>
          {showContact ? "Ocultar contacto" : "Contactar solicitante"}
        </button>
      </div>

      {/* Mostrar los datos del solicitante cuando el botón es clickeado */}
      {showContact && solicitud.contacto && (
        <div className="mt-4">
          <h5>Información de Contacto:</h5>
          <p><strong>Nombre:</strong> {solicitud.contacto.nombre}</p>
          <p><strong>Email:</strong> {solicitud.contacto.email}</p>
          <p><strong>Teléfono:</strong> {solicitud.contacto.telefono}</p>
        </div>
      )}
    </div>
  );
};

export default SolicitudDetalles;
