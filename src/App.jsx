import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./layout/Header";  // Importar Header
import Footer from "./layout/Footer";  // Importar Footer
import Home from "./pages/Home";  // Página de solicitudes recientes
import FormularioSolicitud from "./pages/FormularioSolicitud";  // Página de solicitud de servicio
import Solicitudes from "./pages/Solicitudes";  // Página de mostrar todas las solicitudes
import SolicitudDetalles from "./pages/SolicitudDetalles"; // Página para ver detalles de la solicitud

const App = () => {
  return (
    <Router>
      <Header /> {/* Mostrar Header globalmente */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solicitar-servicio" element={<FormularioSolicitud />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/solicitudes/:slug" element={<SolicitudDetalles />} />
        </Routes>
      </main>
      <Footer /> {/* Mostrar Footer globalmente */}
    </Router>
  );
};

export default App;
