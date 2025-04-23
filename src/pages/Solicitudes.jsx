import React, { useState, useEffect } from 'react';
import SolicitudesCard from './SolicitudesCard';

const Solicitudes = () => {
  const [solicitudesRecientes, setSolicitudesRecientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado para los filtros
  const [filters, setFilters] = useState({
    categoria: '',
    urgencia: '',
    ciudad: '',
    pais: '',
  });

  // Manejar el cambio en los campos de filtro
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Fetch solicitudes con filtros
  useEffect(() => {
    const query = new URLSearchParams(filters).toString();  // Convertir los filtros en parámetros de consulta
    const fetchSolicitudes = async () => {
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
  }, [filters]);  // Refrescar cuando los filtros cambian

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Solicitudes Recientes</h1>

      {/* Filtros - Disposición Horizontal */}
      <div className="mb-4 row">
        <div className="col-md-3">
          <select
            name="categoria"
            value={filters.categoria}
            onChange={handleFilterChange}
            className="form-select"
          >
            <option value="">Filtrar por categoría</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Mecánico">Mecánico</option>
            <option value="Jardinería">Jardinería</option>
            <option value="Electricista">Electricista</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            name="urgencia"
            value={filters.urgencia}
            onChange={handleFilterChange}
            className="form-select"
          >
            <option value="">Filtrar por urgencia</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            name="ciudad"
            value={filters.ciudad}
            onChange={handleFilterChange}
            className="form-select"
          >
            <option value="">Filtrar por ciudad</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Valencia">Valencia</option>
            <option value="Sevilla">Sevilla</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            name="pais"
            value={filters.pais}
            onChange={handleFilterChange}
            className="form-select"
          >
            <option value="">Filtrar por país</option>
            <option value="España">España</option>
            <option value="México">México</option>
            <option value="Colombia">Colombia</option>
          </select>
        </div>
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
