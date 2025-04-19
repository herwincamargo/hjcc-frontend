import React, { useState } from "react";

const FormularioSolicitud = () => {
  // Definición de estados para cada campo del formulario y para el error
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [urgencia, setUrgencia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [error, setError] = useState(null); // Estado para manejar los errores

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar recarga de página al enviar el formulario

    // Verificar que todos los campos estén completos
    if (!titulo || !descripcion || !urgencia || !ciudad || !pais) {
      setError("Todos los campos son obligatorios"); // Establecer mensaje de error si falta algún campo
      return;
    }

    // Limpiar el error en caso de que los campos sean válidos
    setError(null);

    // Enviar los datos al backend con fetch
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
      }),
    })
      .then((response) => response.json()) // Procesar la respuesta como JSON
      .then((data) => {
        console.log("Solicitud creada:", data); // Ver los datos devueltos por el backend

        // Aquí podrías redirigir a otra página o limpiar el formulario
        alert("¡Solicitud enviada con éxito!"); // Puedes usar un mensaje de éxito
        // Limpiar los campos después de enviar la solicitud
        setTitulo("");
        setDescripcion("");
        setUrgencia("");
        setCiudad("");
        setPais("");
      })
      .catch((error) => {
        setError("Error al crear la solicitud"); // Mostrar error si ocurre un problema con la API
        console.error("Error:", error);
      });
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Solicitar Servicio</h1>
      
      {/* Mostrar el mensaje de error si existe */}
      {error && <p className="text-center text-danger">{error}</p>} 

      {/* Formulario para enviar una solicitud */}
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
        <button type="submit" className="btn btn-primary mt-3">
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
};

export default FormularioSolicitud;
