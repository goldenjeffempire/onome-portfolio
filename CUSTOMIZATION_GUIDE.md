# 🎨 Portfolio Customization Guide

This guide will help you customize this portfolio website to make it your own.

## 📋 Quick Customization Checklist

### 1. **Personal Information** (Required)
Update your contact details and social media links:

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your information
```

**Edit `.env` file:**
```bash
# Your Contact Information
VITE_CONTACT_EMAIL=your.email@example.com
VITE_CONTACT_PHONE_PRIMARY=+1 234 567 8900
VITE_CONTACT_PHONE_SECONDARY=+1 234 567 8901
VITE_CONTACT_LOCATION=Your City, Country

# Your Social Media Links
VITE_LINKEDIN_URL=https://www.linkedin.com/in/yourprofile
VITE_GITHUB_URL=https://github.com/yourusername
VITE_TWITTER_URL=https://twitter.com/yourusername

# Your Website URL
VITE_SITE_URL=https://yourportfolio.dev
```

### 2. **Profile Image**
Replace `/public/profile.jpg` with your professional photo.
- **Recommended size**: 800x800px or higher
- **Format**: JPG or PNG
- **File size**: Keep under 500KB for optimal loading

### 3. **Update Content**

#### **Hero Section** (`src/components/Hero.tsx`)
```tsx
// Line 113: Change your name
Jeffery Onome Emuodafevware → Your Full Name

// Line 122: Change your title/tagline
Software Engineer | AI/ML Expert | Full Stack Developer
→ Your Professional Title
```

#### **About Section** (`src/components/About.tsx`)
- Lines 46-61: Update your bio and story
- Lines 47-48: Change years of experience
- Lines 52-53: Update company/position

#### **Experience** (`src/components/Experience.tsx`)
Update the `experiences` array (lines 5-50) with your work history:
```tsx
{
  role: "Your Role",
  company: "Your Company",
  period: "Start Date — End Date",
  location: "City, Country / Remote",
  description: `
    • Achievement 1
    • Achievement 2
    • Achievement 3
  `,
}
```

#### **Skills** (`src/components/Skills.tsx`)
Update your skills and proficiency levels in the component.

#### **Projects** (`src/components/Projects.tsx`)
Update the `projects` array (lines 15-60) with your projects:
```tsx
{
  title: "Your Project Name",
  description: "Brief description of the project",
  tech: ["React", "Node.js", "etc"],
  image: "https://your-image-url.com",
  liveUrl: "https://project-demo.com",  // Optional
  githubUrl: "https://github.com/you/repo",  // Optional
  featured: true,  // Optional: shows featured badge
  size: "large",  // Options: "small", "medium", "large"
}
```

**Project Images:**
- Use high-quality screenshots or graphics
- Recommended: Unsplash (https://unsplash.com) for placeholder images
- Size: 800x600px minimum

#### **Blog Posts** (`src/data/expandedBlogPosts.ts`)
Add your blog posts to the `blogPosts` array.

#### **Education** (`src/components/Education.tsx`)
Update your educational background.

#### **Testimonials** (`src/components/Testimonials.tsx`)
Add client/colleague testimonials.

### 4. **Branding & Colors**

#### **Update Color Scheme** (`tailwind.config.js`)
The default theme uses sky-blue and purple. To change:
```js
colors: {
  sky: colors.sky,     // Change to your primary color
  purple: colors.purple, // Change to your secondary color
}
```

#### **Update Favicon** 
Replace `/public/favicon.svg` with your logo.

#### **Update Page Title** (`index.html`, line 9)
```html
<title>Your Name | Your Professional Title</title>
```

### 5. **SEO Optimization**

#### **Update Meta Tags** (`index.html`)
Lines 8-28: Update:
- Title
- Description
- Keywords
- Author
- Open Graph tags
- Twitter card tags

#### **Update Sitemap** (`public/sitemap.xml`)
Replace `https://jefferyonome.dev` with your actual domain.

#### **Update robots.txt** (`public/robots.txt`)
Replace the sitemap URL with your domain.

### 6. **Optional: Remove Resume Download**
The resume download button has been replaced with "View Projects" button in the CTA component. If you want to add a real resume:

1. Add your `resume.pdf` to `/public/` folder
2. Update `src/components/CTA.tsx`:
```tsx
// Replace the "View Projects" button with:
<motion.a
  href="/resume.pdf"
  download
  className="inline-flex items-center gap-2 glass border border-sky-500/30 text-sky-400 px-8 py-4 rounded-full text-lg font-semibold transition-all"
>
  <Download size={20} />
  Download Resume
</motion.a>
```

## 🧪 Testing Your Changes

After customization:

1. **Check all links work:**
   - Navigation menu
   - Footer links
   - Social media icons
   - Project links
   - Contact form

2. **Test on mobile:**
   - Hamburger menu works
   - All sections display correctly
   - Touch interactions work

3. **Verify images load:**
   - Profile photo
   - Project images
   - Blog images

4. **Test forms:**
   - Contact form opens email client
   - Validation works

## 🚀 Deployment

Once customized, deploy your portfolio:

### **Option 1: Replit (Easiest)**
1. Click "Deploy" in Replit
2. Follow the publishing wizard
3. Your site will be live at `your-repl.replit.app`

### **Option 2: Vercel (Recommended for Production)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Option 3: Netlify**
```bash
# Build the project
npm run build

# Deploy the `dist` folder to Netlify
```

### **Option 4: GitHub Pages**
See `docs/DEPLOYMENT.md` for detailed instructions.

## 📝 Common Issues

### **Links not working?**
- Make sure you've restarted the dev server after changing .env
- Check that React Router is properly configured

### **Images not loading?**
- Images in `/public/` should be referenced as `/image.jpg`
- External URLs should use `https://`
- Check browser console for errors

### **Contact form not opening email?**
- This is normal if you don't have a default email client
- Consider adding a backend service or using Formspree/EmailJS

### **Styles not applying?**
- Run `npm run build` to ensure Tailwind is processing correctly
- Clear browser cache
- Check for typos in class names

## 🆘 Need Help?

- Check the main [README.md](./README.md) for setup instructions
- Review [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines
- See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for deployment help

## ✨ Tips for a Professional Portfolio

1. **Quality over Quantity**: Show 4-6 strong projects rather than 20 mediocre ones
2. **Real Data**: Use actual metrics and achievements in your experience
3. **Professional Photos**: Use a high-quality, professional-looking profile photo
4. **Keep it Updated**: Regularly update your projects and experience
5. **Test Everything**: Before going live, test all links and forms
6. **Mobile First**: Ensure it looks great on mobile devices
7. **Fast Loading**: Optimize images and keep bundle size small
8. **SEO Matters**: Fill out all meta tags properly

---

**Ready to go live?** Follow the deployment section above and share your portfolio with the world! 🎉
