import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animaciones de entrada
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  // Animaciones de hover
  const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2, ease: "easeInOut" }
  };

  const hoverLift = {
    whileHover: { y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const hoverGlow = {
    whileHover: { 
      boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)",
      scale: 1.02
    },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  // Animaciones de página
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: "easeInOut" }
  };

  // Animaciones de acordeón
  const accordionAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  // Animaciones de texto
  const textReveal = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const textSlide = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  // Animaciones de imagen
  const imageFloat = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const imageRotate = {
    whileHover: { 
      rotate: [0, -5, 5, 0],
      scale: 1.05
    },
    transition: { duration: 0.6, ease: "easeInOut" }
  };

  // Animaciones de botón
  const buttonPulse = {
    whileHover: { 
      scale: 1.05,
      boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)"
    },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2, ease: "easeInOut" }
  };

  const buttonRipple = {
    whileTap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  // Animaciones de loading
  const loadingSpinner = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const loadingDots = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return {
    ref,
    isInView,
    // Entrada
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    fadeInScale,
    staggerContainer,
    staggerItem,
    // Hover
    hoverScale,
    hoverLift,
    hoverGlow,
    // Página
    pageTransition,
    // Acordeón
    accordionAnimation,
    // Texto
    textReveal,
    textSlide,
    // Imagen
    imageFloat,
    imageRotate,
    // Botón
    buttonPulse,
    buttonRipple,
    // Loading
    loadingSpinner,
    loadingDots
  };
};

export default useAnimations;
