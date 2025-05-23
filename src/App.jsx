import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import FormularioSolicitud from "./pages/FormularioSolicitud";
import Solicitudes from "./pages/Solicitudes";
import SolicitudDetalles from "./pages/SolicitudDetalles";
import Disclaimer from "./pages/Disclaimer";
import ComoFunciona from './pages/ComoFunciona';
import './index.css';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solicitar-servicio" element={<FormularioSolicitud />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/solicitudes/:slug" element={<SolicitudDetalles />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
