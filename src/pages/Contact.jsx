// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar el manejo del formulario
    alert("Mensaje enviado");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensaje</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
