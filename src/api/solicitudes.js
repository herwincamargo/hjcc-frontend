const API_URL = 'https://hjcc-backend.onrender.com/api/solicitudes';

export const obtenerSolicitudes = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener solicitudes');
  return res.json();
};

export const crearSolicitud = async (form) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  });
  if (!res.ok) throw new Error('Error al crear solicitud');
  return res.json();
};

export const eliminarSolicitud = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Error al eliminar solicitud');
};
