import React from "react";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Header, Main, Footer, SEO, Preloader } from "./components";
import { useScrollToSection, useFaviconEffect, useServiceWorker, usePreloader } from "./hooks";

function App() {
  const { handleClick } = useScrollToSection();
  useFaviconEffect();
  useServiceWorker();
  const { showPreloader, handlePreloaderComplete } = usePreloader();

  return (
    <HelmetProvider>
      <SEO />
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      <div>
        <Header />
        <Main handleClick={handleClick} />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
