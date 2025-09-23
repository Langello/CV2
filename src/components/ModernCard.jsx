import React from 'react';

const ModernCard = ({ 
  children, 
  variant = 'default', 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseClasses = 'modern-card';
  const variantClasses = {
    default: 'modern-card--default',
    glass: 'modern-card--glass',
    gradient: 'modern-card--gradient',
    outline: 'modern-card--outline'
  };

  const cardClasses = [
    baseClasses,
    variantClasses[variant],
    hover ? 'modern-card--hover' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      <div className="modern-card__content">
        {children}
      </div>
    </div>
  );
};

export default ModernCard;
