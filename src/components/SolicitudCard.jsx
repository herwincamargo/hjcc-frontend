const SolicitudCard = ({ solicitud }) => {
  const { titulo, descripcion, ciudad, createdAt } = solicitud;

  return (
    <div className="bg-white shadow p-4 rounded-md border border-gray-200">
      <h3 className="text-lg font-semibold text-blue-600">{titulo}</h3>
      <p className="text-gray-700 mt-2">{descripcion}</p>
      <p className="text-sm text-gray-500 mt-1">
        📍 {ciudad} | 🕒 {new Date(createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default SolicitudCard;
