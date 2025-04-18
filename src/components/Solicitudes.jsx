import React, { useState, useEffect } from "react";

const Solicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  
  useEffect(() => {
    fetch("/api/solicitudes")
      .then((res) => res.json())
      .then((data) => setSolicitudes(data));
  }, []);

  return (
    <div>
      {solicitudes.map((solicitud) => (
        <div key={solicitud.id} className="border p-4 mb-4">
          <h3>{solicitud.titulo}</h3>
          <p>{solicitud.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default Solicitudes;
