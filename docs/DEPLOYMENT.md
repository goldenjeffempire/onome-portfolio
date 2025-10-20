# Deployment Guide

This guide covers deploying the Jeffery Onome Portfolio to various platforms.

## Table of Contents

- [Environment Variables](#environment-variables)
- [GitHub Pages](#github-pages)
- [Vercel](#vercel)
- [Netlify](#netlify)
- [Replit](#replit)
- [Custom Domain Setup](#custom-domain-setup)

---

## Environment Variables

The portfolio uses environment variables for configuration. All variables are optional and have sensible defaults.

### Frontend Variables (VITE_ prefix required)

```bash
# Contact Information
VITE_CONTACT_EMAIL=jeffemuodafe124@gmail.com
VITE_CONTACT_PHONE_PRIMARY=+234 805 258 7419
VITE_CONTACT_PHONE_SECONDARY=+234 901 704 8791
VITE_CONTACT_LOCATION=Lagos, Nigeria

# Social Links
VITE_LINKEDIN_URL=https://www.linkedin.com/in/jefferyonome
VITE_GITHUB_URL=https://github.com/jefferyonome
VITE_TWITTER_URL=https://twitter.com/jefferyonome

# Site Configuration
VITE_SITE_URL=https://jefferyonome.dev
VITE_API_BASE_URL=/api/v1
```

**Note**: Vite requires all frontend environment variables to be prefixed with `VITE_` to be accessible in the browser.

---

## GitHub Pages

### Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main`.

#### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository → Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Configure Secrets** (Optional):
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add any environment variables you want to override (e.g., `CONTACT_EMAIL`, `SITE_URL`)
   - The workflow uses sensible defaults if secrets aren't provided

3. **Trigger Deployment**:
   - Push to `main` branch or manually trigger the workflow
   - Go to Actions tab to monitor deployment progress

4. **Access Your Site**:
   - Your site will be available at `https://<username>.github.io/<repository-name>`
   - Update `VITE_SITE_URL` secret if using a custom domain

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy dist folder to gh-pages branch
npx gh-pages -d dist
```

---

## Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jefferyonome/onome-portfolio)

### Manual Setup

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Configure Environment Variables**:
   - Go to your project in Vercel dashboard
   - Navigate to Settings → Environment Variables
   - Add your `VITE_*` variables

5. **Redeploy** to apply changes:
   ```bash
   vercel --prod
   ```

### Vercel Configuration

The project includes optimal settings for Vercel:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## Netlify

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jefferyonome/onome-portfolio)

### Manual Setup via Git

1. **Connect Repository**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Choose your Git provider and repository

2. **Configure Build Settings**:
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Set Environment Variables**:
   - Go to Site settings → Build & deploy → Environment
   - Add your `VITE_*` variables

4. **Deploy**:
   - Netlify automatically deploys on every push to main

### Netlify CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

---

## Replit

### Deployment on Replit

1. **Configure Deployment**:
   - The project is already configured in `.replit`
   - Deployment type: `autoscale` (serverless)
   - Build command: `npm run build`
   - Run command: `npm run start`

2. **Set Environment Variables**:
   - Go to Replit Secrets (lock icon in sidebar)
   - Add your `VITE_*` variables
   - Secrets are automatically injected during build

3. **Deploy**:
   - Click the "Publish" button in Replit
   - Follow the prompts to complete deployment
   - Your site will get a custom `*.replit.app` domain

4. **Custom Domain** (paid plan):
   - Go to Deployments → Custom domains
   - Add your domain and follow DNS setup instructions

---

## Custom Domain Setup

### For GitHub Pages

1. **Add CNAME Record**:
   - In your DNS provider, add a CNAME record:
     ```
     Type: CNAME
     Name: www (or @)
     Value: <username>.github.io
     ```

2. **Configure in GitHub**:
   - Go to repository Settings → Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS"

3. **Update Site URL**:
   - Update `VITE_SITE_URL` to your custom domain
   - Redeploy

### For Vercel/Netlify

1. **Add Domain in Dashboard**:
   - Vercel: Settings → Domains
   - Netlify: Domain settings → Custom domains

2. **Update DNS Records**:
   - Follow platform-specific instructions for DNS configuration

3. **SSL Certificate**:
   - Both platforms automatically provision SSL certificates

---

## Build Optimization

### Production Build

```bash
# Run production build
npm run build

# Preview production build locally
npm run start
```

### Build Output

- **Bundle Size**: ~616KB total, ~77KB gzipped
- **Code Splitting**: Automatic chunking for optimal loading
- **Asset Optimization**: Images and fonts optimized
- **Source Maps**: Disabled in production for security

### Performance Tips

1. **Enable Caching**: All static assets are cached by default
2. **Use CDN**: Vercel/Netlify provide automatic CDN
3. **Lazy Loading**: Routes are lazy-loaded automatically
4. **Image Optimization**: Use modern formats (WebP, AVIF)

---

## Troubleshooting

### Build Fails

1. **Clear cache and reinstall**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Check Node version**: Ensure Node.js 20.x or higher

### Environment Variables Not Working

1. **Verify prefix**: Frontend vars must start with `VITE_`
2. **Rebuild**: Environment variables are baked into the build
3. **Check platform**: Each platform has different env var setup

### 404 on Refresh (SPA Routing)

Add platform-specific redirect rules:

**Netlify** (`public/_redirects`):
```
/*    /index.html   200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**GitHub Pages**: Not applicable (uses hash routing)

---

## Monitoring and Analytics

### Add Analytics

Uncomment and configure in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- Vercel Analytics -->
<script defer src="/_vercel/insights/script.js"></script>
```

### Error Monitoring

Consider adding:
- **Sentry**: For error tracking
- **LogRocket**: For session replay
- **Hotjar**: For user behavior analytics

---

## Security Checklist

Before deploying to production:

- [ ] Remove all console.log statements
- [ ] Verify no API keys are exposed
- [ ] Enable HTTPS (automatic on most platforms)
- [ ] Configure CSP headers if needed
- [ ] Review CORS settings if using backend
- [ ] Set up proper error boundaries
- [ ] Test all forms and user interactions

---

## Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Replit Deployment Docs](https://docs.replit.com/hosting/deployments)

---

## Support

For deployment issues:
1. Check the platform's documentation
2. Review build logs for errors
3. Verify environment variables are set correctly
4. Test the build locally first: `npm run build && npm run start`

**Need help?** Open an issue on [GitHub](https://github.com/jefferyonome/onome-portfolio/issues)
