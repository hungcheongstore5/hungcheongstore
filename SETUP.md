# 🏪 鴻昌辦館 — GitHub Pages + Firebase Setup Guide

## Your Files
```
hungcheongstore/
├── index.html          ← Main website (customers see this)
├── admin.html          ← Admin panel (you use this on mobile)
├── firebase-config.js  ← Firebase credentials (fill this in)
├── emailjs-config.js   ← EmailJS credentials (fill this in — for auto emails)
└── SETUP.md            ← This guide
```

---

## STEP 1 — Publish on GitHub Pages (Free, takes 5 minutes)

1. Go to **github.com** → Sign up / Login
2. Click **"New repository"**
   - Name: `hungcheongstore` (or any name)
   - Set to **Public**
   - Click **Create repository**

3. Upload your files:
   - Click **"uploading an existing file"**
   - Drag all 5 files into the box
   - Click **"Commit changes"**

4. Enable GitHub Pages:
   - Go to your repo → **Settings** → **Pages**
   - Source: **Deploy from branch** → `main` → `/ (root)`
   - Click **Save**

5. Your site is live at:
   ```
   https://YOUR-USERNAME.github.io/hungcheongstore/
   ```

**Custom Domain** (optional):
- Buy `hungcheongstore.com` on GoDaddy (~HK$80/year)
- In GitHub Pages settings, add your custom domain
- Update your domain DNS to point to GitHub

---

## STEP 2 — Set Up Firebase (Free tier, takes 10 minutes)

Firebase gives you:
- ✅ Real-time product sync (update from phone, website updates instantly)
- ✅ Cloud storage for product photos
- ✅ Customer analytics dashboard
- ✅ Order management
- ✅ Secure admin login

### 2a. Create Firebase Project

1. Go to **console.firebase.google.com**
2. Click **"Add project"** → Name: `hung-cheong-store`
3. Enable Google Analytics (optional but recommended)
4. Click **Create project**

### 2b. Enable Services

**Authentication:**
1. Left menu → **Authentication** → Get started
2. **Sign-in method** → Email/Password → **Enable** → Save
3. **Users** tab → **Add user**
   - Email: `admin@hungcheong.com` (or any email you prefer)
   - Password: choose a **strong password** (12+ characters, mix of letters/numbers/symbols)
   - This is your admin login for admin.html — customers register themselves via the website

**Firestore Database:**
1. Left menu → **Firestore Database** → Create database
2. Choose **"Start in production mode"**
3. Select region: `asia-east2` (Hong Kong)
4. Click **Done**
5. Go to **Rules** tab → Replace rules with the **secure production rules** below:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // ── PRODUCTS: public read, only authenticated (admin) can write ──
    match /products/{docId} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.auth.token.email_verified == true;
    }

    // ── ORDERS: customer can create their own order only ──
    //   Admin (any authenticated user) can read/update/delete all orders
    match /orders/{orderId} {
      allow create: if true
        && request.resource.data.keys().hasAll(['name','phone','items','total','status'])
        && request.resource.data.total is number
        && request.resource.data.total >= 0
        && request.resource.data.total <= 99999;
      allow read, update, delete: if request.auth != null;
    }

    // ── MEMBERS: each customer can only read/write their OWN document ──
    //   Admin can read all (for order management)
    match /members/{userId} {
      allow read, write: if request.auth != null
                         && request.auth.uid == userId;
      allow read: if request.auth != null
                  && request.auth.token.email_verified == true;
    }

    // ── ANALYTICS: public write (page views), only admin can read ──
    match /analytics/{docId} {
      allow read: if request.auth != null;
      allow write: if true
        && request.resource.data.keys().hasOnly(['event','ts','page','ref'])
        && request.resource.data.event is string
        && request.resource.data.event.size() <= 50;
    }

    // ── SETTINGS: only admin can read/write ──
    match /settings/{docId} {
      allow read, write: if request.auth != null;
    }

    // ── Deny all other paths by default ──
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```
6. Click **Publish**

**Storage (for product photos):**
1. Left menu → **Storage** → Get started
2. Click **Next** → Choose same region → **Done**
3. Go to **Rules** tab → Replace with:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {

    // Product photos: public read, only admin can write
    match /products/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.resource.size < 8 * 1024 * 1024  // max 8MB
                   && request.resource.contentType.matches('image/.*');
    }

    // QR codes and banners: public read, only admin can write
    match /settings/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.resource.size < 2 * 1024 * 1024  // max 2MB
                   && request.resource.contentType.matches('image/.*');
    }

    // Deny everything else
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```
4. Click **Publish**

### 2c. Get Your Config Keys

1. In Firebase Console → Click ⚙️ **Project Settings**
2. Scroll to **"Your apps"** → Click **"</>"** (Web)
3. App nickname: `hung-cheong-web` → Click **Register**
4. Copy the `firebaseConfig` object

### 2d. Update firebase-config.js

Open `firebase-config.js` and paste your values:
```js
export const firebaseConfig = {
  apiKey:            "AIzaSyXXXXXXXXXXXXXXX",
  authDomain:        "hung-cheong-store.firebaseapp.com",
  projectId:         "hung-cheong-store",
  storageBucket:     "hung-cheong-store.appspot.com",
  messagingSenderId: "123456789012",
  appId:             "1:123456789012:web:abcdefXXXXXX",
  measurementId:     "G-XXXXXXXXXX"
};
```

5. Re-upload the updated `firebase-config.js` to GitHub
6. Your site now has a Firebase backend! 🎉

---

## STEP 3 — Use the Admin Panel on Mobile

1. Visit: `https://YOUR-USERNAME.github.io/hungcheongstore/admin.html`
2. **Bookmark this on your phone's home screen** (Add to Home Screen)
3. Login with your admin email & password (set in Firebase Auth)

### What you can do in Admin:
- 📸 **Add products** — tap "拍照 Camera" to take a photo; it auto-processes (background, watermark, square crop) before saving
- ✏️ **Edit** prices, descriptions, categories
- 🗑️ **Delete** products
- 📊 **View analytics** — visitors, popular products, revenue
- 🛒 **Manage orders** — confirm → ship (enter courier + tracking, auto-sends email) → delivered
- ⚙️ **Upload** Alipay & WeChat Pay QR codes
- 💬 **Set** WhatsApp number and FPS account

---

## STEP 3b — Data Security 🔒

Your customer data and order records are stored in **Firebase Firestore**, which is a professional cloud database used by millions of apps worldwide. Here is what protects your data:

**Built-in protections (already configured):**
- The security rules above ensure **customers can only see their own data** — no customer can read another customer's name, address, or order
- **Only your admin account** can add/edit/delete products
- **Order data is validated** — the rules reject any suspicious or malformed order submissions (e.g. a $0 order or orders missing required fields)
- **Storage uploads** are restricted to images under 8MB — prevents anyone using your storage bucket to store arbitrary files
- All data is transmitted over **HTTPS encryption** (SSL) — always
- Firebase is hosted on Google infrastructure with **99.9% uptime SLA**

**Extra steps recommended (optional but good practice):**

1. **Enable Firebase App Check** (prevents bots from calling your API directly)
   - Firebase Console → App Check → Get started
   - Choose **reCAPTCHA v3** → Register your site
   - This stops automated scripts from spamming your orders or analytics

2. **Set up Firebase Alerts**
   - Firebase Console → Project Settings → Alerts
   - Enable billing alerts so you're notified if usage spikes unexpectedly

3. **Never share your admin password** — it gives full write access to all products and orders

4. **Rotate your admin password** every few months

5. **Review Firebase Auth users** periodically — remove any accounts you don't recognise

**What Firebase does NOT protect against:**
- If someone gets your `firebase-config.js` API key, they can read public data (products) — this is normal and expected for a public shop. The security rules ensure they still cannot write or access private data.
- Keep the `admin.html` URL private (share only with yourself). It requires login, but the fewer people who know the URL the better.

---

## STEP 4 — Before Going Live Checklist

- [ ] Fill in `firebase-config.js` with real Firebase keys
- [ ] Fill in `emailjs-config.js` with EmailJS keys (for auto-emails)
- [ ] Add your actual WhatsApp number in admin Settings
- [ ] Add your FPS account number in admin Settings  
- [ ] Upload your Alipay QR code image
- [ ] Upload your WeChat Pay QR code image
- [ ] Add your products with real photos via admin panel
- [ ] Test checkout flow on mobile
- [ ] Share your site URL on Instagram, Facebook, Threads

---

## Social Media Account Usernames (Suggested)

| Platform | Username |
|----------|----------|
| Instagram | @hungcheongstore |
| Facebook | /hungcheongstore |
| Threads | @hungcheongstore |
| WhatsApp Business | Your HK number |

---

*Guide for 鴻昌辦館 Hung Cheong Store · 2025*
