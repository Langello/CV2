import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/gastonlangellotti"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2x"></i>
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
  );
};

export default Footer;
