# Mejoras de rendimiento (aplicadas)

## Cambios principales
- Sin Bootstrap CSS / react-bootstrap: accordion propio
- Sin Font Awesome kit: SVG inline en el footer
- Fuentes reducidas: Inter 400/600 + Poppins 600/700
- Sin framer-motion: CSS transitions
- Preloader eliminado (ya no bloquea LCP)
- Imágenes: yoCV.webp (~10 KB) + logo Dedo webp; assets muertos borrados
- Service Worker legacy desregistrado (paths rotos en /CV2/)
- homepage corregido a `https://langello.github.io/CV2`

## Build (gzip, jul 2026)
- JS: ~60 KB (antes ~105 KB)
- CSS: ~5.5 KB (antes ~38 KB)
