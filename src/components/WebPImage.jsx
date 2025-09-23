import React, { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

const WebPImage = ({ 
  src, 
  alt, 
  fallbackSrc, 
  className = '', 
  ...props 
}) => {
  const [supportsWebP, setSupportsWebP] = useState(false);
  const [imageSrc, setImageSrc] = useState(fallbackSrc || src);

  useEffect(() => {
    // Verificar soporte de WebP
    const checkWebPSupport = () => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        setSupportsWebP(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    checkWebPSupport();
  }, []);

  useEffect(() => {
    if (supportsWebP && src) {
      // Si soporta WebP y tenemos una versión WebP, usarla
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      setImageSrc(webpSrc);
    } else {
      // Usar imagen original como fallback
      setImageSrc(fallbackSrc || src);
    }
  }, [supportsWebP, src, fallbackSrc]);

  return (
    <OptimizedImage
      src={imageSrc}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default WebPImage;
