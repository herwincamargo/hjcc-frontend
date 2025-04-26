import React, { useState, useEffect } from 'react';
import SolicitudesCard from './SolicitudesCard';
import Paginacion from './Paginacion'; // Nueva importación

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

  const [suggestions, setSuggestions] = useState({
    categoria: [],
    ciudad: [],
    pais: [],
  });

  const [paginaActual, setPaginaActual] = useState(1);
  const solicitudesPorPagina = 7;

  const fetchCategorias = async (query) => {
    try {
      const response = await fetch(`https://hjcc-backend.onrender.com/api/categorias?search=${query}`);
      const data = await response.json();
      setCategoriasSugeridas(data);
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
    }
  };

  const handleFilterChange = async (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    if (value.length > 2) {
      const response = await fetch(`https://hjcc-backend.onrender.com/api/solicitudes?${name}=${value}`);
      const data = await response.json();

      if (name === 'categoria') {
        const categorias = [...new Set(data.map(s => s.categoria))];
        setSuggestions({ ...suggestions, categoria: categorias });
      } else if (name === 'ciudad') {
        const ciudades = [...new Set(data.map(s => s.ciudad))];
        setSuggestions({ ...suggestions, ciudad: ciudades });
      } else if (name === 'pais') {
        const paises = [...new Set(data.map(s => s.pais))];
        setSuggestions({ ...suggestions, pais: paises });
      }
    } else {
      setSuggestions({ ...suggestions, categoria: [], ciudad: [], pais: [] });
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(filters).toString();
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
  }, [filters]);

  // Nuevo: hacer scroll hacia arriba cada vez que cambia de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [paginaActual]);

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

      {/* Mostrar las solicitudes */}
      <div className="list-group">
        {solicitudesRecientes.length === 0 ? (
          <p className="text-center">No hay solicitudes recientes disponibles.</p>
        ) : (
          solicitudesRecientes
            .slice(
              (paginaActual - 1) * solicitudesPorPagina,
              paginaActual * solicitudesPorPagina
            )
            .map((solicitud) => (
              <SolicitudesCard key={solicitud.id} solicitud={solicitud} />
            ))
        )}
      </div>

      {/* Mostrar la paginación si hay más de 7 solicitudes */}
      {solicitudesRecientes.length > solicitudesPorPagina && (
        <Paginacion
          currentPage={paginaActual}
          totalPages={Math.ceil(solicitudesRecientes.length / solicitudesPorPagina)}
          onPageChange={setPaginaActual}
        />
      )}
    </div>
  );
};

export default Solicitudes;
