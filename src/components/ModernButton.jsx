import React from 'react';

const ModernButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'modern-button';
  const variantClasses = {
    primary: 'modern-button--primary',
    secondary: 'modern-button--secondary',
    accent: 'modern-button--accent',
    ghost: 'modern-button--ghost',
    outline: 'modern-button--outline'
  };
  const sizeClasses = {
    sm: 'modern-button--sm',
    md: 'modern-button--md',
    lg: 'modern-button--lg',
    xl: 'modern-button--xl'
  };

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'modern-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className="modern-button__content">
        {children}
      </span>
      <span className="modern-button__ripple"></span>
    </button>
  );
};

export default ModernButton;
