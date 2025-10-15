# Email Setup for Contact Form

The contact form has been configured to send emails directly to `Info@blm.sa`. To enable this functionality, you need to set up email credentials.

## Local Development Testing

### Test Mode (No Credentials Required)
The system runs in test mode when no email credentials are configured:
- ✅ Form works normally
- ✅ Success messages displayed
- ✅ Email content logged to console
- ✅ No actual emails sent (safe for testing)
- ✅ Messages saved to local file

### With Real Email (Optional for Local Testing)
1. **Create a `.env.local` file** in the root directory with:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_SERVICE=gmail
   ```

2. **For Gmail users:**
   - Enable 2-Step Verification
   - Generate App Password: Google Account → Security → App passwords
   - Use the 16-digit app password (not your regular password)

## Production Deployment

### Option 1: Gmail (Simple Setup)
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
EMAIL_SERVICE=gmail
EMAIL_FROM=your-gmail@gmail.com
```

#### Gmail Setup Instructions - English
1. **Enable 2-Step Verification** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → App passwords
   - Generate password for "Mail"

#### تعليمات إعداد Gmail - العربية
1. **تفعيل التحقق بخطوتين** على حساب Gmail الخاص بك
2. **إنشاء كلمة مرور للتطبيق**:
   - اذهب إلى إعدادات حساب Google
   - الأمان → كلمات مرور التطبيقات
   - إنشاء كلمة مرور لـ "البريد"

### Option 2: SendGrid (Recommended for Production)
1. **Sign up at [SendGrid](https://sendgrid.com)** (free tier: 100 emails/day)
2. **Create API Key** in SendGrid dashboard
3. **Configure environment variables:**
   ```env
   EMAIL_USER=apikey
   EMAIL_PASS=your-sendgrid-api-key
   EMAIL_SERVICE=sendgrid
   EMAIL_FROM=your-verified-sender@yourdomain.com
   ```

### Option 3: Mailgun (High Volume)
1. **Sign up at [Mailgun](https://mailgun.com)** (free tier: 5,000 emails/month)
2. **Get SMTP credentials** from Mailgun dashboard
3. **Configure environment variables:**
   ```env
   EMAIL_USER=your-mailgun-username
   EMAIL_PASS=your-mailgun-password
   EMAIL_SERVICE=mailgun
   EMAIL_FROM=your-verified-sender@yourdomain.com
   ```

### Option 4: Custom SMTP Server
```env
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_FROM=your-email@yourdomain.com
```

## Deployment Platforms

### Vercel
1. Go to Vercel Dashboard → Your Project → Settings
2. Add Environment Variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_SERVICE`
   - `EMAIL_FROM`

### Netlify
1. Go to Netlify Dashboard → Your Site → Environment
2. Add the same environment variables

### Railway/Render/Other Platforms
1. Add environment variables in your platform's dashboard
2. Use the same variable names as above

## Email Configuration

- **Recipient:** christian_chindy@hotmail.com
- **Subject:** "New Contact Form Submission - Best Look Contracting"
- **Content:** Includes name, phone, message, timestamp, and IP address

## Testing Production

After deployment:
1. Visit your live website
2. Submit the contact form
3. Check if email arrives at christian_chindy@hotmail.com
4. Check server logs for any errors

## Troubleshooting

### Common Issues:
- **"Invalid credentials"**: Check your email/password
- **"Authentication failed"**: Enable 2-Step Verification for Gmail
- **"Connection timeout"**: Check firewall/network settings
- **"Rate limit exceeded"**: Upgrade your email service plan

### Security Notes:
- Never commit `.env.local` to git
- Use app passwords, not regular passwords
- Verify sender email addresses with your email provider
- Consider using dedicated email services for production

## Support

For email service setup help:
- **Gmail**: [Google Account Help](https://support.google.com/accounts)
- **SendGrid**: [SendGrid Documentation](https://docs.sendgrid.com)
- **Mailgun**: [Mailgun Documentation](https://documentation.mailgun.com)
