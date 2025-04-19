import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importar Routes y Route
import Header from "./layout/Header";  // Importar Header directamente
import Footer from "./layout/Footer";  // Importar Footer directamente
import Home from "./pages/Home";  // Página de solicitudes recientes
import FormularioSolicitud from "./pages/FormularioSolicitud";  // Página de solicitud de servicio
import Solicitudes from "./pages/Solicitudes";  // Página de mostrar todas las solicitudes

const App = () => {
  return (
    <Router>
      <Header /> {/* Mostrar Header globalmente */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solicitar-servicio" element={<FormularioSolicitud />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
        </Routes>
      </main>
      <Footer /> {/* Mostrar Footer globalmente */}
    </Router>
  );
};

export default App;
