import { useCallback } from 'react';

export const useScrollToSection = () => {
  const handleClick = useCallback((eventKey) => {
    const headerElement = document.querySelector(`#${eventKey}`);
    if (!headerElement) return;
    
    const headerRect = headerElement.getBoundingClientRect();
    const offset = headerRect.top + window.scrollY;

    const accordionItemElement = headerElement.closest(".acordion-item");
    if (accordionItemElement) {
      accordionItemElement.addEventListener(
        "transitionend",
        () => {
          window.scrollTo({ top: offset, behavior: "smooth" });
        },
        { once: true }
      );
    }
  }, []);

  return { handleClick };
};
