// ═══════════════════════════════════════════════════════════════
//  ✉️  EMAILJS CONFIGURATION — 鴻昌辦館 Hung Cheong Store
//
//  HOW TO SET UP (Free — 200 emails/month):
//
//  1. Go to https://www.emailjs.com → Sign up free
//
//  2. Add an Email Service:
//     - Dashboard → Email Services → Add New Service
//     - Choose Gmail (or any provider)
//     - Connect your shop email account
//     - Copy the Service ID → paste as "serviceId" below
//
//  3. Create 6 Email Templates:
//     (Dashboard → Email Templates → Create New Template)
//     ⚠️  Every template: Settings → "To Email" must be set to {{to_email}}
//
//     TEMPLATE 1 — OTP Verification (fires during member registration)
//     Template name: "otp_verify"
//     Subject: 鴻昌辦館 — 您的驗證碼
//     Body (example):
//       親愛的 {{to_name}}，
//       您的驗證碼是：
//
//       {{otp_code}}
//
//       此驗證碼有效期為10分鐘，請勿與他人分享。
//       {{store_name}}
//     Copy the Template ID → paste as templates.otp below
//
//     TEMPLATE 2 — Welcome Email (fires after successful registration)
//     Template name: "welcome"
//     Subject: 歡迎加入鴻昌辦館會員！您已獲 HK$10 現金券
//     Body (example):
//       親愛的 {{to_name}}，
//       歡迎加入鴻昌辦館會員！您的帳戶已成功建立。
//       🎁 您已獲贈 HK$10 現金券！優惠券碼：HC10WELCOME
//       感謝您的支持！
//       {{store_name}}
//     Copy the Template ID → paste as templates.welcome below
//
//     TEMPLATE 3 — Order Confirmation (fires when customer places order)
//     Template name: "order_confirm"
//     Subject: 訂單確認 — 鴻昌辦館 #{{order_id}}
//     Body (example):
//       親愛的 {{to_name}}，
//       您的訂單已收到！
//       訂單編號: #{{order_id}}
//       商品: {{order_items}}
//       總計: {{order_total}}
//       取貨方式: {{order_method}}
//       如有查詢請WhatsApp聯絡我們。
//       {{store_name}}
//     Copy the Template ID → paste as templates.order below
//
//     TEMPLATE 4 — Shipping Notification (fired from Admin panel)
//     Template name: "shipping_notify"
//     Subject: 您的訂單已發出 — 鴻昌辦館 #{{order_id}}
//     Body (example):
//       親愛的 {{to_name}}，
//       您的訂單 #{{order_id}} 已發出！
//       速遞公司: {{courier_name}}
//       追蹤號碼: {{tracking_number}}
//       商品: {{order_items}}
//       總計: {{order_total}}
//       {{store_name}}
//     Copy the Template ID → paste as templates.shipped below
//
//     TEMPLATE 5 — Delivery Status Update (fires to customer on every status change)
//     Template name: "status_update"
//     Subject: 您的訂單更新 #{{order_id}} — {{status_label}}
//     Body (example):
//       親愛的 {{to_name}}，
//       您的訂單 #{{order_id}} 狀態已更新：
//
//       📦 {{status_label}}
//       {{status_message}}
//
//       商品: {{order_items}}
//       總計: {{order_total}}
//
//       如有查詢請WhatsApp聯絡我們。
//       {{store_name}}
//     Copy the Template ID → paste as templates.statusUpdate below
//
//     TEMPLATE 6 — Admin New Order Alert (fires to admin when order placed)
//     Template name: "admin_order_notify"
//     Subject: 🛒 新訂單 #{{order_id}} — 鴻昌辦館
//     Body (example):
//       🏪 鴻昌辦館 — 新訂單通知
//
//       訂單編號: #{{order_id}}
//
//       👤 客戶資料 Customer:
//         姓名: {{customer_name}}
//         電話: {{customer_phone}}
//         電郵: {{customer_email}}
//         地址: {{customer_addr}}
//
//       📦 商品 Items:
//       {{order_items}}
//
//       💰 金額 Amount:
//         小計: {{order_subtotal}}
//         折扣: {{order_discount}}
//         運費: {{order_shipping}}
//         總計: {{order_total}}
//
//       💳 付款方式: {{pay_method}}
//       🚚 送貨方式: {{delivery_method}}
//       🎁 優惠碼: {{coupon_code}}
//       📝 備註: {{order_note}}
//
//       請登入 Admin Panel 確認訂單。
//     IMPORTANT: Set "To Email" to {{to_email}} (your admin email)
//     Copy the Template ID → paste as templates.adminNotify below
//
//  4. Get your Public Key:
//     Dashboard → Account → General → Public Key
//     Paste as "publicKey" below
//
//  5. Set Admin Notification Email:
//     In Admin Panel → Settings → "Admin Notification Email"
//     Enter your email address → Save Settings
//     You will now receive an email every time a customer places an order.
//
//  6. Re-upload this file to GitHub after filling in the values
// ═══════════════════════════════════════════════════════════════

export default {
  publicKey:  "KlUQ_y5cyIyjfujg6",           // ✅ filled
  serviceId:  "service_9j3312h",             // ✅ filled
  templates: {
    welcome:      "YOUR_WELCOME_TEMPLATE_ID",       // (optional — add later)
    order:        "template_9lz676l",               // ✅ customer order confirmation
    shipped:      "YOUR_SHIPPED_TEMPLATE_ID",       // (optional — add later)
    otp:          "YOUR_OTP_TEMPLATE_ID",           // (optional — add later)
    statusUpdate: "YOUR_STATUS_UPDATE_TEMPLATE_ID",  // (optional — add later)
    adminNotify:  "template_9lz676l",               // ✅ new-order alert (same template)
  }
};
