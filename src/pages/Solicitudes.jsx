import React, { useState, useEffect } from "react";
import SolicitudesCard from "./SolicitudesCard";  // Asegúrate de tener el componente SolicitudesCard

const Solicitudes = () => {
  const [solicitudesRecientes, setSolicitudesRecientes] = useState([]);

  useEffect(() => {
    fetch("https://hjcc-backend.onrender.com/api/solicitudes")
      .then((response) => response.json())
      .then((data) => setSolicitudesRecientes(data))
      .catch((error) => console.error("Error al cargar solicitudes:", error));
  }, []); // Solo cargar al montar el componente

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Solicitudes Recientes</h1>

      {/* Mostrar las solicitudes recientes */}
      <div className="list-group">
        {solicitudesRecientes.length === 0 ? (
          <p>No hay solicitudes recientes disponibles.</p>
        ) : (
          solicitudesRecientes.map((solicitud) => (
            <SolicitudesCard key={solicitud.id} solicitud={solicitud} />
          ))
        )}
      </div>
    </div>
  );
};

export default Solicitudes;
