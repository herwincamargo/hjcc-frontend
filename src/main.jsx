import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Importa el componente principal
import "./index.css";  // Asegúrate de que esta línea esté correcta para los estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
