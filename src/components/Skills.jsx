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
          <li>Frontend con Angular</li>
          <li>Backend con Node.js y Express (TypeScript)</li>
          <li>Bases de datos: MongoDB y MySQL</li>
          <li>JavaScript / TypeScript</li>
          <li>Versionamiento con Git, GitHub y GitLab</li>
          <li>Prototipado y diseño: Figma</li>
          <li>Despliegue: Vercel y Railway</li>
          <li>
            Gestión de proyectos: Trello, Slack, Jira
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Skills;
