# 🌾 Shree Ram Traders - Website

> Premium Rice Wholesaler & Retailer in Raxaul, Bihar

---

## 🚀 QUICK START - Vercel Deployment

**✅ FIXED:** This project is now configured for single Vercel deployment (like Next.js) with working WhatsApp integration and Google-compatible favicon.

### ⚡ 3-Step Deploy

1. **Generate PNG Icons:** Open `icon-generator.html` in browser
2. **Set Environment Variables:** Add them to Vercel Dashboard  
3. **Deploy:** `git push` or `vercel --prod`

### 👉 **[START HERE: QUICKSTART.md](QUICKSTART.md)**

---

## 📚 Complete Documentation

| Guide | Purpose | When to Read |
|-------|---------|--------------|
| **[QUICKSTART.md](QUICKSTART.md)** | 3-step deployment guide | ⭐ **Start here** |
| **[PRINTABLE_CHECKLIST.md](PRINTABLE_CHECKLIST.md)** | Quick checklist (print & follow) | Before deploying |
| **[COMPLETE_FIX_SUMMARY.md](COMPLETE_FIX_SUMMARY.md)** | What was fixed and why | Background info |
| **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** | Complete Vercel setup | Detailed setup |
| **[FAVICON_SETUP_GUIDE.md](FAVICON_SETUP_GUIDE.md)** | Fix Google Search favicon | Favicon issues |
| **[TECHNICAL_NOTES.md](TECHNICAL_NOTES.md)** | Architecture & technical details | Deep dive |
| **[icon-generator.html](icon-generator.html)** | Generate PNG icons from logo | Icon creation |

---

## 🎯 What This Project Includes

### Features
- ✅ Modern React/Vite frontend
- ✅ Vercel serverless API functions
- ✅ WhatsApp Business API integration
- ✅ Email notifications (Gmail SMTP)
- ✅ Contact form with dual notifications
- ✅ Google-optimized SEO
- ✅ PWA-ready with manifest
- ✅ Mobile-responsive design
- ✅ Google-compatible PNG favicons

### Tech Stack
- **Frontend:** React 18, TypeScript, Vite
- **UI:** TailwindCSS, Shadcn/ui components
- **Backend:** Vercel Serverless Functions
- **Notifications:** WhatsApp Business API, Nodemailer
- **Deployment:** Vercel (single deployment)

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ & npm
- Git

### Setup

```bash
# Clone repository
git clone <YOUR_GIT_URL>
cd shree-ram-rice-hub

# Install dependencies
npm install

# Create .env file (for local testing)
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm test             # Run tests
```

---

## 🌐 Deployment to Vercel

### Method 1: GitHub Auto-Deploy (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables on Vercel Dashboard
4. Every push auto-deploys

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

### Required Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECIPIENT=recipient@gmail.com
WHATSAPP_TOKEN=your_whatsapp_business_token
WHATSAPP_PHONE_ID=your_phone_number_id
WHATSAPP_RECIPIENT=919430946499
NODE_ENV=production
```

**💡 Get Gmail App Password:** https://myaccount.google.com/apppasswords

---

## 📱 Features & Integrations

### Contact Form
- Dual notification system (WhatsApp + Email)
- Real-time validation
- Success/error toast notifications
- Graceful degradation (works if one method fails)

### WhatsApp Integration
- Automatic notifications on form submission
- Uses WhatsApp Business API (Meta Graph API)
- Formatted message with customer details
- Click-to-call phone numbers

### Email Notifications
- Professional HTML email template
- Gmail SMTP with SSL (port 465)
- Fallback if WhatsApp fails
- Formatted for easy reading

### SEO Optimization
- Structured data (Schema.org)
- Open Graph tags
- Twitter Cards
- Sitemap & robots.txt
- Google-compatible favicons (PNG format)

---

## 🎨 Favicon Setup (Google Search Console)

### Why PNG Format?
Google Search Console **requires PNG format** (not WebP) for favicons. We've updated all favicon references to PNG.

### Generate Icons

1. **Quick Method:** Open `icon-generator.html` in browser
2. **Alternative:** Use https://realfavicongenerator.net/

### Required Icons (Place in `/public/`)

- `icon-16x16.png` - 16×16 px
- `icon-32x32.png` - 32×32 px
- `icon-192x192.png` - 192×192 px
- `icon-512x512.png` - 512×512 px ⭐ **Most Important for Google**
- `apple-touch-icon.png` - 180×180 px

### Timeline
- **Immediate:** Favicon shows in browser tabs
- **2-4 weeks:** Favicon appears in Google Search results

📖 **Full Guide:** [FAVICON_SETUP_GUIDE.md](FAVICON_SETUP_GUIDE.md)

---

## 🏗️ Project Structure

```
shree-ram-rice-hub/
├── api/
│   └── contact.js              # Vercel serverless function
├── public/
│   ├── favicon.ico
│   ├── icon-*.png              # PNG icons (generate these)
│   ├── logo.webp
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── landing/            # Landing page sections
│   │   └── ui/                 # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Page components
│   └── App.tsx
├── index.html
├── vercel.json                 # Vercel configuration
├── package.json
└── vite.config.ts
```

---

## 🧪 Testing

### Test Contact Form
1. Open website
2. Fill out contact form
3. Verify WhatsApp notification received
4. Verify email notification received

### Test API Endpoint

```powershell
curl -X POST https://www.shreeramtradersrxl.in/api/contact `
  -H "Content-Type: application/json" `
  -d '{"name":"Test","phone":"1234567890","message":"Test message"}'
```

Expected response:
```json
{
  "success": true,
  "message": "Enquiry sent successfully!",
  "methods": {
    "whatsapp": true,
    "email": true
  }
}
```

---

## 🔍 Debugging

### View Vercel Logs
1. Vercel Dashboard → Your Project
2. Deployments → Latest deployment
3. Functions tab → `/api/contact`
4. View real-time logs

### Common Issues

| Issue | Solution |
|-------|----------|
| Form not working | Check environment variables on Vercel |
| WhatsApp not sending | Verify token hasn't expired |
| Email not sending | Use Gmail app-specific password |
| Favicon not on Google | Wait 2-4 weeks, must be 512x512 PNG |
| Build fails | Check build logs, test locally first |

---

## 📊 Performance

### Vercel Free Tier Limits
- **Bandwidth:** 100 GB/month
- **Function Execution:** 100 GB-Hours/month
- **Requests:** Unlimited

### Expected Usage (This Project)
- Contact form: ~100-500 requests/month
- Function execution: ~1-2 seconds per request
- **Verdict:** Well within free tier ✅

---

## 🔐 Security

### Best Practices Implemented
- Environment variables not committed to Git
- CORS headers properly configured
- Input validation on contact form
- HTTPS enforced
- Security headers set in `vercel.json`
- Gmail app-specific passwords (not regular passwords)

---

## 📈 SEO & Marketing

### Implemented
- ✅ Structured data (Schema.org LocalBusiness)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Cards
- ✅ Sitemap (sitemap.xml)
- ✅ Robots.txt
- ✅ Mobile-responsive design
- ✅ Fast load times (Vite + Vercel CDN)
- ✅ Google-compatible favicon

### Next Steps
1. Submit sitemap to Google Search Console
2. Request indexing for main pages
3. Monitor Core Web Vitals
4. Set up Google Analytics (optional)

---

## 🆘 Support & Resources

### Documentation
- **This Project:** Check guides in root directory
- **Vercel:** https://vercel.com/docs
- **WhatsApp API:** https://developers.facebook.com/docs/whatsapp
- **Gmail SMTP:** https://support.google.com/mail/answer/7126229

### Getting Help
1. Check the documentation guides first
2. View Vercel function logs for errors
3. Test API endpoint directly
4. Check environment variables are set

---

## 📝 License

This project is proprietary and confidential.

**© 2026 Shree Ram Traders. All rights reserved.**

---

## 🎉 Quick Links

- **🚀 Deploy Now:** [QUICKSTART.md](QUICKSTART.md)
- **📋 Checklist:** [PRINTABLE_CHECKLIST.md](PRINTABLE_CHECKLIST.md)
- **📖 Full Guide:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **🎨 Icons:** [icon-generator.html](icon-generator.html)
- **🌐 Live Site:** https://www.shreeramtradersrxl.in

---

**Made with ❤️ for Shree Ram Traders, Raxaul, Bihar**
