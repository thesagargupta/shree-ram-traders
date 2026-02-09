# 🚀 Deploy Backend on Render (Free)

## Quick Setup (5 minutes)

### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub account (easiest option)

### Step 2: Create New Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Select the repository: `shree-ram-rice-hub-main`

### Step 3: Configure Service

**Basic Settings:**
- **Name:** `shree-ram-traders-backend` (or your choice)
- **Region:** Singapore (closest to India)
- **Branch:** `main`
- **Root Directory:** `server`
- **Runtime:** Node
- **Build Command:** `npm install`
- **Start Command:** `npm start`

**Plan:**
- Select **"Free"** plan ($0/month)
- Note: Free tier sleeps after 15 min inactivity, wakes up on first request (<30s)

### Step 4: Add Environment Variables

Click **"Advanced"** → Add these environment variables:

```bash
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

### Step 5: Deploy
1. Click **"Create Web Service"**
2. Wait 2-3 minutes for build & deploy
3. Copy your backend URL (e.g., `https://shree-ram-traders-backend.onrender.com`)

### Step 6: Update Frontend Environment Variable

**Local Development (.env):**
```bash
VITE_API_URL=https://your-backend-url.onrender.com
```

**Vercel Production:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Update **VITE_API_URL** to your Render backend URL:
   ```
   VITE_API_URL=https://shree-ram-traders-backend.onrender.com
   ```
3. Click **Save**
4. Go to **Deployments** → Click **"⋯"** on latest → **Redeploy**

---

## ✅ Verification

After deployment, test your backend:

**1. Health Check:**
```bash
curl https://your-backend-url.onrender.com/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2026-02-09T..."
}
```

**2. Test Contact Form:**
- Visit: https://www.shreeramtradersrxl.in
- Submit contact form
- Check WhatsApp +918809197377 and email sagarkshn8@gmail.com

---

## 🔄 Alternative: Railway Deployment

If you prefer Railway over Render:

### Railway Setup (Even Easier!)

1. Go to https://railway.app
2. Sign in with GitHub
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Select your repository
5. Add environment variables (same as above)
6. Click **"Deploy"**

Railway gives you $5 free credit monthly (enough for hobby projects).

---

## 📊 Comparison

| Feature | Render Free | Railway Free |
|---------|-------------|--------------|
| Cost | $0/month | $5 credit/month |
| Sleep after inactivity | 15 minutes | Never sleeps |
| Wake-up time | ~30 seconds | Instant |
| Bandwidth | 100GB/month | 100GB/month |
| Build minutes | 500 min/month | Unlimited |
| Best for | Low traffic | Regular traffic |

**Recommendation:** Start with **Render** (completely free). If you need instant response times, upgrade to Railway.

---

## 🛠️ Local Development

Backend:
```bash
cd server
npm install
npm start
```

Frontend:
```bash
npm run dev
```

Make sure your `.env` has:
```bash
VITE_API_URL=http://localhost:3001
```

---

## 🐛 Troubleshooting

### "CORS Error" in Production
- Verify `FRONTEND_URL` environment variable matches your Vercel domain
- Check Render logs: Dashboard → Service → Logs

### "404 Not Found" on /api/contact
- Ensure backend is deployed and running
- Check health endpoint: `https://your-backend-url.onrender.com/api/health`
- Verify `VITE_API_URL` in Vercel environment variables

### WhatsApp Messages Not Appearing
- Reply to the template message first to open 24-hour window
- Check Render logs for WhatsApp API errors
- Verify `WHATSAPP_TOKEN` hasn't expired (23 hours for temporary tokens)

### Email Not Working
- Verify Gmail app password is correct
- Check Render logs for SMTP errors
- Ensure "Less secure app access" is enabled (or use App Password)

---

## 🔐 Security Notes

- Never commit `.env` files to Git
- Use Render's environment variables (encrypted at rest)
- Rotate WhatsApp tokens every 23 hours OR get permanent token (see WHATSAPP_PERMANENT_TOKEN.md)
- Keep Gmail app password secure

---

## 📞 Support

If deployment fails:
1. Check Render build logs
2. Verify all environment variables are set
3. Test health endpoint first
4. Check CORS configuration
