import React from 'react';
import { useLazyLoading } from '../hooks/useLazyLoading';

const LazySection = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  rootMargin = '50px',
  ...props 
}) => {
  const { elementRef, isIntersecting } = useLazyLoading({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  return (
    <div
      ref={elementRef}
      className={`${className} ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}
      {...props}
    >
      {isIntersecting && children}
    </div>
  );
};

export default LazySection;
