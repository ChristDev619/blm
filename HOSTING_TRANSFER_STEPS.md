# Quick Hosting Transfer Steps - BLMSA Website

## What We're Doing
- **Keep domain**: `blm.sa` (no changes)
- **Transfer hosting**: From current Vercel account to `ahmadhamudi19850820-netizen`
- **Result**: Same website, same domain, new hosting account

## Step-by-Step Process

### Step 1: Prepare the Code Repository
1. **Ensure all code is committed** and pushed to Git repository
2. **Make sure the repository is accessible** to the client

### Step 2: Deploy to Client's Vercel Account
1. **Log into client's Vercel account**: `ahmadhamudi19850820@gmail.com`
2. **Click "Import Git Repository"** (as shown in your dashboard image)
3. **Install GitHub app** if prompted (click the "Install" button)
4. **Select the BLMSA repository** from the list
5. **Configure project**:
   - Project Name: `blmsa` or `bestlook-contracting`
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Add Environment Variables
In Vercel project settings, add these environment variables:

```
EMAIL_USER=Info@blm.sa
EMAIL_PASS=your-email-password
EMAIL_SERVICE=gmail
EMAIL_FROM=Info@blm.sa
```

### Step 4: Deploy the Project
1. **Click "Deploy"**
2. **Wait for deployment** to complete
3. **Note the temporary URL** (e.g., `https://blmsa-xyz.vercel.app`)

### Step 5: Transfer Domain to New Account
1. **Go to Project Settings** → **Domains**
2. **Click "Add Domain"**
3. **Enter**: `blm.sa`
4. **Vercel will show verification steps**:
   - Add a TXT record to your domain's DNS
   - Wait for verification (usually 5-10 minutes)
5. **Once verified**, the domain will be transferred to the new account

### Step 6: Verify Everything Works
1. **Visit** `https://blm.sa`
2. **Test all functionality**:
   - Home page loads
   - Language switching (EN/AR)
   - Contact form works
   - All pages accessible
3. **Check email delivery** from contact form

## Important Notes

### What Stays the Same:
- ✅ Domain `blm.sa` continues to work
- ✅ All website content and functionality
- ✅ SSL certificate (auto-renewed)
- ✅ SEO and search rankings
- ✅ User experience (no downtime)

### What Changes:
- 🔄 Hosting account (from your account to client's account)
- 🔄 Billing responsibility (client will pay for hosting)
- 🔄 Access control (client has full control)

### Environment Variables Needed:
Based on the current website at [blm.sa](https://blm.sa), you'll need:
- Email configuration for the contact form
- Any API keys or external service credentials

## Timeline
- **Deployment**: 5-10 minutes
- **Domain verification**: 5-10 minutes
- **DNS propagation**: Up to 24 hours (usually much faster)
- **Total downtime**: Minimal to none

## Support
If you encounter any issues:
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Test the temporary Vercel URL first
4. Contact Vercel support if domain transfer fails

---

**Result**: The website will continue to work exactly as before at `blm.sa`, but now hosted on the client's Vercel account.
