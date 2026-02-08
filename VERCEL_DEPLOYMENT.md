# 🚀 Vercel Deployment Guide - Shree Ram Traders

Complete guide to deploy your website with email functionality on Vercel.

## 📋 Prerequisites

- Vercel account (sign up at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)
- Gmail App Password ready

## 🎯 Quick Deploy (5 Steps)

### Step 1: Push to Git

Make sure all your code is pushed to your Git repository:

```powershell
git add .
git commit -m "Add Vercel serverless email function"
git push origin main
```

### Step 2: Import Project to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository
4. Vercel will auto-detect it's a Vite project

### Step 3: Configure Build Settings

Vercel should auto-detect these, but verify:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Step 4: Add Environment Variables

In the **Environment Variables** section, add these:

| Key | Value | Description |
|-----|-------|-------------|
| `EMAIL_USER` | `sagarkshn8@gmail.com` | Your Gmail address |
| `EMAIL_PASS` | `ycdxgpghboypbkua` | Your Gmail App Password |
| `EMAIL_RECIPIENT` | `sagarkshn8@gmail.com` | Where to receive emails |
| `NODE_ENV` | `production` | Environment mode |

⚠️ **Important:** Make sure these are added to **Production**, **Preview**, and **Development** environments.

### Step 5: Deploy!

Click **"Deploy"** button. Vercel will:
- Install dependencies
- Build your Vite app
- Deploy serverless functions
- Give you a live URL (like: `https://your-site.vercel.app`)

## ✅ Post-Deployment Checks

### Test the Contact Form

1. Visit your deployed site: `https://your-site.vercel.app`
2. Navigate to the Contact section
3. Fill out the form with test data
4. Submit and check `sagarkshn8@gmail.com` for the email

### Verify API Endpoint

Visit: `https://your-site.vercel.app/api/contact` - you should see:
```json
{
  "success": false,
  "message": "Method not allowed"
}
```

This confirms the API is working (it requires POST method).

## 🔧 File Structure for Vercel

Your project now has:

```
shree-ram-rice-hub-main/
├── api/                          # Vercel Serverless Functions
│   └── contact.js               # Email API endpoint
├── server/                       # Local dev server (not deployed)
│   ├── server.js
│   └── package.json
├── src/                          # React app
├── vercel.json                  # Vercel config
├── .env                         # Local environment variables (not deployed)
└── package.json
```

## 🌐 Custom Domain (Optional)

### Add Your Own Domain

1. Go to your project on Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `shreeramtraders.com`)
4. Follow DNS configuration instructions from Vercel
5. Wait for DNS propagation (5-30 minutes)

Example DNS settings:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔄 Automatic Deployments

Every time you push to your Git repository:
- **main/master branch** → Automatic production deployment
- **other branches** → Preview deployments

To trigger a new deployment:
```powershell
git add .
git commit -m "Update contact form"
git push origin main
```

Vercel will automatically rebuild and deploy!

## 🐛 Troubleshooting

### 1. **Form shows "Connection Error"**

**Check:**
- Environment variables are set in Vercel dashboard
- Visit Vercel dashboard → Project → Settings → Environment Variables
- Ensure `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_RECIPIENT` are added

**Fix:**
```
1. Add missing environment variables
2. Redeploy: Settings → Deployments → Latest → "Redeploy"
```

### 2. **Email not being sent**

**Check Vercel Function Logs:**
1. Go to Vercel dashboard → Your project
2. Click on **"Functions"** tab
3. Find `/api/contact` function
4. Click to view logs

**Common issues:**
- Wrong Gmail App Password → Generate new one
- 2-Step Verification not enabled → Enable it first
- Incorrect email format → Must be valid Gmail address

### 3. **"Invalid login credentials" in logs**

**Solution:**
1. Go to https://myaccount.google.com/apppasswords
2. Delete old app password
3. Generate new app password
4. Update `EMAIL_PASS` in Vercel environment variables
5. Redeploy

### 4. **Build fails with "nodemailer not found"**

**Solution:**
Add `nodemailer` to main `package.json`:
```powershell
npm install nodemailer
git add package.json package-lock.json
git commit -m "Add nodemailer dependency"
git push
```

### 5. **API returns 404**

**Check:**
- `vercel.json` exists in root directory
- `/api` folder exists with `contact.js` inside
- Redeploy the project

## 📊 Monitor Your Deployment

### View Deployment Status

Dashboard → Project Name → View real-time:
- Build logs
- Function invocations
- Error messages
- Performance metrics

### Check Email Delivery

Every form submission is logged. Check:
1. Vercel function logs for confirmation
2. Gmail sent folder for outgoing emails
3. `sagarkshn8@gmail.com` inbox for received emails

## 🔐 Security Best Practices

✅ **What's Secure:**
- Environment variables are encrypted by Vercel
- `.env` file is in `.gitignore` (not pushed to Git)
- Gmail App Password (not your actual password)
- HTTPS automatically enabled

❌ **Never Do:**
- Don't commit `.env` file to Git
- Don't share your App Password publicly
- Don't hardcode credentials in code

## 🚀 Production Optimization

### Enable Analytics (Optional)

1. Go to Vercel dashboard → Your project
2. Click **"Analytics"** tab
3. Enable **Web Analytics**
4. View visitor data and performance metrics

### Speed Insights

Enable **Speed Insights** to monitor:
- Page load time
- Performance scores
- User experience metrics

## 📱 Update for Production

If you want to update the success message or phone number, edit:

**File:** `src/components/landing/ContactSection.tsx`

```typescript
// Update phone number
href="tel:+919031735298"

// Update success message
toast({
  title: "Enquiry Sent! ✅",
  description: "We will contact you shortly."
});
```

Then push to Git for automatic deployment.

## 🌟 Features Deployed

✅ Complete website with responsive design
✅ Contact form with email notifications
✅ Serverless email API (no separate server needed)
✅ Gmail integration with professional templates
✅ Automatic HTTPS and CDN
✅ Global edge network for fast loading
✅ Automatic deployments on Git push

## 📞 Support

If you encounter issues:
- Check Vercel deployment logs
- Verify environment variables
- Test locally first: `npm run dev` + `npm run server:dev`
- Contact Vercel support: https://vercel.com/support

---

**Company:** Shree Ram Traders  
**Location:** Handi Bazar, Raxaul, Bihar - 845305  
**Phone:** +91 90317 35298  
**Email Recipient:** sagarkshn8@gmail.com

🎉 **Your website is now live on Vercel!**
