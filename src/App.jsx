import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



const yoCV = process.env.PUBLIC_URL + '/yoCV.png';
// const imgBuscadorCanciones = process.env.PUBLIC_URL + '/musicBackground.jpg';
// const imgMinijuegos = process.env.PUBLIC_URL + '/minijuegos.png';
// const imgToDoList = process.env.PUBLIC_URL + '/ToDoList.jpg';


//funcion para que al hacer click en un header la pantalla scrolle automaticamente
function handleClick(eventKey) {
  const headerElement = document.querySelector(`#${eventKey}`);
  const headerRect = headerElement.getBoundingClientRect();
  const offset = headerRect.top + window.scrollY;
  
  const accordionItemElement = headerElement.closest('.acordion-item');
  accordionItemElement.addEventListener('transitionend', () => {
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }, { once: true });
}





function App() {
  
  return (
<div>
    <header>
      <section>
        <figure>
          <img
            src={yoCV}
            alt="retrato de Gastón Langellotti"
          />
        </figure>
        <figcaption>
          <h1>Gastón Langellotti</h1>
          <h2>Desarrollador de Software</h2>
        </figcaption>
      </section>
    </header>
    <main>
      
    <Accordion alwaysOpen>
      <ul>
      <li>Profesional proactivo con experiencia en la creación y personalización de soluciones a medida.</li>
      <li>Trabajo de forma independiente, respondiendo a la demanda  del cliente.</li>
      </ul>
    <Accordion.Item eventKey="experiencia" className='acordion-item'>
        <Accordion.Header onClick={() => handleClick('experiencia')}><span id='experiencia' className='centrado'>Experiencia Laboral</span></Accordion.Header>
        <Accordion.Body>
          <ul>
            <li><b>2023 - Actualidad: Cliente particular | Desarrollador de Software</b></li>
            <li>Desarrollo completo de un sistema predictor oceanográfico. </li>
            <li><b>2023: Entrenamiento en Salesforce & Salesforce Industries | Rol XDGen</b></li>
            <li>Programa de entrenamiento en Salesforce dictado por LabsXD.</li>
            <li><b>2021 - Actualidad: Workana | Freelancer</b></li>
            <li>Data Entry: Opinautos | Extracción de datos técnicos de manuales automotrices en inglés y volcarlos de manera precisa en un programa designado.</li>
            <li>Data Entry: Software Shop | Manejo de datos de personal académico en universidades en Latinoamérica.</li>
          </ul>
        </Accordion.Body>
        </Accordion.Item>
    <Accordion.Item eventKey="educacion" className='acordion-item'>
    <Accordion.Header onClick={() => handleClick('educacion')}><span  id="educacion" className='centrado'>Educación</span></Accordion.Header>
      <Accordion.Body>
          <ul>
            <li>
              <b>2023 - Actualidad:</b> Bootcamp de Desarrollo Web Avanzado, en la UTN, Facultad Regional de Buenos Aires.
            </li>
            <li>
              <b>2022:</b> Full Stack Desarrollo Web (JavaScript/Node JS), en Agencia a
              lo largo de la vida.
            </li>
            <li>
              <b>2022:</b> Especialización en React.js, en Agencia a lo largo de la vida.
            </li>
            <li>
              <b>2021:</b> Full Stack Java, en Agencia a lo largo de la vida.
            </li>
            <li>
              <b>2023 - Actualidad:</b> Argentina programa 4.0 parte 2, en Ticmas.
            </li>
            <li>
              <b>2022:</b> Programación 2, en Academia BA.
            </li>
            <li>
              <b>2022:</b> Ciencia de datos 2, en Academia BA.
            </li>
            <li>
              <b>2022 - Actualidad:</b> Inglés para programadores, en Pearson English.
            </li>
            <li>
              <b>2023 - Actualidad:</b> Diseño UX/UI, en Agencia a lo largo de la vida.
            </li>
          </ul>
        </Accordion.Body>
        </Accordion.Item>
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
        <Accordion.Item eventKey="idiomas" className='acordion-item'>
          <Accordion.Header onClick={() => handleClick('idiomas')}><span id='idiomas' className='centrado'>Idiomas</span></Accordion.Header>
          <Accordion.Body>
          <ul>
            <li><b>Inglés:</b> B1.</li>
          </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="sobreMi" className='acordion-item'>
          <Accordion.Header onClick={() => handleClick('sobreMi')}><span id='sobreMi' className='centrado'>Skills</span></Accordion.Header>
          <Accordion.Body>
          <ul className='dos-columnas'>
            <li>Desarrollo web frontend con React.js</li>
            <li>Desarrollo web backend con Node.js</li>
            <li>Versionamiento con Git y GitHub</li>
            <li>Lenguajes de programación: JavaScript y Python</li>
            <li>Frameworks: Bootstrap</li>
            <li>Base de datos: MySQL</li>
            <li>Despliegue en la nube: Githubpages</li>
            <li>Metodologías ágiles: Kanban</li>
          </ul>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </main>
    <footer>
      <ul>
        <li>
          <a 
            href="https://www.linkedin.com/in/gastonlangellotti"
            target="_blank" rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin  fa-2x"></i>
            <span>/gastonlangellotti</span>
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send/?phone=541140277885"
            target="_blank" rel="noreferrer"
          >
            <i class="fa-brands fa-square-whatsapp fa-2x"></i>
            <span>1140277885</span>
          </a>
        </li>
        <li>
          <a href="https://goo.gl/maps/RWyaGNPZpUn4icg59" target="_blank" rel="noreferrer">
            <i class="fa-solid fa-location-dot fa-2x"></i>
            <span>Vicente López.</span>
          </a>
        </li>
        <li>
          <a href="http://www.github.com/langello" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-square-github fa-2x"></i>
            <span>/langello</span>
          </a>
        </li>
        <li>
          <a href="mailto:gastonchavo@gmail.com">
            <i class="fa-solid fa-envelope fa-2x"></i>
            <span>gastonchavo@gmail.com</span>
          </a>
        </li>
      </ul>
    </footer>
    </div>
  

  );
}

export default App;
