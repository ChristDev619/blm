# Domain Transfer Guide - BLMSA Website

## Current Domain Configuration
The website is currently configured to use the domain: **`blm.sa`**

## Domain Transfer Steps

### Step 1: Update Domain Configuration in Code

**File to Update:** `app/sitemap.ts`

**Current Configuration:**
```typescript
const baseUrl = 'https://blm.sa'
```

**Action Required:**
- Update this to your new domain (e.g., `https://yourdomain.com`)
- Or keep it as `blm.sa` if you're keeping the same domain

### Step 2: Domain DNS Configuration

#### Option A: Keep Current Domain (`blm.sa`)
If you want to keep using `blm.sa`:

1. **Transfer domain ownership** to your account
2. **Update DNS records** to point to your new Vercel deployment:
   - **A Record**: Point to Vercel's IP addresses
   - **CNAME Record**: Point `www.blm.sa` to your Vercel deployment

#### Option B: Use New Domain
If you want to use a different domain:

1. **Purchase/configure your new domain**
2. **Update DNS records** to point to Vercel
3. **Update the sitemap.ts file** with your new domain

### Step 3: Vercel Domain Configuration

1. **In your Vercel dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Click **"Add Domain"**
   - Enter your domain (e.g., `blm.sa` or your new domain)

2. **Configure DNS Records:**
   Vercel will provide you with the exact DNS records to add:
   - **A Record**: `@` → `76.76.19.61`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`

### Step 4: SSL Certificate
- Vercel automatically provides SSL certificates
- No additional configuration needed
- Certificate will be issued automatically after DNS propagation

### Step 5: Verify Domain Transfer

1. **Check DNS propagation:**
   - Use tools like `nslookup` or online DNS checkers
   - Wait 24-48 hours for full propagation

2. **Test website access:**
   - Visit your domain directly
   - Test both `http://` and `https://` versions
   - Verify all pages load correctly

3. **Update any external references:**
   - Update social media links
   - Update business listings
   - Update any marketing materials

## Important Notes

### Current Website Features:
- **Bilingual Support**: English (`/en`) and Arabic (`/ar`)
- **Contact Form**: Sends emails to configured address
- **Responsive Design**: Works on all devices
- **SEO Optimized**: Includes sitemap and meta tags

### Files That May Need Updates:
1. **`app/sitemap.ts`** - Update base URL
2. **`app/[locale]/layout.tsx`** - Check for any hardcoded URLs
3. **Contact form configuration** - Verify email settings
4. **Any external API endpoints** - Update if needed

### Testing Checklist:
- [ ] Domain resolves correctly
- [ ] SSL certificate is active
- [ ] All pages load (Home, Services, Portfolio, Contact)
- [ ] Language switching works (EN/AR)
- [ ] Contact form sends emails
- [ ] Mobile responsiveness
- [ ] All images and assets load

## Support
If you encounter any issues during the domain transfer:
1. Check Vercel deployment logs
2. Verify DNS configuration
3. Test with different browsers/devices
4. Contact your domain registrar if DNS issues persist

---

**Note**: The website is currently configured for `blm.sa`. Make sure to update the sitemap configuration if you're using a different domain.
