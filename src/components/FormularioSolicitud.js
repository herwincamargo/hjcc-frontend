import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const [categorias, setCategorias] = useState([]);  // Estado para las categorías
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Obtener las categorías desde el backend
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch("https://hjcc-backend.onrender.com/api/categorias");
        const data = await response.json();
        setCategorias(data);  // Establecer las categorías en el estado
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategorias();
  }, []);

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
        <div className="form-group">
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

        <div className="form-group">
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

        <div className="form-group">
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

        <div className="form-group">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            className="form-control"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Seleccione...</option>
            {categorias.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
            <option value="Otro">Otro</option> {/* Opción para agregar una nueva categoría */}
          </select>
        </div>

        {/* Mostrar el campo para ingresar una nueva categoría si se selecciona "Otro" */}
        {categoria === "Otro" && (
          <div className="form-group">
            <label htmlFor="nuevaCategoria">Nueva Categoría</label>
            <input
              type="text"
              id="nuevaCategoria"
              className="form-control"
              placeholder="Escribe la nueva categoría"
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            className="form-control"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
            placeholder="Bogotá"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pais">País</label>
          <input
            type="text"
            id="pais"
            className="form-control"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
            placeholder="Colombia"
          />
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="Juan Pérez"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="juan@correo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            placeholder="123456789"
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
