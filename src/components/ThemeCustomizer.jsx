import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import ModernButton from './ModernButton';

const ThemeCustomizer = ({ isOpen, onClose }) => {
  const { customTheme, setCustomThemeColors, resetCustomTheme } = useTheme();
  const [colors, setColors] = useState({
    primary: customTheme?.primary || '#0ea5e9',
    secondary: customTheme?.secondary || '#64748b',
    accent: customTheme?.accent || '#d946ef',
    background: customTheme?.background || '#f8fafc',
    surface: customTheme?.surface || '#ffffff',
    text: customTheme?.text || '#1e293b'
  });

  const handleColorChange = (colorType, value) => {
    setColors(prev => ({
      ...prev,
      [colorType]: value
    }));
  };

  const handleApply = () => {
    setCustomThemeColors(colors);
    onClose();
  };

  const handleReset = () => {
    resetCustomTheme();
    setColors({
      primary: '#0ea5e9',
      secondary: '#64748b',
      accent: '#d946ef',
      background: '#f8fafc',
      surface: '#ffffff',
      text: '#1e293b'
    });
  };

  const colorPresets = [
    {
      name: 'Ocean',
      colors: {
        primary: '#0ea5e9',
        secondary: '#64748b',
        accent: '#06b6d4',
        background: '#f0f9ff',
        surface: '#ffffff',
        text: '#0f172a'
      }
    },
    {
      name: 'Sunset',
      colors: {
        primary: '#f59e0b',
        secondary: '#6b7280',
        accent: '#ef4444',
        background: '#fef3c7',
        surface: '#ffffff',
        text: '#1f2937'
      }
    },
    {
      name: 'Forest',
      colors: {
        primary: '#10b981',
        secondary: '#6b7280',
        accent: '#059669',
        background: '#ecfdf5',
        surface: '#ffffff',
        text: '#064e3b'
      }
    },
    {
      name: 'Purple',
      colors: {
        primary: '#8b5cf6',
        secondary: '#6b7280',
        accent: '#a855f7',
        background: '#faf5ff',
        surface: '#ffffff',
        text: '#581c87'
      }
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="theme-customizer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="theme-customizer"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="theme-customizer__header">
              <h3>Personalizar Tema</h3>
              <button onClick={onClose} className="close-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z" />
                </svg>
              </button>
            </div>

            <div className="theme-customizer__content">
              <div className="color-section">
                <h4>Colores Personalizados</h4>
                <div className="color-grid">
                  {Object.entries(colors).map(([key, value]) => (
                    <div key={key} className="color-input">
                      <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                      <div className="color-picker-wrapper">
                        <input
                          type="color"
                          value={value}
                          onChange={(e) => handleColorChange(key, e.target.value)}
                          className="color-picker"
                        />
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleColorChange(key, e.target.value)}
                          className="color-text"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="presets-section">
                <h4>Temas Predefinidos</h4>
                <div className="presets-grid">
                  {colorPresets.map((preset) => (
                    <motion.button
                      key={preset.name}
                      className="preset-button"
                      onClick={() => setColors(preset.colors)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="preset-colors">
                        {Object.values(preset.colors).map((color, index) => (
                          <div
                            key={index}
                            className="preset-color"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span>{preset.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <div className="theme-customizer__footer">
              <ModernButton
                variant="outline"
                size="sm"
                onClick={handleReset}
              >
                Restablecer
              </ModernButton>
              <ModernButton
                variant="primary"
                size="sm"
                onClick={handleApply}
              >
                Aplicar
              </ModernButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeCustomizer;
