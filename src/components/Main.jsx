import React from "react";
import Accordion from "./Accordion";
import Experience from "./Experience";
import Education from "./Education";
import Languages from "./Languages";
import Skills from "./Skills";

const Main = ({ handleClick }) => {
  return (
    <main>
      <Accordion
        defaultOpenKeys={["experiencia", "educacion", "idiomas", "sobreMi"]}
      >
        <Experience handleClick={handleClick} />
        <Education handleClick={handleClick} />
        <Languages handleClick={handleClick} />
        <Skills handleClick={handleClick} />
      </Accordion>
    </main>
  );
};

export default Main;
