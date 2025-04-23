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

  // Estado para las sugerencias
  const [suggestions, setSuggestions] = useState({
    categoria: [],
    urgencia: ['Alta', 'Media', 'Baja'],
    ciudad: [],
    pais: ['España', 'México', 'Colombia'],
  });

  // Función para manejar cambios en los filtros
  const handleFilterChange = async (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    // Si el valor cambia, buscaremos sugerencias
    if (value.length > 2) {
      // Aquí pueden ir los resultados predictivos
      const response = await fetch(`https://hjcc-backend.onrender.com/api/solicitudes?${name}=${value}`);
      const data = await response.json();

      // Aquí creamos las sugerencias para la categoría o ciudad dependiendo del campo
      if (name === 'categoria') {
        const categorias = [...new Set(data.map(s => s.categoria))];  // Filtramos duplicados
        setSuggestions({ ...suggestions, categoria: categorias });
      } else if (name === 'ciudad') {
        const ciudades = [...new Set(data.map(s => s.ciudad))];
        setSuggestions({ ...suggestions, ciudad: ciudades });
      }
    } else {
      // Limpiar las sugerencias cuando el texto es corto
      setSuggestions({ ...suggestions, categoria: [], ciudad: [] });
    }
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

      {/* Filtros */}
      <div className="mb-4 row">
        <div className="col-md-3">
          <input
            name="categoria"
            value={filters.categoria}
            onChange={handleFilterChange}
            className="form-control"
            placeholder="Filtrar por categoría"
            list="categoria-list"
          />
          <datalist id="categoria-list">
            {suggestions.categoria.map((cat, index) => (
              <option key={index} value={cat} />
            ))}
          </datalist>
        </div>

        <div className="col-md-3">
          <input
            name="urgencia"
            value={filters.urgencia}
            onChange={handleFilterChange}
            className="form-control"
            placeholder="Filtrar por urgencia"
            list="urgencia-list"
          />
          <datalist id="urgencia-list">
            {suggestions.urgencia.map((urg, index) => (
              <option key={index} value={urg} />
            ))}
          </datalist>
        </div>

        <div className="col-md-3">
          <input
            name="ciudad"
            value={filters.ciudad}
            onChange={handleFilterChange}
            className="form-control"
            placeholder="Filtrar por ciudad"
            list="ciudad-list"
          />
          <datalist id="ciudad-list">
            {suggestions.ciudad.map((ciudad, index) => (
              <option key={index} value={ciudad} />
            ))}
          </datalist>
        </div>

        <div className="col-md-3">
          <input
            name="pais"
            value={filters.pais}
            onChange={handleFilterChange}
            className="form-control"
            placeholder="Filtrar por país"
            list="pais-list"
          />
          <datalist id="pais-list">
            {suggestions.pais.map((pais, index) => (
              <option key={index} value={pais} />
            ))}
          </datalist>
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
