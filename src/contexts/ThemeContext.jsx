import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Verificar preferencia del sistema
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('cv-theme');
      if (savedTheme) {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [customTheme, setCustomTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cv-custom-theme');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  useEffect(() => {
    // Guardar tema en localStorage
    localStorage.setItem('cv-theme', theme);
    
    // Aplicar tema al documento
    document.documentElement.setAttribute('data-theme', theme);
    
    // Actualizar meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'dark' ? '#0f172a' : '#ffffff';
    }
  }, [theme]);

  useEffect(() => {
    // Guardar tema personalizado
    if (customTheme) {
      localStorage.setItem('cv-custom-theme', JSON.stringify(customTheme));
    } else {
      localStorage.removeItem('cv-custom-theme');
    }
  }, [customTheme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setCustomThemeColors = (colors) => {
    setCustomTheme(colors);
  };

  const resetCustomTheme = () => {
    setCustomTheme(null);
  };

  const value = {
    theme,
    customTheme,
    toggleTheme,
    setCustomThemeColors,
    resetCustomTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
