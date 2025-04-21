import React from 'react';
import { Link } from 'react-router-dom';  // Importa Link para crear enlaces dentro de la aplicación

const SolicitudesCard = ({ solicitud }) => {
  return (
    <div className="card mb-3">
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

        {/* Link para ver los detalles de la solicitud */}
        <Link to={`/solicitudes/${solicitud.urlSlug}`} className="btn btn-link">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default SolicitudesCard;
