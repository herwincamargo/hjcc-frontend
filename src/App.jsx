import React from "react";
import FormularioSolicitud from "./components/FormularioSolicitud";
import Solicitudes from "./components/Solicitudes";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <FormularioSolicitud />
      <Solicitudes />
    </div>
  );
};

export default App;
