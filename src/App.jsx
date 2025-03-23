import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const yoCV = process.env.PUBLIC_URL + "/yoCV.png";
// const imgBuscadorCanciones = process.env.PUBLIC_URL + '/musicBackground.jpg';
// const imgMinijuegos = process.env.PUBLIC_URL + '/minijuegos.png';
// const imgToDoList = process.env.PUBLIC_URL + '/ToDoList.jpg';

//funcion para que al hacer click en un header la pantalla scrolle automaticamente
function handleClick(eventKey) {
  const headerElement = document.querySelector(`#${eventKey}`);
  const headerRect = headerElement.getBoundingClientRect();
  const offset = headerRect.top + window.scrollY;

  const accordionItemElement = headerElement.closest(".acordion-item");
  accordionItemElement.addEventListener(
    "transitionend",
    () => {
      window.scrollTo({ top: offset, behavior: "smooth" });
    },
    { once: true }
  );
}

function App() {
  return (
    <div>
      <header>
        <section>
          <figure>
            <img src={yoCV} alt="retrato de Gastón Langellotti" />
          </figure>
          <figcaption>
            <h1>Gastón Langellotti</h1>
            <h2>Desarrollador web</h2>
            <p>
              Profesional proactivo con experiencia. Trabajo freelance
              respondiendo a los requerimientos del cliente.
            </p>
          </figcaption>
        </section>
      </header>
      <main>
        <Accordion alwaysOpen>
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
                <li>Versionamiento con Git y GitHub</li>
                <li>Lenguaje de programación: JavaScript</li>
                <li>Prototipado y diseño: Figma</li>
                <li>Despliegue en la nube: Vercel</li>
                <li>
                  Herramientas de administración de proyectos: Trello, Slack
                </li>
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
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin  fa-2x"></i>
              <span>/gastonlangellotti</span>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=541140277885"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-whatsapp fa-2x"></i>
              <span>1140277885</span>
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/i2gzPPEjx7bao9R57"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-location-dot fa-2x"></i>
              <span>Córdoba</span>
            </a>
          </li>
          <li>
            <a
              href="http://www.github.com/langello"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-github fa-2x"></i>
              <span>/langello</span>
            </a>
          </li>
          <li>
            <a href="mailto:gastonchavo@gmail.com">
              <i className="fa-solid fa-envelope fa-2x"></i>
              <span>gastonchavo@gmail.com</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
