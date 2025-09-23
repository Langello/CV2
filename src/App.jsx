import React from "react";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Header, Main, Footer, SEO } from "./components";
import { useScrollToSection, useFaviconEffect } from "./hooks";

function App() {
  const { handleClick } = useScrollToSection();
  useFaviconEffect();

  return (
    <HelmetProvider>
      <SEO />
      <div>
        <Header />
        <Main handleClick={handleClick} />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
