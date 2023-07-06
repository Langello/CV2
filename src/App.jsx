import React from 'react';
import {mostrarOcultarArticulo} from './index.js';
const yoCV = process.env.PUBLIC_URL + '/yoCV.png';
const imgBuscadorCanciones = process.env.PUBLIC_URL + '/musicBackground.jpg';
const imgMinijuegos = process.env.PUBLIC_URL + '/minijuegos.png';
function App() {
  const hacerClick = (articulo) => {
    mostrarOcultarArticulo(articulo);
  };
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
          <h2>Licenciado en Actividad Física y Deporte</h2>
          <h2>Profesor en Educación Física</h2>
        </figcaption>
      </section>
    </header>

    <main>
      <section id="educacionSection">
        <a href="#educacionSection">
          <h3 onClick={() => hacerClick('educacion')}>
            <span>Educación</span>
            <i id="iconeducacion" class="fa-solid fa-arrow-down fa-beat"></i>
          </h3>
        </a>
        <article id="educacionArticle">
          <ul>
            <li>
              <b>2022:</b> Full Stack Desarrollo Web (JavaScript/Node JS) en Agencia a
              lo largo de la vida (CABA).
            </li>
            <li>
              <b>2022:</b> Especialización en React.js en Agencia a lo largo de la vida (CABA).
            </li>
            <li>
              <b>2021:</b> Full Stack Java en Agencia a lo largo de la vida (CABA).
            </li>
            <li>
              <b>2023 - Actualidad:</b> Argentina programa 4.0 parte 2 (Ministerio de Economía).
            </li>
            <li>
              <b>2022:</b> Argentina programa 4.0 parte 1 (Ministerio de Economía).
            </li>
            <li>
              <b>2022:</b> Programación 2 en Academia BA (Ministerio de Desarrollo
              Económico Producción, Gobierno de Ciudad de Buenos Aires).
            </li>
            <li>
              <b>2022:</b> Ciencia de datos 2 en Academia BA (Ministerio de Desarrollo
              Económico Producción, Gobierno de Ciudad de Buenos Aires).
            </li>
            <li>
              <b>2023:</b> Marketing digital y Paid Media (Programa Digital Ad Degree).
            </li>
            <li>
              <b>2022 - Actualidad:</b> Inglés para programadores en Pearson English.
            </li>
            <li>
              <b>2022:</b> Licenciado en actividad física y deporte. Universidad de
              Flores (UFLO).
            </li>
            <li>
              <b>2015:</b> Profesor de Educación Física. Instituto privado General San
              Martín (GEBA).
            </li>
          </ul>
        </article>
      </section>

      <section id="experienciaLaboralSection">
        <a href="#experienciaLaboralSection">
          <h3 onClick={() => hacerClick('experienciaLaboral')}>
            <span>Experiencia Laboral</span>
            <i id="iconexperienciaLaboral" class="fa-solid fa-arrow-down fa-beat"></i>
          </h3>
        </a>
        <article id="experienciaLaboralArticle">
          <h4>2023 - Actualmente: Entrenamiento en Salesforce & Salesforce Industries | Rol XDGen</h4>
          <ul>
            <li>Programa de entrenamiento en Salesforce dictado por LabsXD.</li>
            <li> 
              <a href="https://trailblazer.me/id/langellotti" target="_blank" rel="noreferrer">
                <span>Perfil de Trailblazer</span>
                <i class="fa-regular fa-hand-pointer fa-rotate-270 fa-lg"></i>
              </a>
            </li>
          </ul>

          <h4>2021 - Actualmente: Workana | Freelancer</h4>
          <ul>
            <li>Data entry.</li>
          </ul>

          <h4>2022 - Actualmente: Escuela de natación "Deep Blue" | Socio y Coordinador</h4>
          <ul>
            <li>Supervisar, acompañar y dirigir el proceso de enseñanza.</li>
            <li>Capacitación del personal docente.</li>
          </ul>

          <h4>2016 - Actualmente: Colegio Piaget de San Isidro | Profesor</h4>
        </article>
      </section>

      <section id="proyectosSection">
        <a href="#proyectosSection">
          <h3 onClick={() => hacerClick('proyectos')}>
            <span>Proyectos</span>
            <i id="iconproyectos" class="fa-solid fa-arrow-down fa-beat"></i>
          </h3>
        </a>
        <article id="proyectosArticle">
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
          </ul>
        </article>
      </section>

      <section id="idiomasSection">
        <a href="#idiomasSection">
          <h3 onClick={() => hacerClick('idiomas')}>
            <span>Idiomas</span>
            <i id="iconidiomas" class="fa-solid fa-arrow-down fa-beat"></i>
          </h3>
        </a>
        <article id="idiomasArticle">
          <ul>
            <li><b>Inglés:</b> B1.</li>
          </ul>
        </article>
      </section>

      <section id="sobreMiSection">
          <a href="#sobreMiSection">
            <h3 onClick={() => hacerClick('sobreMi')}>
              <span>Sobre Mí</span>
              <i id="iconsobreMi" class="fa-solid fa-arrow-down fa-beat"></i>
            </h3>
          </a>
          <article id="sobreMiArticle">
            <ul>
              <li>Apasionado del aprendizaje continuo y en constante búsqueda de desafíos estimulantes para mi crecimiento profesional. Con experiencia en docencia y sólidas habilidades en Node.JS, Python, React.JS y JAVA, ofrezco soluciones técnicas de calidad.</li>
              <li>Me destaco como un colaborador comprometido y confiable, capaz de trabajar de manera efectiva tanto en equipo como de forma autónoma. Mi enfoque se centra en alcanzar la excelencia y la eficiencia, invirtiendo tiempo y energía para lograr resultados sobresalientes.</li>
              <li>Mi actitud adaptable y perseverante me impulsa a superar los desafíos con determinación. Estoy entusiasmado por encontrar oportunidades donde pueda aplicar mi experiencia y conocimientos para impulsar el éxito del equipo.</li>
              <li>Espero con interés contribuir de manera significativa en su organización y aprovechar nuevas y emocionantes oportunidades.</li>
            </ul>
            </article>
      </section>


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
