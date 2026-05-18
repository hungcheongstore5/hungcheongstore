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
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
  measurementId:     "YOUR_MEASUREMENT_ID"   // optional, for Analytics
};
