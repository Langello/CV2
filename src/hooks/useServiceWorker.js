import { useEffect } from 'react';

export const useServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registrado exitosamente: ', registration.scope);
            
            // Verificar actualizaciones cada 60 segundos
            setInterval(() => {
              registration.update();
            }, 60000);
          })
          .catch((registrationError) => {
            console.log('SW falló al registrarse: ', registrationError);
          });
      });
    }
  }, []);
};

export default useServiceWorker;
