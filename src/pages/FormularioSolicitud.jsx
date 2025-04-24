import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioSolicitud = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [urgencia, setUrgencia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [nombre, setNombre] = useState("");  
  const [email, setEmail] = useState("");    
  const [telefono, setTelefono] = useState(""); 
  const [categoria, setCategoria] = useState("");  // Estado para la categoría
  const [categoriasSugeridas, setCategoriasSugeridas] = useState([]);  // Sugerencias de categorías
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchCategorias = async (query) => {
    try {
      const response = await fetch(`https://hjcc-backend.onrender.com/api/categorias?search=${query}`);
      const data = await response.json();
      setCategoriasSugeridas(data);
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
    }
  };

  useEffect(() => {
    if (categoria.length > 2) {  // Solo buscar cuando el texto es más largo que 2 caracteres
      fetchCategorias(categoria);
    } else {
      setCategoriasSugeridas([]);
    }
  }, [categoria]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !descripcion || !urgencia || !ciudad || !pais || !nombre || !email || !telefono || !categoria) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch("https://hjcc-backend.onrender.com/api/solicitudes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          descripcion,
          urgencia,
          ciudad,
          pais,
          nombre,
          email,
          telefono,
          categoria
        }),
      });
      const data = await response.json();
      if (data && data.urlSlug) {
        navigate(`/solicitudes/${data.urlSlug}`);
      } else {
        setError("No se pudo obtener el enlace de la solicitud.");
      }
    } catch (error) {
      setError("Error al crear la solicitud");
      console.error(error);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Solicitar Servicio</h1>
      {error && <p className="text-center text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            placeholder="Reparación de aire acondicionado"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            placeholder="Describe brevemente el servicio que necesitas."
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="urgencia">Urgencia</label>
          <select
            id="urgencia"
            className="form-control"
            value={urgencia}
            onChange={(e) => setUrgencia(e.target.value)}
            required
          >
            <option value="">Seleccione...</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="categoria">Categoría</label>
          <input
            type="text"
            id="categoria"
            className="form-control"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Electricista, Cerrajero, etc."
            required
            list="categoria-list"
          />
          <datalist id="categoria-list">
            {categoriasSugeridas.map((cat, index) => (
              <option key={index} value={cat} />
            ))}
            <option value="Otro" />
          </datalist>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            className="form-control"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
            placeholder=""
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="pais">País</label>
          <input
            type="text"
            id="pais"
            className="form-control"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
            placeholder=""
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder=""
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=""
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            placeholder=""
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
};

export default FormularioSolicitud;
