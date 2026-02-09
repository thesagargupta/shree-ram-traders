# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### 🚀 Quick Deploy (Recommended)

**Frontend (Vercel):**
Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

**Backend (Render - Free):**
👉 **Follow this guide: [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md)** (5 minutes)

### 📋 Deployment Architecture

This project uses a **separate backend deployment** for better performance:

- **Frontend**: Vercel (Static hosting, CDN, instant deploys)
- **Backend**: Render/Railway (Node.js Express server, always-on)

**Why separate backend?**
- Vercel serverless functions have cold start delays (~5-10 seconds)
- Render free tier keeps your backend warm
- Better logging and debugging
- No vendor lock-in

### ⚙️ Environment Variables Setup

**Frontend (.env):**
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

**Backend (server/.env):**
```env
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://www.shreeramtradersrxl.in
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECIPIENT=recipient@gmail.com
WHATSAPP_TOKEN=your-permanent-token
WHATSAPP_PHONE_ID=your-phone-number-id
WHATSAPP_RECIPIENT=918809197377
```

**Add to Vercel Dashboard:**
- Go to Project Settings → Environment Variables
- Add `VITE_API_URL` with your Render backend URL
- Redeploy

**Add to Render Dashboard:**
- During service creation, add all backend env vars
- Or go to Service → Environment → Add variables

### 🔗 Complete Deployment Guides

- **Backend Deployment**: [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md)
- **WhatsApp Setup**: [WHATSAPP_PERMANENT_TOKEN.md](./WHATSAPP_PERMANENT_TOKEN.md)
- **Vercel Deployment** (legacy): [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

## 📱 WhatsApp Notifications Setup

This project includes a FREE WhatsApp notification system for customer enquiries.

### ⚠️ Important: Token Expiration
If you're using a temporary token from Meta dashboard, it **expires in 23 hours**!

### ✅ Get a Permanent Token (Never Expires)
**👉 Follow this guide: [WHATSAPP_PERMANENT_TOKEN.md](./WHATSAPP_PERMANENT_TOKEN.md)** (5 minutes)

**No billing required!** First 1,000 conversations/month are completely FREE.

### Quick Setup:
1. Create System User in Meta Business Settings
2. Generate permanent token (set expiration to "Never")
3. Copy Phone Number ID from API Setup
4. Verify recipient number: +919430946499
5. Add to `.env`:
   ```env
   WHATSAPP_TOKEN=your_permanent_token
   WHATSAPP_PHONE_ID=your_phone_number_id
   WHATSAPP_RECIPIENT=919430946499
   ```
6. Add same variables to Vercel environment variables
7. Deploy!

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
# shree-ram-traders
