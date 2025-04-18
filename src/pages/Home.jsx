import FormularioSolicitud from "../components/FormularioSolicitud.jsx";
import Solicitudes from "../components/Solicitudes.jsx";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* CABECERA / HERO */}
      <section className="bg-white shadow-md py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700">HJCC - Servicio Inteligente</h1>
          <p className="text-gray-600 mt-3 text-lg">Conecta con expertos de confianza en toda Colombia.</p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* FORMULARIO */}
        <FormularioSolicitud />

        {/* LISTADO DE SOLICITUDES */}
        <Solicitudes />
      </main>
    </div>
  );
};

export default Home;
