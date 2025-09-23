import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Header, Main, Footer } from "./components";
import { useScrollToSection, useFaviconEffect } from "./hooks";

function App() {
  const { handleClick } = useScrollToSection();
  useFaviconEffect();

  return (
    <div>
      <Header />
      <Main handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default App;
