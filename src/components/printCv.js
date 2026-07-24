const PRINT_HTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV - Gastón Langellotti</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #000;
      background: white;
      padding: 20px;
    }
    .print-container { max-width: 800px; margin: 0 auto; background: white; }
    .print-header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #000;
    }
    .print-header h1 { font-size: 2.5rem; margin-bottom: 5px; font-weight: bold; }
    .print-header h2 { font-size: 1.3rem; margin-bottom: 10px; }
    .print-header p { font-size: 1rem; max-width: 600px; margin: 0 auto; }
    .print-section { margin-bottom: 25px; page-break-inside: avoid; }
    .print-section h3 {
      font-size: 1.4rem;
      margin-bottom: 15px;
      padding-bottom: 5px;
      border-bottom: 1px solid #000;
      font-weight: bold;
    }
    .print-section ul { list-style: none; padding: 0; }
    .print-section li { margin-bottom: 8px; padding-left: 20px; position: relative; }
    .print-section li::before {
      content: "•";
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    .print-section a { color: #000; text-decoration: underline; }
    .two-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .contact-info {
      background: #f5f5f5;
      padding: 15px;
      border: 1px solid #000;
      margin-top: 20px;
    }
    .contact-info h4 { margin-bottom: 10px; font-size: 1.1rem; }
    .contact-info p { margin-bottom: 5px; font-size: 0.9rem; }
    @media print {
      body { padding: 0; }
      .print-container { max-width: none; }
      .print-section { page-break-inside: avoid; }
      .print-header { page-break-after: avoid; }
    }
  </style>
</head>
<body>
  <div class="print-container">
    <div class="print-header">
      <h1>Gastón Langellotti</h1>
      <h2>Desarrollador Full Stack</h2>
      <p><b>Dedo.top®</b> — Fundador</p>
      <p>Freelance. Construyo productos web de punta a punta: desde plataformas de consumo colaborativo y datos en tiempo real hasta pagos, check-in y gestión de eventos.</p>
    </div>

    <div class="print-section">
      <h3>Experiencia Laboral</h3>
      <ul>
        <li><b>2025 - Actualidad: CompraViva | Desarrollador Full Stack principal</b></li>
        <li>Desarrollo y mantenimiento de <a href="https://www.compraviva.ar" target="_blank" rel="noreferrer"><b>www.compraviva.ar</b></a>, plataforma de consumo colaborativo para pedidos de alimentos agroecológicos y gestión de nodos de entrega.</li>
        <li>Responsable del producto de punta a punta: frontend, backend y evolutivo continuo según las necesidades del negocio.</li>
        <li><b>2024 - Actualidad: MetOcean | Desarrollador Full Stack</b></li>
        <li>Desarrollo completo de la web <a href="http://www.puertoquequenmetocean.com" target="_blank" rel="noreferrer"><b>www.puertoquequenmetocean.com</b></a>, que muestra datos meteorológicos en tiempo real del puerto (olas, viento y marea).</li>
        <li>Instalación de servidor físico en el puerto y mantenimiento continuo de la plataforma.</li>
        <li>Desarrollo del backend y frontend completos.</li>
        <li><b>2024 - Actualidad: Dedo.top® | Fundador y Desarrollador Full Stack</b></li>
        <li>Desarrollo del ecosistema <a href="https://www.dedo.top" target="_blank" rel="noreferrer"><b>Dedo.top®</b></a>, con tres productos: viajes compartidos, QR para entradas de eventos y check-in.</li>
        <li><b>2025 - Actualidad: El Chañar | Desarrollador Full Stack</b></li>
        <li>Desarrollo y mantenimiento de <a href="https://www.chaniar.com.ar" target="_blank" rel="noreferrer"><b>www.chaniar.com.ar</b></a>, sitio web de apart y cabañas en Villa General Belgrano con reserva directa.</li>
        <li><b>2024 - 2025: Groween | Desarrollador Full Stack</b></li>
        <li>Desarrollo completo de <a href="https://groween-web.vercel.app/" target="_blank" rel="noreferrer"><b>groween-web.vercel.app</b></a>, plataforma de renta de ropa infantil en México.</li>
        <li>Implementación de login, envío de emails, PayPal y panel de administración de stock.</li>
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
          <li>Frontend con Angular</li>
          <li>Backend con Node.js y Express (TypeScript)</li>
          <li>Bases de datos: MongoDB y MySQL</li>
          <li>JavaScript / TypeScript</li>
        </ul>
        <ul>
          <li>Versionamiento con Git, GitHub y GitLab</li>
          <li>Prototipado y diseño: Figma</li>
          <li>Despliegue: Vercel y Railway</li>
          <li>Gestión de proyectos: Trello, Slack, Jira</li>
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
</html>`;

export function writePrintCv(printWindow) {
  const isMobile = window.innerWidth <= 768;

  printWindow.document.open();
  printWindow.document.write(PRINT_HTML);
  printWindow.document.close();

  printWindow.onload = () => {
    setTimeout(() => {
      if (isMobile) {
        const message = printWindow.document.createElement("div");
        message.innerHTML = `
          <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #1e293b; color: white; padding: 20px; border-radius: 12px; z-index: 9999; text-align: center; max-width: 90%; width: 300px;">
            <strong>Versión para imprimir</strong><br>
            Usa el menú "Compartir" → "Imprimir" de tu navegador<br><br>
            <button type="button" onclick="this.closest('div').parentElement.remove()" style="background: white; color: #1e293b; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer;">
              Entendido
            </button>
          </div>
        `;
        printWindow.document.body.appendChild(message);
      } else {
        printWindow.print();
        printWindow.close();
      }
    }, 500);
  };

  printWindow.onerror = () => {
    alert("Error al cargar la versión de impresión. Intenta nuevamente.");
    printWindow.close();
  };
}
