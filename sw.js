// Nombre de la caché
const CACHE_NAME = 'herbario-v1';

// Escuchar evento de instalación
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

// Escuchar evento de activación
self.addEventListener('activate', (event) => {
  console.log('Service Worker activo');
});

// Interceptar solicitudes de red (permite cargar archivos desde caché si estás offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
