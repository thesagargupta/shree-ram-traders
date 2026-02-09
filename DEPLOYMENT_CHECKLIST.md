# 🚀 Deployment Checklist

Complete these steps to deploy your website with backend integration.

---

## ✅ Step 1: Deploy Backend on Render

### 1.1 Create Render Account
- [ ] Go to https://render.com
- [ ] Sign up with GitHub

### 1.2 Deploy Backend Service
- [ ] Click "New +" → "Web Service"
- [ ] Connect GitHub repository: `shree-ram-rice-hub-main`
- [ ] Configure settings:
  - **Name**: `shree-ram-traders-backend`
  - **Region**: Singapore
  - **Root Directory**: `server`
  - **Build Command**: `npm install`
  - **Start Command**: `npm start`
  - **Plan**: Free

### 1.3 Add Environment Variables
Click "Advanced" and add these variables:

```
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://www.shreeramtradersrxl.in
EMAIL_USER=sagarkshn8@gmail.com
EMAIL_PASS=ycdxgpghboypbkua
EMAIL_RECIPIENT=sagarkshn8@gmail.com
WHATSAPP_TOKEN=EAAV677N4eIoBQl7ncWXE8x8bgn2qTnQU052JSirVvpmWFZCpZBYLCrWEzrEa5r4CpODpZA0gKv1RVv2mKDnQ8EzWUi8ZBVN7sOQDa66czLcGzlZCd74EkASCfUcQfxp99VMgGPYZAX33w7spLJItCnE4uwWIHjZCzCRFZBIz76zEvydfS0kKNE65HZCn6nP75BZB2v8AZDZD
WHATSAPP_PHONE_ID=857815947424563
WHATSAPP_RECIPIENT=918809197377
```

- [ ] Click "Create Web Service"
- [ ] Wait 2-3 minutes for deployment
- [ ] **Copy your backend URL** (e.g., `https://shree-ram-traders-backend.onrender.com`)

---

## ✅ Step 2: Update Frontend Environment Variable

### 2.1 Update Vercel
- [ ] Go to Vercel Dashboard: https://vercel.com/dashboard
- [ ] Select your project: `shree-ram-rice-hub-main`
- [ ] Go to **Settings** → **Environment Variables**
- [ ] Find `VITE_API_URL` variable
- [ ] Update value to: `https://your-backend-url.onrender.com` (paste your Render URL)
- [ ] Click **Save**

### 2.2 Redeploy Frontend
- [ ] Go to **Deployments** tab
- [ ] Click **"⋯"** on latest deployment
- [ ] Click **"Redeploy"**
- [ ] Wait 1-2 minutes for deployment

---

## ✅ Step 3: Verify Deployment

### 3.1 Test Backend Health
- [ ] Open browser and visit: `https://your-backend-url.onrender.com/api/health`
- [ ] You should see: `{"success": true, "message": "Server is running", ...}`

### 3.2 Test Frontend
- [ ] Visit: https://www.shreeramtradersrxl.in
- [ ] Scroll to Contact section
- [ ] Submit a test enquiry with your details
- [ ] Check for success message

### 3.3 Verify Notifications
- [ ] Check email: sagarkshn8@gmail.com (should receive enquiry email)
- [ ] Check WhatsApp: +918809197377 (should receive enquiry message)
  - **Note**: If WhatsApp message doesn't appear, reply to the template message first to open the 24-hour conversation window

---

## ✅ Step 4: Open WhatsApp 24-Hour Window (If Needed)

If WhatsApp messages aren't appearing:

- [ ] Open WhatsApp on phone number: +918809197377
- [ ] Find conversation from: +1 555 182 0632
- [ ] Find template message: "Welcome and congratulations!! This message demonstrates..."
- [ ] Reply with any message (e.g., "Hi" or "Test")
- [ ] Wait 10 seconds
- [ ] Submit contact form again
- [ ] Custom enquiry message should now appear

---

## ✅ Step 5: Get Permanent WhatsApp Token (Optional but Recommended)

Your current token expires in 23 hours. Get a permanent token:

- [ ] Follow guide: [WHATSAPP_PERMANENT_TOKEN.md](./WHATSAPP_PERMANENT_TOKEN.md)
- [ ] Takes 5 minutes
- [ ] Token never expires
- [ ] Update `WHATSAPP_TOKEN` in Render environment variables
- [ ] Restart Render service

---

## 📊 Deployment Summary

Once completed, you'll have:

✅ **Frontend**: https://www.shreeramtradersrxl.in (Vercel)
✅ **Backend**: https://your-backend.onrender.com (Render)
✅ **Email Notifications**: Working via Gmail SMTP
✅ **WhatsApp Notifications**: Working via Meta Business API
✅ **Free Hosting**: Both frontend and backend on free tiers

---

## 🐛 Troubleshooting

### Backend deployment failed
- Check Render logs: Service → Logs
- Verify all environment variables are set correctly
- Ensure `server/package.json` exists

### CORS errors in production
- Verify `FRONTEND_URL` in Render matches your Vercel domain
- Check Render logs for blocked origins

### 404 errors on /api/contact
- Verify backend is running: visit `/api/health` endpoint
- Check `VITE_API_URL` in Vercel environment variables
- Ensure no trailing slash in backend URL

### Email not working
- Verify Gmail app password is correct (not regular password)
- Check Render logs for SMTP errors
- Test with Gmail's test email feature

### WhatsApp messages not appearing
- Reply to template message first
- Check Render logs for WhatsApp API errors
- Verify token hasn't expired (23 hours for temporary)

---

## 📞 Quick Reference

**Backend URL**: `https://your-backend.onrender.com`
**Frontend URL**: `https://www.shreeramtradersrxl.in`
**Health Check**: `https://your-backend.onrender.com/api/health`
**Contact Endpoint**: `https://your-backend.onrender.com/api/contact`

**Email**: sagarkshn8@gmail.com
**WhatsApp**: +918809197377
**WhatsApp Test Number**: +1 555 182 0632

---

## ✨ Next Steps

After successful deployment:

1. [ ] Test all contact forms on website
2. [ ] Update business hours if needed
3. [ ] Add more products in ProductsSection.tsx
4. [ ] Customize colors in tailwind.config.ts
5. [ ] Add Google Analytics (optional)
6. [ ] Set up custom domain (if needed)
7. [ ] Get permanent WhatsApp token

---

**Need help?** Check the detailed guides:
- [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md) - Complete backend deployment guide
- [WHATSAPP_PERMANENT_TOKEN.md](./WHATSAPP_PERMANENT_TOKEN.md) - Get permanent WhatsApp token
