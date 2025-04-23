import { useState } from 'react';
import { crearSolicitud } from '../api/solicitudes';

const FormularioSolicitud = () => {
  const [form, setForm] = useState({ titulo: '', descripcion: '', ciudad: '' });
  const [mensaje, setMensaje] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje(null);

    try {
      await crearSolicitud(form);
      setMensaje('✅ Solicitud creada correctamente');
      setForm({ titulo: '', descripcion: '', ciudad: '' });
    } catch (error) {
      setMensaje('❌ Hubo un error al enviar la solicitud');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow border">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📋 Crear nueva solicitud</h2>
      {mensaje && <p className="mb-3 text-sm">{mensaje}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="titulo"
          placeholder="Título del servicio"
          value={form.titulo}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="descripcion"
          placeholder="Describe el problema o necesidad"
          value={form.descripcion}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          value={form.ciudad}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={enviando}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          {enviando ? 'Enviando...' : 'Publicar solicitud'}
        </button>
      </form>
    </div>
  );
};

export default FormularioSolicitud;
