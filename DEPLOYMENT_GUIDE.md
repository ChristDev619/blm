# BLMSA Website Deployment Guide - Hosting Transfer

## Overview
This guide will help you transfer the hosting of the BLMSA website from the current Vercel account to your Vercel account (`ahmadhamudi19850820-netizen`) while keeping the same domain `blm.sa`.

## Prerequisites
- Your Vercel account: `ahmadhamudi19850820@gmail.com`
- Access to the Git repository containing the website code
- Email service credentials (for contact form functionality)

## Step 1: Prepare Git Repository

### Option A: If you have access to the current repository
1. **Fork or clone the repository** to your GitHub account
2. **Ensure all code is committed** and pushed to the main branch

### Option B: If you need a new repository
1. **Create a new repository** on GitHub
2. **Upload all project files** to the new repository
3. **Commit and push** all changes

## Step 2: Deploy to Vercel

### 2.1 Import Project
1. **Log into your Vercel account**: `ahmadhamudi19850820@gmail.com`
2. **Click "Import Git Repository"** (as shown in your dashboard)
3. **Connect your GitHub account** if not already connected
4. **Select the BLMSA repository** from the list
5. **Click "Import"**

### 2.2 Configure Project Settings
1. **Project Name**: `blmsa` (or your preferred name)
2. **Framework Preset**: Next.js (should auto-detect)
3. **Root Directory**: `./` (default)
4. **Build Command**: `npm run build` (default)
5. **Output Directory**: `.next` (default)
6. **Install Command**: `npm install` (default)

### 2.3 Environment Variables
Add these environment variables in Vercel:

**Required for Contact Form:**
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_SERVICE=gmail
EMAIL_FROM=your-email@gmail.com
```

**For Gmail Setup:**
1. Enable 2-Step Verification on your Gmail account
2. Generate App Password: Google Account → Security → App passwords
3. Use the 16-digit app password (not your regular password)

**Alternative Email Services:**
- **SendGrid**: `EMAIL_SERVICE=sendgrid`, `EMAIL_USER=apikey`, `EMAIL_PASS=your-sendgrid-api-key`
- **Mailgun**: `EMAIL_SERVICE=mailgun`, `EMAIL_USER=your-mailgun-username`, `EMAIL_PASS=your-mailgun-password`

### 2.4 Deploy
1. **Click "Deploy"**
2. **Wait for deployment** to complete (usually 2-3 minutes)
3. **Your site will be live** at `https://your-project-name.vercel.app`

## Step 3: Domain Configuration (Keep Existing Domain)

### 3.1 Add Existing Domain to New Vercel Account
1. **Go to Project Settings** → **Domains**
2. **Add the existing domain**: `blm.sa`
3. **Vercel will verify domain ownership** - you may need to add a TXT record temporarily
4. **Once verified, the domain will be transferred** to your Vercel account

### 3.2 DNS Configuration
- **No DNS changes needed** - the domain will continue to work
- **SSL certificate will be automatically renewed** by Vercel
- **Both `blm.sa` and `www.blm.sa`** will work automatically

## Step 4: Verify Deployment

### 4.1 Test Website Functionality
1. **Visit your deployed site** at `https://blm.sa`
2. **Test all pages** (Home, Services, Portfolio, Contact, etc.)
3. **Test language switching** (English/Arabic)
4. **Test contact form** - submit a test message
5. **Check email delivery** at the configured email address
6. **Verify the site loads exactly as before** - no changes should be visible to visitors

### 4.2 Performance Check
1. **Run Lighthouse audit** in Chrome DevTools
2. **Check mobile responsiveness**
3. **Verify all images load correctly**

## Step 5: Post-Deployment Configuration

### 5.1 Analytics (Optional)
- Add Google Analytics or other tracking services
- Update tracking IDs in the code if needed

### 5.2 SEO Configuration
- Update `sitemap.ts` with your domain
- Verify meta tags and Open Graph images
- Submit sitemap to Google Search Console

### 5.3 Monitoring
- Set up Vercel Analytics (free tier available)
- Monitor deployment logs for any errors
- Set up uptime monitoring if needed

## Troubleshooting

### Common Issues:

**Build Failures:**
- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Check for TypeScript errors

**Contact Form Not Working:**
- Verify environment variables are set correctly
- Check email service credentials
- Test with different email providers

**Images Not Loading:**
- Verify image paths in `public/` directory
- Check `next.config.ts` image domains configuration

**Language Switching Issues:**
- Verify `messages/` directory contains both `en.json` and `ar.json`
- Check middleware configuration

### Getting Help:
1. **Check Vercel deployment logs** in the dashboard
2. **Review browser console** for client-side errors
3. **Test locally** with `npm run dev` to isolate issues

## Project Structure
```
blmsa/
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                # Utility functions
├── messages/           # Internationalization files
├── public/             # Static assets
├── package.json        # Dependencies
├── next.config.ts      # Next.js configuration
└── tailwind.config.js  # Styling configuration
```

## Support
- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Project-specific issues**: Contact the development team

---

**Note**: This website includes bilingual support (English/Arabic) and a contact form with email functionality. Make sure to configure the email service properly for the contact form to work in production.
