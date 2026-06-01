# Quick Start Guide

## 🚀 Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
cd preetham-portfolio
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit `http://localhost:3000` (opens automatically)

---

## 📝 Essential Customizations

### 1. Update Your Name & Title
**File**: `src/components/Hero.jsx`
```javascript
<h1>Hi, I'm <span>Your Name</span></h1>
<h2>Your Title & Subtitle</h2>
```

### 2. Update Email
**File**: `src/components/Contact.jsx`
```javascript
value: 'your-email@example.com',
link: 'mailto:your-email@example.com',
```

### 3. Add Your Projects
**File**: `src/components/Projects.jsx`
```javascript
{
  id: 1,
  title: 'Your Project',
  category: 'Websites',
  description: 'Description',
  image: '🎨', // Replace with image
  technologies: ['Tech1', 'Tech2'],
  link: '#',
}
```

### 4. Update Experience
**File**: `src/components/Experience.jsx`
```javascript
{
  role: 'Your Role',
  company: 'Company Name',
  period: '2023 - Present',
  description: 'Description',
  achievements: ['Achievement 1', 'Achievement 2'],
}
```

### 5. Add Testimonials
**File**: `src/components/Testimonials.jsx`
```javascript
{
  name: 'Client Name',
  company: 'Company',
  role: 'Position',
  image: '👤',
  review: 'Their testimonial',
  rating: 5,
}
```

---

## 🎨 Customize Colors

**File**: `tailwind.config.js`
```javascript
colors: {
  primary: '#2563EB',      // Change this
  secondary: '#3B82F6',    // And this
  // ... other colors
}
```

---

## 🖼️ Replace Emoji with Images

### Profile Image
**File**: `src/components/Hero.jsx`
```javascript
// Replace:
<div className="text-6xl">👨‍💼</div>

// With:
<img src="/profile.jpg" alt="Profile" />
```

### Project Images
**File**: `src/components/Projects.jsx`
```javascript
// Replace:
image: '🎨',

// With:
image: '/project-image.jpg',
```

---

## 🔗 Update Social Links

**File**: `src/components/Contact.jsx` & `src/components/Footer.jsx`
```javascript
{
  name: 'LinkedIn',
  emoji: '💼',
  link: 'https://linkedin.com/in/your-profile',
}
```

---

## 📱 Test Responsive Design

- **Desktop**: Full width browser
- **Tablet**: 768px width
- **Mobile**: 375px width

Use browser DevTools to test different screen sizes.

---

## 🚀 Build for Production

```bash
npm run build
```

Creates optimized `dist` folder ready for deployment.

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Drag and drop the `dist` folder to Netlify

### GitHub Pages
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

---

## 🎯 Feature Checklist

- [ ] Update name and title
- [ ] Update email and contact info
- [ ] Add 3-6 projects
- [ ] Update experience
- [ ] Add testimonials
- [ ] Replace emoji with images
- [ ] Update social links
- [ ] Test on mobile
- [ ] Build for production
- [ ] Deploy

---

## 🆘 Common Issues

### Port 3000 in use?
```bash
npm run dev -- --port 3001
```

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling not updating?
- Clear browser cache
- Restart dev server
- Check Tailwind config

---

## 📚 Full Documentation

- **Setup Guide**: See `SETUP.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`
- **README**: See `README.md`

---

## 💡 Pro Tips

1. **Use Real Images** - Replace all emoji with professional photos
2. **Keep Content Fresh** - Regularly update projects and testimonials
3. **Test Everything** - Check on mobile, tablet, and desktop
4. **Optimize Images** - Compress before uploading
5. **Monitor Performance** - Use Lighthouse to check scores
6. **Get Feedback** - Share with peers and iterate
7. **Update Regularly** - Add new work as you complete projects

---

## 🎉 You're Ready!

Your premium portfolio is ready to impress. Customize it, deploy it, and start showcasing your amazing work!

**Happy designing! 🎨**
