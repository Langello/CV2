import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Experience from "./Experience";
import Education from "./Education";
import Languages from "./Languages";
import Skills from "./Skills";

const Main = ({ handleClick }) => {
  return (
    <main>
      <Accordion alwaysOpen>
        <Experience handleClick={handleClick} />
        <Education handleClick={handleClick} />
        {/*Proyectos
        <Accordion.Item eventKey="proyectos" className='acordion-item'>
          <Accordion.Header onClick={() => handleClick('proyectos')}><span id='proyectos' className='centrado'>Proyectos</span></Accordion.Header>
          <Accordion.Body id='contenedorProyectos'>
          <ul>
            <li>
              <a href="https://langello.github.io/BuscadorCanciones/" target="_blank" rel="noreferrer">
                <img src={imgBuscadorCanciones} alt="Proyecto Buscador de Caciones" />
                <span>Buscador de Canciones</span>
              </a>
            </li>
            <li>
              <a href="https://langello.github.io/Minigames/" target="_blank" rel="noreferrer">
                <img src={imgMinijuegos} alt="Proyecto de Minijuegos" />
                <span>Minijuegos</span>
              </a>
            </li>
            <li>
              <a href="https://langello.github.io/To-Do/" target="_blank" rel="noreferrer">
                <img src={imgToDoList} alt="Proyecto TodoList" />
                <span>Lista de Tareas</span>
              </a>
            </li>
          </ul>
          </Accordion.Body>
        </Accordion.Item >
        */}
        <Languages handleClick={handleClick} />
        <Skills handleClick={handleClick} />
      </Accordion>
    </main>
  );
};

export default Main;
