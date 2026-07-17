# 🏪 鴻昌辦館 Hung Cheong Store
## SEO & Social Media Setup Guide

---

## 🌐 PART 1: Website Hosting (上線步驟)

### Option A — Free Hosting (Recommended to start)
1. Go to **[Netlify.com](https://netlify.com)** → Sign up free
2. Drag & drop your `index.html` file onto the Netlify dashboard
3. Your site goes live instantly at a URL like `hungcheong.netlify.app`
4. Later you can connect a custom domain like `hungcheongstore.com`

### Option B — Get a Custom Domain
1. Buy domain at **[GoDaddy.com](https://godaddy.com)** or **[Namecheap.com](https://namecheap.com)**
   - Suggested: `hungcheongstore.com` or `hungcheong.hk`
   - Cost: ~HK$80–150/year
2. Connect the domain to Netlify in their "Domain Settings"

### Before Going Live — Update in Admin Panel
- ✅ WhatsApp number (tap ⚙️ Admin in footer)
- ✅ FPS account number
- ✅ Upload Alipay QR code image
- ✅ Upload WeChat Pay QR code image
- ✅ Add your real product photos and prices

---

## 🔍 PART 2: SEO (Search Engine Optimization)

### What's Already Built Into Your Website
- ✅ Title tag with keywords (香港零食, HK snacks, 鴻昌辦館)
- ✅ Meta description in Chinese + English
- ✅ Open Graph tags (for Facebook/IG sharing previews)
- ✅ Structured Data / JSON-LD (Google rich results)
- ✅ Mobile-responsive design (Google ranks mobile-first)
- ✅ Fast loading single-file site

### Additional SEO Steps

#### 1. Google Search Console
1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. Add your website URL
3. Verify ownership (Netlify makes this easy)
4. Submit your sitemap

#### 2. Google My Business (Free — Very Important!)
1. Go to **[business.google.com](https://business.google.com)**
2. Create a free listing for 鴻昌辦館
3. Add: photos, opening hours, payment methods, WhatsApp link
4. Customers can find you on Google Maps too

#### 3. Keywords to Use in Product Descriptions
Use these naturally in your product names and descriptions:
- 香港零食 / HK snacks
- 港式餅乾 / HK biscuits
- 香港手信 / HK souvenirs
- 零食禮盒 / snack gift box
- 網上購物 / online shopping
- 本地送遞 / local delivery

#### 4. Update Website Meta Tags
Open `index.html` and update line ~17:
```
<meta property="og:url" content="https://YOUR-ACTUAL-DOMAIN.com">
```

---

## 📸 PART 3: Instagram Setup (@hungcheongstore)

### Account Setup
1. Download Instagram app
2. Sign up with email: `hungcheong@youremail.com`
3. Username: **@hungcheongstore** (or @hungcheong.hk)
4. Switch to **Business Account** (Settings → Account → Switch to Professional)
5. Category: **Grocery Store** or **Food & Beverage**

### Profile Optimization
- **Profile Photo**: Shop logo or a hero product shot
- **Bio**: 
  ```
  🏪 鴻昌辦館 Hung Cheong Store
  🥜 香港零食 · 餅乾 · 酒類
  💳 Alipay · WeChat Pay · FPS
  💬 WhatsApp 查詢
  🔗 Link to website
  ```
- **Link in Bio**: Your website URL

### Content Strategy (Post 3–5x/week)
| Day | Content Type |
|-----|-------------|
| Mon | New product spotlight with price |
| Wed | "Customer favourite" repost / review |
| Fri | Weekend special / promotion |
| Sun | Behind the scenes / product sourcing |

### Instagram Reels Ideas
- "Unboxing" new stock arrivals
- "Try HK snacks for the first time" reactions
- Pairing suggestions (wine + snacks)
- "Pack an order with me" videos

### Hashtags to Use (copy & paste)
```
#鴻昌辦館 #香港零食 #HKsnacks #港式餅乾 #香港酒類
#hkfoodie #hongkongfood #hkgoodies #零食控 #餅乾
#香港手信 #網上購物 #本地送遞 #hkdelivery #foodstagram
```

---

## 📘 PART 4: Facebook Setup

### Page Setup
1. Go to **facebook.com/pages/create**
2. Page name: **鴻昌辦館 Hung Cheong Store**
3. Category: **Grocery Store**
4. Add profile photo + cover photo
5. Add website link, WhatsApp number, opening hours

### Facebook Shop (Sell directly on FB)
1. In Page settings → **Commerce** → Set up Shop
2. Add products with photos and prices
3. Link to your website for checkout

### Facebook Ads (When ready to advertise)
- Start with HK$50–100/day budget
- Target: Hong Kong, Age 25–55, interest in "Hong Kong food", "snacks", "wine"

### Post Ideas
- Product photos with price tags
- Customer reviews / testimonials
- Limited time offers
- Festival promotions (CNY, Mid-Autumn, Christmas)

---

## 🧵 PART 5: Threads Setup (@hungcheongstore)

### Setup
1. Download Threads app (linked to Instagram)
2. Login with your Instagram @hungcheongstore account
3. Profile auto-syncs from Instagram

### What to Post on Threads
- Casual, conversational posts
- "Today we just received new stock of..."
- Quick tips: "Best HK snack to pair with red wine..."
- Short polls: "Which do you prefer? 旺旺 vs 蝦片?"
- Reply to customers publicly (good for trust)

---

## 💬 PART 6: WhatsApp Business Setup

### Upgrade to WhatsApp Business (Free)
1. Download **WhatsApp Business** app
2. Set up business profile:
   - Business name: 鴻昌辦館 Hung Cheong Store
   - Category: Shopping & Retail
   - Description: 香港零食、餅乾、酒類網上購物
   - Website: your URL
   - Hours: your opening hours

### Useful Features
- **Quick Replies**: Set up shortcuts for common messages
  - `/price` → "您好！請問您想查詢哪款產品的價格？"
  - `/order` → "您好！請提供：1) 產品名稱及數量 2) 送遞地址 3) 付款方式"
  - `/payment` → "我們接受：💙 Alipay · 💚 WeChat Pay · 🏦 FPS 轉數快"
- **Catalog**: Add your products directly in WhatsApp
- **Away Message**: Set auto-reply during off-hours

---

## 📊 PART 7: Tracking & Analytics

### Google Analytics (Free)
1. Sign up at **[analytics.google.com](https://analytics.google.com)**
2. Get your Tracking ID (G-XXXXXXXX)
3. Add to your `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

### What to Track
- How many people visit your site
- Which products they click
- Where traffic comes from (IG, FB, Google)
- Best times/days for orders

---

## 🗓 PART 8: Launch Checklist

### Before Launch
- [ ] Add all products with real photos to Admin Panel
- [ ] Upload Alipay & WeChat Pay QR codes
- [ ] Set WhatsApp number and FPS account number
- [ ] Change admin password from default `admin123`
- [ ] Update website URL in meta tags
- [ ] Host website on Netlify (or similar)

### Week 1 After Launch
- [ ] Create Instagram @hungcheongstore
- [ ] Create Facebook Page
- [ ] Create Threads account
- [ ] Set up WhatsApp Business
- [ ] Post 3 times on IG with product photos
- [ ] Share website link in your personal WhatsApp groups

### Month 1
- [ ] Set up Google My Business
- [ ] Submit site to Google Search Console
- [ ] Collect first customer reviews
- [ ] Post consistently 3–5x/week on social media
- [ ] Consider first Facebook/IG ad campaign

---

*Guide prepared for 鴻昌辦館 Hung Cheong Store · April 2025*
