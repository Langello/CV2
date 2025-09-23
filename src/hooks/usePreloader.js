import { useState, useEffect } from 'react';

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Verificar si ya se cargó previamente
    const hasLoadedBefore = sessionStorage.getItem('cv-loaded');
    
    if (hasLoadedBefore) {
      setIsLoading(false);
      setShowPreloader(false);
      return;
    }

    // Simular tiempo de carga mínimo
    const minLoadTime = 1500; // 1.5 segundos
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
        setShowPreloader(false);
        sessionStorage.setItem('cv-loaded', 'true');
      }, remainingTime);
    };

    // Verificar si todos los recursos están cargados
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setShowPreloader(false);
  };

  return {
    isLoading,
    showPreloader,
    handlePreloaderComplete
  };
};

export default usePreloader;
