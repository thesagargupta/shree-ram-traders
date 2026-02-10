# Vercel Single Deployment Guide 🚀

## ✅ What Has Been Fixed

Your project is now configured for **single deployment** on Vercel (like Next.js), with the WhatsApp integration working properly through Vercel Serverless Functions.

## 🔧 Changes Made

### 1. **Removed Separate Express Server**
- ❌ Removed: `/server/server.js` (Express server - not needed for Vercel)
- ✅ Kept: `/api/contact.js` (Vercel serverless function)

### 2. **Updated Vercel Configuration**
File: `vercel.json`
- Added serverless function build configuration
- Updated API routing
- Set proper environment variables

### 3. **Updated Package.json**
- Removed server-related scripts (not needed for Vercel)
- Kept only frontend build scripts

## 📁 Project Structure for Vercel

```
shree-ram-rice-hub/
├── api/
│   └── contact.js          ✅ Vercel Serverless Function (handles WhatsApp & Email)
├── public/
│   ├── favicon.ico
│   ├── logo.webp
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── pages/
│   └── App.tsx
├── index.html
├── package.json
├── vercel.json             ✅ Updated for single deployment
└── vite.config.ts
```

## 🌐 How Vercel Deployment Works Now

### Before (❌ Not Working):
```
Vercel Deploy #1: Frontend (React/Vite)
Vercel/Render Deploy #2: Backend Server (Express)
❌ Two separate deployments
❌ CORS issues
❌ Complex setup
```

### After (✅ Working):
```
Vercel Deploy: Everything in one
├── Frontend: React/Vite static site
└── API: Serverless function at /api/contact
✅ Single deployment
✅ No CORS issues
✅ Same as Next.js deployment
```

## 🚀 Deployment Steps

### 1. **Environment Variables on Vercel**
Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these environment variables:

```env
# Email Configuration (Gmail SMTP)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_RECIPIENT=recipient@gmail.com

# WhatsApp Business API Configuration
WHATSAPP_TOKEN=your_whatsapp_business_token
WHATSAPP_PHONE_ID=your_phone_number_id
WHATSAPP_RECIPIENT=919430946499

# Optional
NODE_ENV=production
FRONTEND_URL=https://www.shreeramtradersrxl.in
```

### 2. **Deploy to Vercel**

#### Option A: Via Vercel CLI
```powershell
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option B: Via GitHub (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Add environment variables
6. Click "Deploy"

### 3. **Verify Deployment**
1. Visit: `https://your-domain.vercel.app`
2. Test contact form
3. Check if WhatsApp notification works
4. Check if email notification works

## 🧪 Testing API Endpoint

### Test the contact API:
```powershell
# Test on Vercel
curl -X POST https://www.shreeramtradersrxl.in/api/contact `
  -H "Content-Type: application/json" `
  -d '{"name":"Test User","phone":"1234567890","message":"Test message"}'
```

Expected response:
```json
{
  "success": true,
  "message": "Enquiry sent successfully! We will contact you shortly.",
  "methods": {
    "whatsapp": true,
    "email": true
  }
}
```

## 📋 Environment Variables Setup Guide

### 1. **Gmail SMTP Setup**

#### Get App-Specific Password:
1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)
3. Go to: https://myaccount.google.com/apppasswords
4. Generate new app password for "Mail"
5. Copy the 16-character password
6. Use this as `EMAIL_PASS` in Vercel

### 2. **WhatsApp Business API Setup**

#### Get WhatsApp Credentials:
1. Go to: https://developers.facebook.com/
2. Create/Select your App
3. Add "WhatsApp" product
4. Get your:
   - **Access Token** → `WHATSAPP_TOKEN`
   - **Phone Number ID** → `WHATSAPP_PHONE_ID`
   - **Recipient Number** → `WHATSAPP_RECIPIENT` (with country code, no +)

## 🔍 Debugging

### Check Logs on Vercel:
1. Go to Vercel Dashboard
2. Click on your project
3. Go to "Deployments"
4. Click on latest deployment
5. View "Functions" tab
6. Click on `/api/contact` to see logs

### Common Issues:

#### 1. **API not working (404)**
**Solution:** Make sure `vercel.json` is properly configured

#### 2. **WhatsApp not sending**
**Solution:** Check environment variables are set correctly on Vercel

#### 3. **Email not sending**
**Solution:** 
- Use App-Specific Password (not regular password)
- Enable "Less secure app access" if using regular Gmail

#### 4. **CORS Error**
**Solution:** Already handled in `/api/contact.js` with proper headers

## 📊 API Routes Structure

```
Your Domain: https://www.shreeramtradersrxl.in

Frontend:
├── / → Home page
├── /#products → Products section
├── /#contact → Contact section
└── /#about → About section

API (Serverless):
└── /api/contact → Contact form handler
    ├── POST request
    ├── Sends WhatsApp notification
    └── Sends Email notification
```

## ✅ Deployment Checklist

Before deploying:
- [ ] All environment variables added to Vercel
- [ ] WhatsApp Business API credentials verified
- [ ] Gmail App-Specific Password generated
- [ ] `vercel.json` updated (already done)
- [ ] `/api/contact.js` is in place (already done)
- [ ] Test contact form locally: `npm run dev`
- [ ] Build succeeds: `npm run build`

After deploying:
- [ ] Contact form works on live site
- [ ] WhatsApp notifications received
- [ ] Email notifications received
- [ ] Check Vercel Function logs
- [ ] Test from different devices
- [ ] Monitor for errors in first 24 hours

## 🎯 Performance Benefits

### Before vs After:

| Feature | Before (2 Deployments) | After (1 Deployment) |
|---------|----------------------|---------------------|
| Deploy Complexity | Complex (2 platforms) | Simple (Vercel only) |
| API Latency | Higher (external server) | Lower (serverless) |
| CORS Issues | Common | None |
| Cost | 2x deployment costs | 1x deployment cost |
| Maintenance | Manage 2 servers | Manage 1 deployment |
| Scalability | Manual scaling | Auto-scaling |
| Cold Start | Always warm (Express) | Serverless (fast) |

## 🔗 Helpful Links

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Documentation: https://vercel.com/docs
- Vercel Serverless Functions: https://vercel.com/docs/functions
- WhatsApp Business API: https://developers.facebook.com/docs/whatsapp
- Gmail App Passwords: https://support.google.com/accounts/answer/185833

## 🆘 Support

If you encounter issues:
1. Check Vercel Function logs
2. Verify environment variables
3. Test API endpoint directly
4. Check WhatsApp Business API status
5. Verify Gmail App Password

---

**Your site is now configured for single deployment on Vercel! 🎉**

Just push to GitHub and Vercel will auto-deploy everything.
