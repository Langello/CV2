import { useEffect } from 'react';

export const useFaviconEffect = () => {
  useEffect(() => {
    const contento = process.env.PUBLIC_URL + '/contento.ico';
    const triste = process.env.PUBLIC_URL + '/triste.ico';
    const titulo = document.title;

    const handleBlur = () => {
      document.title = "Volve";
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = triste;
      }
    };

    const handleFocus = () => {
      document.title = titulo;
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = contento;
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
};
