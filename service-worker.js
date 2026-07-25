const CACHE = 'spartan-forge-v1-05-gerador-reference';
const APP_SHELL = [
  './.nojekyll',
  './BUILD-V1.01.txt',
  './BUILD-V1.02.txt',
  './BUILD-V1.03.txt',
  './BUILD-V1.05.txt',
  './BUILD-V1.txt',
  './audio/complete.mp3',
  './audio/go-impact.mp3',
  './audio/go.mp3',
  './audio/halfway.mp3',
  './audio/last10.mp3',
  './audio/one.mp3',
  './audio/ready.mp3',
  './audio/rest-signal.mp3',
  './audio/rest.mp3',
  './audio/three.mp3',
  './audio/two.mp3',
  './bg-cardio.jpg',
  './bg-diario.jpg',
  './bg-evolucao.jpg',
  './bg-hiit.jpg',
  './bg-historico.jpg',
  './bg-musculacao.jpg',
  './gerador-spartan-banner.png',
  './hero-top-v8.jpg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './index.html',
  './manifest.webmanifest',
  './memorial-historico-v14.jpg',
  './mission-weight-clean-v812.jpg',
  './mission-weight-clean-v813.jpg',
  './mission-weight-clean-v814.jpg',
  './music-deezer-icon.svg',
  './perfil-spartan-v11.jpg',
  './resumo-spartan-clean-v810.jpg',
  './scene-cardio.jpg',
  './scene-diario.jpg',
  './scene-evolucao.jpg',
  './scene-hiit.jpg',
  './scene-historico.jpg',
  './scene-musculacao.jpg',
  './skin-cardio.jpg',
  './skin-diario.jpg',
  './skin-evolucao.jpg',
  './skin-hiit.jpg',
  './skin-historico.jpg',
  './skin-medicoes.jpg',
  './skin-musculacao.jpg',
  './splash-helmet-v108.png',
  './strava-config.js'
];

self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('message', event => { if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', event => {
 if (event.request.method !== 'GET') return;
 const nav = event.request.mode === 'navigate';
 event.respondWith(fetch(event.request, {cache:'no-store'}).then(r => { if(r && r.ok) caches.open(CACHE).then(c=>c.put(event.request,r.clone())); return r; }).catch(async()=> (await caches.match(event.request)) || (nav ? caches.match('./index.html') : Response.error())));
});
