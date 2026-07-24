import React from "react";
import { HelmetProvider } from "react-helmet-async";
import "./styles/modern.css";
import "./styles/themes.css";
import {
  Header,
  Main,
  Footer,
  SEO,
  ThemeToggle,
  AccessibilityEnhancer,
  PrintButton,
} from "./components";
import { useScrollToSection, useFaviconEffect, useServiceWorker } from "./hooks";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const { handleClick } = useScrollToSection();
  useFaviconEffect();
  useServiceWorker();

  return (
    <ThemeProvider>
      <HelmetProvider>
        <SEO />
        <div className="app-container">
          <ThemeToggle />
          <AccessibilityEnhancer />
          <PrintButton />
          <Header />
          <Main handleClick={handleClick} />
          <Footer />
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
