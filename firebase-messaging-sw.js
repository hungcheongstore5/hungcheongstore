// ═══════════════════════════════════════════════════════════════
//  🔔  Firebase Cloud Messaging Service Worker
//      鴻昌辦館 Hung Cheong Store
//
//  This file MUST live at the root of your site (same folder as
//  index.html). GitHub Pages serves it from the repo root.
//
//  HOW IT WORKS:
//  1. The storefront requests notification permission from the user
//  2. FCM gives the browser a unique push token
//  3. The token is saved to Firestore (attached to the order)
//  4. When admin updates order status, a push is sent via FCM API
//  5. This service worker shows the notification even when the
//     browser tab is closed / in background
// ═══════════════════════════════════════════════════════════════

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

let _initialized = false;

// The main page sends the Firebase config via postMessage so we
// don't have to duplicate it here.
self.addEventListener('message', event => {
  if (event.data?.type === 'FCM_INIT' && !_initialized) {
    try {
      _initialized = true;
      firebase.initializeApp(event.data.config);
      const messaging = firebase.messaging();

      // Background / closed-tab notifications
      messaging.onBackgroundMessage(payload => {
        const n   = payload.notification || {};
        const data= payload.data         || {};
        self.registration.showNotification(n.title || '鴻昌辦館 Hung Cheong Store', {
          body:   n.body  || '',
          icon:   n.icon  || './icon-192.png',
          badge:  './icon-192.png',
          tag:    data.orderId || 'hc-update',
          data:   { url: data.url || '/', orderId: data.orderId || '' },
          requireInteraction: false,
          vibrate: [200, 100, 200],
        });
      });
    } catch(e) { console.warn('[SW] FCM init error:', e); }
  }
});

// Clicking the notification opens / focuses the site
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      // If a window with this URL is already open, focus it
      const existing = cs.find(c => c.url.startsWith(self.location.origin));
      if (existing && 'focus' in existing) return existing.focus();
      return clients.openWindow(targetUrl);
    })
  );
});

// ═══════════════════════════════════════════════════════════════
//  📲  PWA offline shell (added) — lets the site install as an app
//      and load the shell when offline. Firebase/CDN requests are
//      left untouched (network only).
// ═══════════════════════════════════════════════════════════════
const HC_CACHE = 'hc-shell-v1';
const HC_ASSETS = ['./', './index.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(HC_CACHE).then(c => c.addAll(HC_ASSETS)).catch(() => {}));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== HC_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return; // never touch Firebase / CDN / APIs

  // Navigations: network-first (shoppers get the latest), cached shell as offline fallback
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  // Same-origin static assets (icons, manifest): cache-first
  if (['image', 'style', 'script', 'font'].includes(req.destination)) {
    event.respondWith(
      caches.match(req).then(hit => {
        if (hit) return hit;
        return fetch(req).then(res => {
          if (res && res.ok) { const clone = res.clone(); caches.open(HC_CACHE).then(c => c.put(req, clone)).catch(() => {}); }
          return res;
        });
      })
    );
  }
});
