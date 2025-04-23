import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioSolicitud = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [urgencia, setUrgencia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [nombre, setNombre] = useState("");  // Campo para el nombre
  const [email, setEmail] = useState("");    // Campo para el email
  const [telefono, setTelefono] = useState(""); // Campo para el teléfono
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !descripcion || !urgencia || !ciudad || !pais || !nombre || !email || !telefono) {
      setError("Todos los campos son obligatorios");
      return;
    }

    fetch("https://hjcc-backend.onrender.com/api/solicitudes", {
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
        telefono
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Solicitud creada:", data);
        if (data && data.urlSlug) {
          // Después de crear la solicitud, redirigir a la página de detalles de la solicitud
          navigate(`/solicitudes/${data.urlSlug}`);  // Redirigir con el URL del slug
        } else {
          setError("No se pudo obtener el enlace de la solicitud.");
        }
      })
      .catch((error) => {
        setError("Error al crear la solicitud");
        console.error(error);
      });
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
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            className="form-control"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
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
          />
        </div>

        {/* Campos de contacto */}
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
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
