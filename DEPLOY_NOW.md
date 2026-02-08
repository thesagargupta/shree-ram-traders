# ⚡ Quick Vercel Deploy

## What Changed?

✅ Created [api/contact.js](api/contact.js) - Vercel serverless email function  
✅ Created [vercel.json](vercel.json) - Vercel configuration  
✅ Updated [ContactSection.tsx](src/components/landing/ContactSection.tsx) - Smart API URL detection  
✅ Added nodemailer to [package.json](package.json) dependencies  

## Deploy Now (3 Steps)

### 1. Push to Git
```powershell
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Import to Vercel
- Go to https://vercel.com/new
- Import your repository
- Auto-detected settings are correct

### 3. Add Environment Variables

In Vercel dashboard, add these 3 variables:

| Variable | Value |
|----------|-------|
| `EMAIL_USER` | `sagarkshn8@gmail.com` |
| `EMAIL_PASS` | `ycdxgpghboypbkua` |
| `EMAIL_RECIPIENT` | `sagarkshn8@gmail.com` |

**Deploy!** ✨

## How It Works

### Local Development
- Frontend: `http://localhost:8080` (run: `npm run dev`)
- Backend: `http://localhost:3001` (run: `npm run server:dev`)
- Form calls → `http://localhost:3001/api/contact`

### Production (Vercel)
- Website: `https://your-site.vercel.app`
- API: `https://your-site.vercel.app/api/contact`
- Form calls → `/api/contact` (relative URL)
- Serverless function handles email

## File Structure

```
shree-ram-rice-hub-main/
├── api/
│   └── contact.js          ← Vercel serverless function (NEW!)
├── server/                  ← Local dev only (not deployed)
├── src/
│   └── components/landing/
│       └── ContactSection.tsx  ← Updated API URL
├── vercel.json             ← Vercel config (NEW!)
└── package.json            ← Added nodemailer
```

## No Separate Server Needed!

**Old way:**
- Deploy frontend on Vercel
- Deploy backend on separate server (Heroku/Railway)
- Manage 2 deployments ❌

**New way:**
- Everything deploys to Vercel together
- Serverless function handles email
- One deployment! ✅

## Test After Deploy

1. Visit your Vercel URL
2. Fill contact form
3. Check `sagarkshn8@gmail.com`
4. Receive beautiful email! 📧

## Troubleshooting

**"Connection Error" on deployed site:**
→ Check environment variables are set in Vercel

**Email not sending:**
→ Check Vercel → Functions → `/api/contact` logs

**Build failed:**
→ Make sure you pushed all files (especially `api/contact.js`)

## Full Guide

See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for complete instructions.

---

🎉 **Your website is ready to deploy on Vercel!**
