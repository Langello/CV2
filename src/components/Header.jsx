import React from "react";

const Header = () => {
  const yoCV = process.env.PUBLIC_URL + "/yoCV";
  const dedoLogo = process.env.PUBLIC_URL + "/brands/dedo-top";

  return (
    <header>
      <section>
        <figure>
          <picture>
            <source srcSet={`${yoCV}.webp`} type="image/webp" />
            <img
              src={`${yoCV}.png`}
              alt="retrato de Gastón Langellotti"
              width={400}
              height={400}
              loading="eager"
              decoding="async"
            />
          </picture>
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
            <picture>
              <source srcSet={`${dedoLogo}.webp`} type="image/webp" />
              <img
                src={`${dedoLogo}.png`}
                alt=""
                width={64}
                height={64}
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            </picture>
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
