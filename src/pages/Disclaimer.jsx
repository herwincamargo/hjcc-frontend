import React from 'react';
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <section className="container py-5">
      <h1 className="mb-4">Aviso Legal</h1>

      <p>
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que este sitio web es propiedad de <strong>HJCC Smart Services</strong>.
      </p>

      <h2>1. Objeto</h2>
      <p>
        El presente aviso legal regula el uso del sitio web <strong>HJCC Smart Services</strong>, accesible a través de la URL: <a href="https://www.hjcc.com.co">https://www.hjcc.com.co</a>.
      </p>

      <h2>2. Responsabilidad</h2>
      <p>
        <strong>HJCC Smart Services</strong> no se responsabiliza por el mal uso que se realice de los contenidos de su sitio web, siendo exclusiva responsabilidad de la persona que accede a ellos o los utiliza.
      </p>

      <h2>3. Propiedad Intelectual e Industrial</h2>
      <p>
        Todos los derechos de propiedad intelectual del contenido de este sitio web, su diseño gráfico y códigos fuente son titularidad exclusiva de <strong>HJCC Smart Services</strong>, quedando prohibida su reproducción, distribución, comunicación pública y transformación, total o parcial, sin la autorización expresa de <strong>HJCC Smart Services</strong>.
      </p>

      <h2>4. Protección de Datos</h2>
      <p>
        <strong>HJCC Smart Services</strong> cumple con la normativa vigente en materia de protección de datos personales, y garantiza el cumplimiento íntegro de las obligaciones dispuestas en el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD).
      </p>

      <h2>5. Legislación Aplicable y Jurisdicción</h2>
      <p>
        La relación entre <strong>HJCC Smart Services</strong> y el usuario se regirá por la normativa colombiana vigente, y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Medellín, salvo que la Ley aplicable disponga otra cosa.
      </p>
    </section>
  );
};

export default Disclaimer;
