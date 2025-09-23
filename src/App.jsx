import React from "react";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/modern.css";
import "./styles/themes.css";
import { Header, Main, Footer, SEO, Preloader, ThemeToggle, AccessibilityEnhancer } from "./components";
import { useScrollToSection, useFaviconEffect, useServiceWorker, usePreloader } from "./hooks";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const { handleClick } = useScrollToSection();
  useFaviconEffect();
  useServiceWorker();
  const { showPreloader, handlePreloaderComplete } = usePreloader();

  return (
    <ThemeProvider>
      <HelmetProvider>
        <SEO />
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
        <div className="app-container">
          <ThemeToggle />
          <AccessibilityEnhancer />
          <Header />
          <Main handleClick={handleClick} />
          <Footer />
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
