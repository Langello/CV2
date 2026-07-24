import { useEffect } from "react";

/** Unregisters legacy/broken SW from older deploys; no new SW registration. */
export const useServiceWorker = () => {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      })
      .catch(() => {
        /* ignore */
      });
  }, []);
};

export default useServiceWorker;
