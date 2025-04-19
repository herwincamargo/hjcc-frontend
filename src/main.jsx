import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Asegúrate de que el componente App está correctamente importado
import './index.css'; // Si tienes un archivo de estilos globales, inclúyelo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Este es tu componente principal */}
  </React.StrictMode>
);
