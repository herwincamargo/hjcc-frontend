import React from "react";
import { Link } from "react-router-dom";

const ComoFunciona = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">¿Cómo funciona HJCC Smart Services?</h1>
        <p className="lead mt-3">
          Conecta con técnicos especializados de manera rápida, directa y segura.
        </p>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="h4">¿Qué es HJCC Smart Services?</h2>
          <p>
            HJCC Smart Services es la plataforma que conecta personas y empresas
            con técnicos y profesionales capacitados en múltiples categorías de
            servicio. Publicar una solicitud es sencillo, rápido y sin necesidad de registrarte.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="h4">¿Cómo funciona?</h2>
          <ul className="list-unstyled">
            <li>✅ Publica tu solicitud describiendo el servicio que necesitas.</li>
            <li>✅ Difundimos tu solicitud en nuestra comunidad de Telegram.</li>
            <li>✅ Profesionales te contactan directamente.</li>
            <li>✅ Tú decides con quién trabajar, sin intermediarios ni comisiones.</li>
          </ul>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="h4">¿Qué problemas soluciona?</h2>
          <ul className="list-unstyled">
            <li>🚀 Evitar búsquedas largas de técnicos.</li>
            <li>🚀 Conseguir servicios de calidad más rápido.</li>
            <li>🚀 Aumentar la visibilidad de técnicos y empresas de servicio.</li>
            <li>🚀 Ahorrar tiempo a clientes y prestadores.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="h4">Notificaciones y facilidad de uso</h2>
          <ul className="list-unstyled">
            <li>📧 Recibe alertas vía email.</li>
            <li>📱 Recibe notificaciones en nuestro canal de Telegram.</li>
            <li>🟢 Próximamente: Canal oficial de WhatsApp y nuestra APP móvil.</li>
            <li>📝 Publica tu solicitud sin necesidad de registrarte.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-5">
        <h2 className="h4 mb-3">¿Eres profesional o empresa de servicios?</h2>
        <p className="mb-4">
          Únete a nuestra comunidad en Telegram y recibe solicitudes de servicios
          directamente en tu teléfono. Aprovecha oportunidades reales, sin comisiones ni intermediarios.
        </p>
        <a
          href="https://t.me/+KcLGOEqZaElhZmQx"
          className="btn btn-primary btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unirme a la comunidad en Telegram
        </a>
      </div>
    </section>
  );
};

export default ComoFunciona;
