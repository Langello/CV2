import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Experience = ({ handleClick }) => {
  return (
    <Accordion.Item eventKey="experiencia" className="acordion-item">
      <Accordion.Header onClick={() => handleClick("experiencia")}>
        <span id="experiencia" className="centrado">
          Experiencia Laboral
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <ul>
          <li>
            <b>2024 - Actualidad: MetOcean | Desarrollador Full Stack</b>
          </li>
          <li>
            Desarrollo completo de la web{" "}
            <a
              href="http://www.puertoquequenmetocean.com"
              target="_blank"
              rel="noreferrer"
            >
              <b>www.puertoquequenmetocean.com</b>
            </a>
            , que muestra datos meteorológicos en tiempo real del puerto
            (olas, viento y marea).
          </li>
          <li>
            Instalación de servidor físico en el puerto y mantenimiento
            continuo de la plataforma.
          </li>
          <li>Desarrollo del backend y frontend completos.</li>

          <li>
            <b>2024 - Actualidad: Groween | Desarrollador Full Stack</b>
          </li>
          <li>
            Desarrollo completo de la web{" "}
            <a
              href="https://www.groween.mx"
              target="_blank"
              rel="noreferrer"
            >
              <b>www.groween.mx</b>
            </a>
            , plataforma de renta de ropa de México.
          </li>
          <li>
            Implementación de login, envío de emails y pasarela de pagos
            con PayPal.
          </li>
          <li>
            Gestión de stock mediante un panel de administración para
            seguimiento de prendas y órdenes.
          </li>

          <li>
            <b>2024 - Actualidad: Dedo.Top | Desarrollador Full Stack</b>
          </li>
          <li>
            Desarrollo completo de la web{" "}
            <a
              href="https://www.dedo.top"
              target="_blank"
              rel="noreferrer"
            >
              <b>www.dedo.top</b>
            </a>
            , plataforma para compartir viajes en Argentina.
          </li>
          <li>
            Implementación de sistema de publicación y búsqueda de viajes
            con notificaciones y alertas.
          </li>
          <li>
            Integración de pasarela de pagos para suscripciones premium.
          </li>

          <li>
            <b>
              2023 - Actualidad: Cliente particular | Desarrollador de
              Software
            </b>
          </li>
          <li>
            Desarrollo completo de un sistema predictor de marea para el
            uso interno del puerto.
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Experience;
