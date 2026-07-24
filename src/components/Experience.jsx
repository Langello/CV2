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
            <b>
              2025 - Actualidad: CompraViva | Desarrollador Full Stack
              principal
            </b>
          </li>
          <li>
            Desarrollo y mantenimiento de{" "}
            <a
              href="https://www.compraviva.ar"
              target="_blank"
              rel="noreferrer"
            >
              <b>www.compraviva.ar</b>
            </a>
            , plataforma de consumo colaborativo para pedidos de alimentos
            agroecológicos y gestión de nodos de entrega.
          </li>
          <li>
            Responsable del producto de punta a punta: frontend, backend y
            evolutivo continuo según las necesidades del negocio.
          </li>

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
            <b>
              2024 - Actualidad: Dedo.top
              <span className="logo-registered">®</span> | Fundador y
              Desarrollador Full Stack
            </b>
          </li>
          <li>
            Desarrollo del ecosistema{" "}
            <a href="https://www.dedo.top" target="_blank" rel="noreferrer">
              <b>
                Dedo.top
                <span className="logo-registered">®</span>
              </b>
            </a>
            , con tres productos:
          </li>
          <li>
            Viajes compartidos: publicación y búsqueda de viajes, alertas y
            suscripciones premium con pasarela de pagos.
          </li>
          <li>
            QR: gestión de entradas para eventos con códigos QR únicos,
            tipos de ticket, cupos y verificación en tiempo real.
          </li>
          <li>
            Check-in: sistema de validación y control de asistencia para
            eventos.
          </li>

          <li>
            <b>2025 - Actualidad: El Chañar | Desarrollador Full Stack</b>
          </li>
          <li>
            Desarrollo y mantenimiento de{" "}
            <a
              href="https://www.chaniar.com.ar"
              target="_blank"
              rel="noreferrer"
            >
              <b>www.chaniar.com.ar</b>
            </a>
            , sitio web de apart y cabañas en Villa General Belgrano con
            reserva directa.
          </li>

          <li>
            <b>2024 - 2025: Groween | Desarrollador Full Stack</b>
          </li>
          <li>
            Desarrollo completo de{" "}
            <a
              href="https://groween-web.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <b>groween-web.vercel.app</b>
            </a>
            , plataforma de renta de ropa infantil en México.
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
