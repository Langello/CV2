import React from "react";

const Header = () => {
  const yoCV = process.env.PUBLIC_URL + "/yoCV.png";

  return (
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
  );
};

export default Header;
