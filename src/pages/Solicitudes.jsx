import React, { useState, useEffect } from "react";
import SolicitudesCard from "./SolicitudesCard";  // Asegúrate de tener el componente SolicitudesCard

const Solicitudes = () => {
  const [solicitudesRecientes, setSolicitudesRecientes] = useState([]);
  const [loading, setLoading] = useState(true);  // Para gestionar el estado de carga
  const [error, setError] = useState(null);      // Para gestionar posibles errores

  useEffect(() => {
    fetch("https://hjcc-backend.onrender.com/api/solicitudes")
      .then((response) => response.json())
      .then((data) => {
        setSolicitudesRecientes(data);
        setLoading(false);  // Cambiar estado a "no cargando" una vez que los datos se reciben
      })
      .catch((error) => {
        setError(error.message);  // Capturar el error y actualizar el estado
        setLoading(false);        // De todos modos cambiar el estado a "no cargando"
      });
  }, []);  // Solo cargar una vez cuando el componente se monta

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Solicitudes Recientes</h1>

      {/* Mostrar mensaje de carga o error */}
      {loading && <p className="text-center">Cargando solicitudes...</p>}
      {error && <p className="text-center text-danger">Error al cargar solicitudes: {error}</p>}

      {/* Mostrar las solicitudes o mensaje si no hay solicitudes */}
      <div className="list-group">
        {solicitudesRecientes.length === 0 ? (
          <p className="text-center">No hay solicitudes recientes disponibles.</p>
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
