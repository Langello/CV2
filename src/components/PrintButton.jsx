import React from 'react';
import { motion } from 'framer-motion';

const PrintButton = ({ className = '' }) => {
  const handlePrint = () => {
    try {
      const isMobile = window.innerWidth <= 768;
      
      // Crear una ventana nueva para la versión de impresión
      const printWindow = window.open('', '_blank');
      
      // Verificar si la ventana se abrió correctamente
      if (!printWindow) {
        if (isMobile) {
          alert('No se pudo abrir la ventana. Usa el menú "Compartir" de tu navegador para imprimir.');
        } else {
          alert('Por favor, permite ventanas emergentes para imprimir el CV');
        }
        return;
      }
      
      // Crear el HTML optimizado para impresión
      const printHTML = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CV - Gastón Langellotti</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #000000;
            background: white;
            padding: 20px;
          }
          
          .print-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
          }
          
          .print-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #000000;
          }
          
          .print-header img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-bottom: 15px;
            border: 3px solid #000000;
          }
          
          .print-header h1 {
            font-size: 2.5rem;
            color: #000000;
            margin-bottom: 5px;
            font-weight: bold;
          }
          
          .print-header h2 {
            font-size: 1.3rem;
            color: #000000;
            margin-bottom: 10px;
          }
          
          .print-header p {
            font-size: 1rem;
            color: #000000;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .print-section {
            margin-bottom: 25px;
            page-break-inside: avoid;
          }
          
          .print-section h3 {
            font-size: 1.4rem;
            color: #000000;
            margin-bottom: 15px;
            padding-bottom: 5px;
            border-bottom: 1px solid #000000;
            font-weight: bold;
          }
          
          .print-section ul {
            list-style: none;
            padding: 0;
          }
          
          .print-section li {
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
          }
          
          .print-section li::before {
            content: "•";
            color: #000000;
            font-weight: bold;
            position: absolute;
            left: 0;
          }
          
          .print-section b {
            color: #000000;
            font-weight: bold;
          }
          
          .print-section a {
            color: #000000;
            text-decoration: underline;
          }
          
          .two-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          
          .contact-info {
            background: #f5f5f5;
            padding: 15px;
            border: 1px solid #000000;
            margin-top: 20px;
          }
          
          .contact-info h4 {
            color: #000000;
            margin-bottom: 10px;
            font-size: 1.1rem;
          }
          
          .contact-info p {
            margin-bottom: 5px;
            font-size: 0.9rem;
          }
          
          @media print {
            body {
              padding: 0;
            }
            
            .print-container {
              max-width: none;
            }
            
            .print-section {
              page-break-inside: avoid;
            }
            
            .print-header {
              page-break-after: avoid;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-container">
          <div class="print-header">
            <h1>Gastón Langellotti</h1>
            <h2>Desarrollador web</h2>
            <p>Profesional proactivo con experiencia. Trabajo freelance respondiendo a los requerimientos del cliente.</p>
          </div>
          
          <div class="print-section">
            <h3>Experiencia Laboral</h3>
            <ul>
              <li><b>2024 - Actualidad: MetOcean | Desarrollador Full Stack</b></li>
              <li>Desarrollo completo de la web <a href="http://www.puertoquequenmetocean.com" target="_blank"><b>www.puertoquequenmetocean.com</b></a>, que muestra datos meteorológicos en tiempo real del puerto (olas, viento y marea).</li>
              <li>Instalación de servidor físico en el puerto y mantenimiento continuo de la plataforma.</li>
              <li>Desarrollo del backend y frontend completos.</li>
              
              <li><b>2024 - Actualidad: Groween | Desarrollador Full Stack</b></li>
              <li>Desarrollo completo de la web <a href="https://www.groween.mx" target="_blank"><b>www.groween.mx</b></a>, plataforma de renta de ropa de México.</li>
              <li>Implementación de login, envío de emails y pasarela de pagos con PayPal.</li>
              <li>Gestión de stock mediante un panel de administración para seguimiento de prendas y órdenes.</li>
              
              <li><b>2024 - Actualidad: Dedo.Top | Desarrollador Full Stack</b></li>
              <li>Desarrollo completo de la web <a href="https://www.dedo.top" target="_blank"><b>www.dedo.top</b></a>, plataforma para compartir viajes en Argentina.</li>
              <li>Implementación de sistema de publicación y búsqueda de viajes con notificaciones y alertas.</li>
              <li>Integración de pasarela de pagos para suscripciones premium.</li>
              
              <li><b>2023 - Actualidad: Cliente particular | Desarrollador de Software</b></li>
              <li>Desarrollo completo de un sistema predictor de marea para el uso interno del puerto.</li>
            </ul>
          </div>
          
          <div class="print-section">
            <h3>Educación</h3>
            <ul>
              <li><b>2023:</b> Bootcamp de Desarrollo Web Avanzado, en la UTN, Facultad Regional de Buenos Aires.</li>
              <li><b>2022:</b> Full Stack Desarrollo Web (JavaScript/Node JS), en Agencia a lo largo de la vida.</li>
              <li><b>2021:</b> Full Stack Java, en Agencia a lo largo de la vida.</li>
              <li><b>2023:</b> Argentina programa 4.0 parte 2, en UTN. Facultad Regional de Buenos Aires.</li>
              <li><b>2022:</b> Programación 2, en Academia BA.</li>
              <li><b>2022:</b> Ciencia de datos 2, en Academia BA.</li>
              <li><b>2022:</b> Inglés para programadores, en Pearson English.</li>
              <li><b>2023:</b> Diseño UX/UI, en Agencia a lo largo de la vida.</li>
            </ul>
          </div>
          
          <div class="print-section">
            <h3>Idiomas</h3>
            <ul>
              <li><b>Inglés:</b> B1.</li>
            </ul>
          </div>
          
          <div class="print-section">
            <h3>Habilidades</h3>
            <div class="two-columns">
              <ul>
                <li>Desarrollo web frontend con Angular</li>
                <li>Desarrollo web backend con Node.js (TypeScript)</li>
                <li>Base de datos con MySQL y MongoDB</li>
                <li>Versionamiento con Git, GitHub y GitLab</li>
              </ul>
              <ul>
                <li>Lenguaje de programación: JavaScript</li>
                <li>Prototipado y diseño: Figma</li>
                <li>Despliegue en la nube: Vercel</li>
                <li>Herramientas de administración de proyectos: Trello, Slack, Jira</li>
              </ul>
            </div>
          </div>
          
          <div class="contact-info">
            <h4>Información de Contacto</h4>
            <p><b>Email:</b> gastonchavo@gmail.com</p>
            <p><b>WhatsApp:</b> 1140277885</p>
            <p><b>LinkedIn:</b> linkedin.com/in/gastonlangellotti</p>
            <p><b>GitHub:</b> github.com/langello</p>
            <p><b>Ubicación:</b> Córdoba, Argentina</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
      // Escribir el contenido en la ventana
      printWindow.document.open();
      printWindow.document.write(printHTML);
      printWindow.document.close();
      
      // Esperar a que se cargue y luego imprimir
      printWindow.onload = () => {
        setTimeout(() => {
          if (isMobile) {
            // En móviles, mostrar mensaje con botón aceptar
            const message = document.createElement('div');
            message.innerHTML = `
              <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; z-index: 9999; text-align: center; box-shadow: 0 8px 24px rgba(0,0,0,0.4); max-width: 90%; width: 300px;">
                <strong>📱 Versión para imprimir</strong><br>
                Usa el menú "Compartir" → "Imprimir" de tu navegador<br><br>
                <button onclick="this.parentElement.parentElement.remove()" style="background: white; color: #667eea; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                  Entendido
                </button>
              </div>
            `;
            printWindow.document.body.appendChild(message);
          } else {
            // En desktop, comportamiento normal
            printWindow.print();
            printWindow.close();
          }
        }, 500);
      };
      
      // Manejar errores de carga
      printWindow.onerror = () => {
        alert('Error al cargar la versión de impresión. Intenta nuevamente.');
        printWindow.close();
      };
      
    } catch (error) {
      console.error('Error al imprimir:', error);
      alert('Error al imprimir el CV. Por favor, intenta nuevamente.');
    }
  };

  return (
    <motion.button
      className={`print-button ${className}`}
      onClick={handlePrint}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      aria-label="Imprimir CV"
      title="Imprimir CV"
    >
      <motion.svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <path d="M18 3H6v4H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-2V3zM8 5h8v2H8V5zm8 12.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V14H9v3.5c0 .28-.22.5-.5.5S8 17.78 8 17.5V14H6V9h12v5h-2v3.5z"/>
        <circle cx="18" cy="11" r="1"/>
      </motion.svg>
      <span>Imprimir CV</span>
    </motion.button>
  );
};

export default PrintButton;
