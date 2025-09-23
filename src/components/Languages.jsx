import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Languages = ({ handleClick }) => {
  return (
    <Accordion.Item eventKey="idiomas" className="acordion-item">
      <Accordion.Header onClick={() => handleClick("idiomas")}>
        <span id="idiomas" className="centrado">
          Idiomas
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <ul>
          <li>
            <b>Inglés:</b> B1.
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Languages;
