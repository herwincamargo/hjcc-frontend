// src/pages/Register.jsx
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de registro
    alert("Registro exitoso");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registrarse</h2>
      <form onSubmit={handleRegister}>
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
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
