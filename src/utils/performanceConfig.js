export const PERFORMANCE_CONFIG = {
  // Configuración de lazy loading
  lazyLoading: {
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true
  },
  
  // Configuración de imágenes
  images: {
    formats: ['webp', 'jpg', 'png'],
    quality: 85,
    sizes: {
      thumbnail: '150x150',
      medium: '300x300',
      large: '600x600'
    }
  },
  
  // Configuración de cache
  cache: {
    version: 'v1',
    maxAge: 86400, // 24 horas
    strategies: {
      static: 'cacheFirst',
      api: 'networkFirst',
      images: 'cacheFirst'
    }
  },
  
  // Configuración de preload
  preload: {
    critical: [
      '/yoCV.png',
      '/contento.ico'
    ],
    fonts: [
      'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2'
    ]
  },
  
  // Configuración de service worker
  serviceWorker: {
    updateInterval: 60000, // 1 minuto
    cacheName: 'cv-gaston-langellotti',
    urlsToCache: [
      '/',
      '/static/js/bundle.js',
      '/static/css/main.css',
      '/yoCV.png',
      '/contento.ico',
      '/triste.ico',
      '/manifest.json'
    ]
  },
  
  // Configuración de code splitting
  codeSplitting: {
    chunks: {
      vendor: ['react', 'react-dom', 'react-bootstrap'],
      components: ['./components/Experience', './components/Education'],
      utils: ['./utils/seoConfig', './utils/performanceConfig']
    }
  }
};

export default PERFORMANCE_CONFIG;
