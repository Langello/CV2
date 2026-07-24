import React from "react";

const Header = () => {
  const yoCV = process.env.PUBLIC_URL + "/yoCV.png";
  const dedoLogo = process.env.PUBLIC_URL + "/brands/dedo-top.svg";

  return (
    <header>
      <section>
        <figure>
          <img
            src={yoCV}
            alt="retrato de Gastón Langellotti"
            loading="eager"
          />
        </figure>
        <figcaption>
          <h1>Gastón Langellotti</h1>
          <h2>Desarrollador Full Stack</h2>
          <a
            href="https://www.dedo.top"
            target="_blank"
            rel="noreferrer"
            className="brand-dedo"
            aria-label="Dedo.top, marca registrada"
          >
            <span className="brand-dedo__name">
              Dedo.top
              <span className="logo-registered">®</span>
            </span>
            <img src={dedoLogo} alt="" aria-hidden="true" />
          </a>
          <p>
            Freelance. Construyo productos web de punta a punta: desde
            plataformas de consumo colaborativo y datos en tiempo real
            hasta pagos, check-in y gestión de eventos.
          </p>
        </figcaption>
      </section>
    </header>
  );
};

export default Header;
