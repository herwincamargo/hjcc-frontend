import React from "react";

const FormularioSolicitud = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Solicitud de Servicio</h2>
      <form>
        <input
          type="text"
          placeholder="Título"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Descripción"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        ></textarea>
        <button className="bg-blue-500 text-white p-2 rounded">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioSolicitud;
