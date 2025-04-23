import React, { useState, useEffect } from 'react';
import SolicitudesCard from './SolicitudesCard';  // Asegúrate de tener el componente SolicitudesCard

const Solicitudes = () => {
  const [solicitudesRecientes, setSolicitudesRecientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    categoria: '',
    urgencia: '',
    ciudad: '',
    pais: '',
  });

  useEffect(() => {
    const fetchSolicitudes = async () => {
      const query = new URLSearchParams(filters).toString();  // Convierte los filtros a parámetros de consulta
      try {
        const response = await fetch(`https://hjcc-backend.onrender.com/api/solicitudes?${query}`);
        const data = await response.json();
        setSolicitudesRecientes(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSolicitudes();
  }, [filters]);  // Vuelve a hacer la solicitud cuando los filtros cambien

  // Función para actualizar el estado de los filtros
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Solicitudes Recientes</h1>

      {/* Formulario de Filtro */}
      <div className="mb-4">
        <input
          type="text"
          name="categoria"
          placeholder="Filtrar por categoría"
          value={filters.categoria}
          onChange={handleFilterChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="urgencia"
          placeholder="Filtrar por urgencia"
          value={filters.urgencia}
          onChange={handleFilterChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="ciudad"
          placeholder="Filtrar por ciudad"
          value={filters.ciudad}
          onChange={handleFilterChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="pais"
          placeholder="Filtrar por país"
          value={filters.pais}
          onChange={handleFilterChange}
          className="form-control mb-2"
        />
      </div>

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
