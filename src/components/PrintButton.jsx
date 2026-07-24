import React, { useState } from "react";

const PrintButton = ({ className = "" }) => {
  const [loading, setLoading] = useState(false);

  const handlePrint = async () => {
    // Abrir de inmediato (evita bloqueo de popups con await)
    const printWindow = window.open("", "_blank");
    const isMobile = window.innerWidth <= 768;

    if (!printWindow) {
      if (isMobile) {
        alert(
          'No se pudo abrir la ventana. Usa el menú "Compartir" de tu navegador para imprimir.'
        );
      } else {
        alert("Por favor, permite ventanas emergentes para imprimir el CV");
      }
      return;
    }

    setLoading(true);
    try {
      const { writePrintCv } = await import("./printCv");
      writePrintCv(printWindow);
    } catch (error) {
      console.error("Error al imprimir:", error);
      printWindow.close();
      alert("Error al imprimir el CV. Por favor, intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      className={`print-button ${className}`.trim()}
      onClick={handlePrint}
      disabled={loading}
      aria-label="Imprimir CV"
      title="Imprimir CV"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 3H6v4H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-2V3zM8 5h8v2H8V5zm8 12.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V14H9v3.5c0 .28-.22.5-.5.5S8 17.78 8 17.5V14H6V9h12v5h-2v3.5z" />
        <circle cx="18" cy="11" r="1" />
      </svg>
      <span>{loading ? "Cargando…" : "Imprimir CV"}</span>
    </button>
  );
};

export default PrintButton;
