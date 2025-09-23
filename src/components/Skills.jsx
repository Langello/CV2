import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Skills = ({ handleClick }) => {
  return (
    <Accordion.Item eventKey="sobreMi" className="acordion-item">
      <Accordion.Header onClick={() => handleClick("sobreMi")}>
        <span id="sobreMi" className="centrado">
          Habilidades
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <ul className="dos-columnas">
          <li>Desarrollo web frontend con Angular</li>
          <li>Desarrollo web backend con Node.js (TypeScript)</li>
          <li>Base de datos con MySQL y MongoDB</li>
          <li>Versionamiento con Git, GitHub y GitLab</li>
          <li>Lenguaje de programación: JavaScript</li>
          <li>Prototipado y diseño: Figma</li>
          <li>Despliegue en la nube: Vercel</li>
          <li>
            Herramientas de administración de proyectos: Trello, Slack, Jira
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Skills;
