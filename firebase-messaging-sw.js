// ═══════════════════════════════════════════════════════════════
//  🔥 FIREBASE CONFIGURATION — 鴻昌辦館 Hung Cheong Store
//
//  HOW TO FILL THIS IN:
//  1. Go to https://console.firebase.google.com
//  2. Create a new project → name it "hung-cheong-store"
//  3. Click ⚙️ Project Settings → Your Apps → Add Web App
//  4. Copy the firebaseConfig values below
//  5. In Firebase Console, enable:
//     - Authentication → Email/Password
//     - Firestore Database (production mode, then update rules)
//     - Storage
//     - Analytics (optional)
//
//  SECURITY RULES for Firestore (paste in Firebase Console):
//  rules_version = '2';
//  service cloud.firestore {
//    match /databases/{database}/documents {
//      match /products/{doc} { allow read: if true; allow write: if request.auth != null; }
//      match /orders/{doc}   { allow read, write: if request.auth != null; allow create: if true; }
//      match /analytics/{doc}{ allow read: if request.auth != null; allow write: if true; }
//    }
//  }
// ═══════════════════════════════════════════════════════════════

export const firebaseConfig = {
  apiKey:            "AIzaSyCkexHYtnNVftxKMhyJbkd57dwAx3k3lo0",
  authDomain:        "hung-cheong-store.firebaseapp.com",
  projectId:         "hung-cheong-store",
  storageBucket:     "hung-cheong-store.firebasestorage.app",
  messagingSenderId: "975591755208",
  appId:             "1:975591755208:web:b84f65ff255fd35dda84fd",
  measurementId:     ""
};

// Also expose as the default export.
// index.html imports this file as `{ default: cfg }`, while admin.html
// imports it as `{ firebaseConfig }`. Providing both keeps each working.
export default firebaseConfig;
