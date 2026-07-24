import React, { useEffect, useState } from "react";

const DEFAULT_SETTINGS = {
  fontSize: 16,
  highContrast: false,
  reducedMotion: false,
  focusVisible: true,
};

const AccessibilityEnhancer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibility-settings");
    if (savedSettings) {
      try {
        setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) });
      } catch {
        /* ignore corrupt storage */
      }
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (settings.fontSize !== 16) {
      root.style.fontSize = `${settings.fontSize}px`;
    } else {
      root.style.removeProperty("font-size");
    }
    root.setAttribute("data-high-contrast", String(settings.highContrast));
    root.setAttribute("data-reduced-motion", String(settings.reducedMotion));
    root.setAttribute("data-focus-visible", String(settings.focusVisible));
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
  }, [settings]);

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => setSettings(DEFAULT_SETTINGS);

  return (
    <>
      <button
        type="button"
        className="accessibility-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Configuración de accesibilidad"
        aria-expanded={isOpen}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
        </svg>
      </button>

      {isOpen ? (
        <div className="accessibility-panel is-open">
          <div className="accessibility-panel__header">
            <h3>Configuración de Accesibilidad</h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="close-btn"
              aria-label="Cerrar panel de accesibilidad"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          <div className="accessibility-panel__content">
            <div className="setting-group">
              <label htmlFor="fontSize">Tamaño de fuente</label>
              <div className="font-size-controls">
                <button
                  type="button"
                  onClick={() =>
                    handleSettingChange("fontSize", Math.max(12, settings.fontSize - 2))
                  }
                  aria-label="Reducir tamaño de fuente"
                >
                  A-
                </button>
                <span>{settings.fontSize}px</span>
                <button
                  type="button"
                  onClick={() =>
                    handleSettingChange("fontSize", Math.min(24, settings.fontSize + 2))
                  }
                  aria-label="Aumentar tamaño de fuente"
                >
                  A+
                </button>
              </div>
            </div>

            <div className="setting-group">
              <label>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => handleSettingChange("highContrast", e.target.checked)}
                />
                Alto contraste
              </label>
            </div>

            <div className="setting-group">
              <label>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => handleSettingChange("reducedMotion", e.target.checked)}
                />
                Reducir animaciones
              </label>
            </div>

            <div className="setting-group">
              <label>
                <input
                  type="checkbox"
                  checked={settings.focusVisible}
                  onChange={(e) => handleSettingChange("focusVisible", e.target.checked)}
                />
                Indicador de foco visible
              </label>
            </div>

            <div className="setting-group">
              <button type="button" onClick={resetSettings} className="reset-btn">
                Restablecer configuración
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AccessibilityEnhancer;
