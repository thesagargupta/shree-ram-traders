# Get Permanent WhatsApp Access Token (Never Expires)

## ⚠️ Important: Billing NOT Required
WhatsApp Business API is **FREE** for first 1,000 conversations/month. No credit card needed!

## Why You Need a Permanent Token
- **Temporary tokens** (from API Setup page) expire in 23 hours
- **Permanent tokens** (System User tokens) never expire
- Use permanent token for production deployment

---

## 🚀 Step-by-Step Guide (5 Minutes)

### Step 1: Create System User

1. Go to your [Meta Business Settings](https://business.facebook.com/settings/)
2. Click **"Users"** → **"System Users"** in the left sidebar
3. Click **"Add"** button
4. Enter a name: `Shree Ram Traders API User`
5. Select **Admin** role
6. Click **"Create System User"**

### Step 2: Generate Permanent Access Token

1. Click on the System User you just created
2. Click **"Add Assets"** button
3. Select **"Apps"**
4. Find your WhatsApp Business app
5. Check **"Manage App"** permission
6. Click **"Save Changes"**

7. Now click **"Generate New Token"** button
8. Select your WhatsApp app from dropdown
9. **Important:** Select these permissions:
   - ✅ `whatsapp_business_messaging`
   - ✅ `whatsapp_business_management`
10. Set token expiration: **"Never"** (default is 60 days - change this!)
11. Click **"Generate Token"**
12. **Copy the token immediately** - you won't see it again!

### Step 3: Get Phone Number ID

1. Go to [Meta Developer Dashboard](https://developers.facebook.com/apps)
2. Select your WhatsApp Business app
3. Click **"WhatsApp"** → **"API Setup"** in left sidebar
4. Copy the **Phone Number ID** (starts with numbers like `123456789012345`)

### Step 4: Verify Recipient Number

1. In the same "API Setup" page
2. Find **"To"** field under "Send and receive messages"
3. Enter: `+919430946499`
4. Click **"Send code"**
5. You'll receive a 6-digit code on WhatsApp
6. Enter the code to verify

### Step 5: Update Your Configuration

**Local .env file:**
```env
WHATSAPP_TOKEN=EAAH9M... (your permanent token - very long string)
WHATSAPP_PHONE_ID=123456789012345 (your phone number ID)
WHATSAPP_RECIPIENT=919430946499
```

**Vercel Dashboard:**
1. Go to your project → Settings → Environment Variables
2. Add these 3 variables with the same values
3. Redeploy your site

---

## ✅ Verify It's Working

### Test Locally:
```bash
npm run dev
```
Fill out the contact form - you should receive WhatsApp message!

### Test the Token Directly:
```bash
curl -X POST "https://graph.facebook.com/v18.0/YOUR_PHONE_ID/messages" \
  -H "Authorization: Bearer YOUR_PERMANENT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "messaging_product": "whatsapp",
    "to": "919430946499",
    "type": "text",
    "text": {
      "body": "Test message - permanent token working!"
    }
  }'
```

---

## 🔒 Security Best Practices

### ✅ DO:
- Store token in `.env` (never commit to GitHub)
- Add `.env` to `.gitignore`
- Use environment variables on Vercel
- Regenerate token if accidentally exposed

### ❌ DON'T:
- Share token publicly
- Commit token to GitHub
- Use temporary token in production
- Hard-code token in source files

---

## 🆓 Pricing Breakdown

| Usage | Cost |
|-------|------|
| First 1,000 conversations/month | **FREE** ✅ |
| After 1,000 conversations | $0.0042 per conversation |
| Business-initiated messages | Small fee per message |

**Conversation = All messages within 24-hour window**

For your business volume, you'll likely stay within the free tier!

---

## 🐛 Troubleshooting

### Token Still Expiring?
- Make sure you selected **"Never"** as expiration when generating
- Check in System User settings - should show "Permanent" or "Never expires"

### "Invalid Access Token" Error?
- Token might be from wrong app
- Regenerate following steps above
- Ensure permissions include `whatsapp_business_messaging`

### Can't Find System Users Option?
- You need admin access to Business Manager
- Create a Business Manager account at business.facebook.com first
- Add your app to Business Manager

### Messages Not Sending?
- Verify recipient number is verified in Meta dashboard
- Check that number has WhatsApp installed
- Ensure you're using correct Phone Number ID
- Test number must accept your test message first

---

## 📞 Support

If you get stuck:
1. Check Meta's [WhatsApp Cloud API Documentation](https://developers.facebook.com/docs/whatsapp/cloud-api)
2. Visit [Meta Developer Community](https://developers.facebook.com/community/)
3. Review the error logs in Vercel function logs

---

## 🎯 Quick Checklist

- [ ] Created System User in Business Settings
- [ ] Generated permanent token (set expiration to "Never")
- [ ] Copied Phone Number ID from API Setup page
- [ ] Verified +919430946499 as recipient
- [ ] Updated `.env` with all 3 values
- [ ] Added same 3 variables to Vercel
- [ ] Tested locally - received WhatsApp message
- [ ] Deployed to Vercel
- [ ] Tested production - received WhatsApp message

**Once completed, your token will NEVER expire!** 🎉
