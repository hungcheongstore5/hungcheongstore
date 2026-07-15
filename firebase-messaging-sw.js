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
