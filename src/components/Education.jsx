import React from "react";
import Accordion from "./Accordion";

const Education = ({ handleClick }) => {
  return (
    <Accordion.Item eventKey="educacion" className="acordion-item">
      <Accordion.Header onClick={() => handleClick("educacion")}>
        <span id="educacion" className="centrado">
          Educación
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <ul>
          <li>
            <b>2023:</b> Bootcamp de Desarrollo Web Avanzado, en la UTN,
            Facultad Regional de Buenos Aires.
          </li>
          <li>
            <b>2022:</b> Full Stack Desarrollo Web (JavaScript/Node JS),
            en Agencia a lo largo de la vida.
          </li>
          <li>
            <b>2021:</b> Full Stack Java, en Agencia a lo largo de la
            vida.
          </li>
          <li>
            <b>2023:</b> Argentina programa 4.0 parte 2, en UTN. Facultad
            Regional de Buenos Aires.
          </li>
          <li>
            <b>2022:</b> Programación 2, en Academia BA.
          </li>
          <li>
            <b>2022:</b> Ciencia de datos 2, en Academia BA.
          </li>
          <li>
            <b>2022:</b> Inglés para programadores, en Pearson English.
          </li>
          <li>
            <b>2023</b> Diseño UX/UI, en Agencia a lo largo de la vida.
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Education;
