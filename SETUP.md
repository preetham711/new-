# Setup Guide - Preetham Portfolio

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The portfolio will open automatically at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar with dark mode toggle
│   ├── Hero.jsx        # Hero section with introduction
│   ├── About.jsx       # About section with stats
│   ├── Skills.jsx      # Skills showcase with proficiency bars
│   ├── Projects.jsx    # Projects grid with filtering
│   ├── DesignProcess.jsx # Design methodology timeline
│   ├── Experience.jsx  # Professional experience timeline
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx     # Contact form and info
│   ├── Footer.jsx      # Footer with links
│   ├── ScrollProgress.jsx # Scroll progress indicator
│   └── BackToTop.jsx   # Back to top button
├── utils/              # Utility functions
│   ├── CountUp.jsx     # Animated counter component
│   └── useInView.js    # Custom intersection observer hook
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Customization Guide

### 1. Update Personal Information

**Hero Section** (`src/components/Hero.jsx`):
```javascript
// Update the main heading and description
<h1>Hi, I'm <span>Your Name</span></h1>
<h2>Your Title & Subtitle</h2>
<p>Your professional description</p>
```

**Contact Section** (`src/components/Contact.jsx`):
```javascript
const contactInfo = [
  {
    label: 'Email',
    value: 'your-email@example.com',
    link: 'mailto:your-email@example.com',
  },
  // ... update other contact info
]
```

### 2. Update Projects

Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Websites',
    description: 'Project description',
    image: '🎨', // Replace with actual image
    technologies: ['Tech1', 'Tech2'],
    link: 'https://your-project-link.com',
  },
  // ... add more projects
]
```

### 3. Update Experience

Edit `src/components/Experience.jsx`:
```javascript
const experiences = [
  {
    role: 'Your Role',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Your description',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
  // ... add more experiences
]
```

### 4. Update Testimonials

Edit `src/components/Testimonials.jsx`:
```javascript
const testimonials = [
  {
    name: 'Client Name',
    company: 'Company',
    role: 'Position',
    image: '👤',
    review: 'Their testimonial',
    rating: 5,
  },
  // ... add more testimonials
]
```

### 5. Update Skills

Edit `src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    title: 'Design Skills',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // ... add more categories
]
```

### 6. Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#2563EB',      // Main blue
  secondary: '#3B82F6',    // Light blue
  background: '#FFFFFF',   // White
  lightBg: '#F8FAFC',      // Light gray
  text: '#0F172A',         // Dark text
  textSecondary: '#64748B', // Gray text
}
```

### 7. Replace Emoji with Real Images

**Profile Image** in `Hero.jsx`:
```javascript
// Replace this:
<div className="text-6xl">👨‍💼</div>

// With this:
<img src="/path/to/image.jpg" alt="Profile" className="w-full h-full object-cover" />
```

**Project Images** in `Projects.jsx`:
```javascript
// Replace emoji with:
<img src="/path/to/project-image.jpg" alt={project.title} />
```

### 8. Update Social Links

Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`:
```javascript
{
  name: 'LinkedIn',
  emoji: '💼',
  link: 'https://linkedin.com/in/your-profile',
}
```

## Features Explained

### Dark Mode
- Toggle button in navbar
- Automatically applies dark theme to all components
- Persists across page refreshes (optional - add localStorage)

### Smooth Scrolling
- Click navigation links to smoothly scroll to sections
- Scroll progress bar at top
- Back to top button appears after scrolling

### Animations
- Framer Motion for smooth transitions
- Hover effects on cards and buttons
- Staggered animations for lists
- Scroll-triggered animations

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu on mobile
- Optimized touch targets

### Performance
- Lazy loading with intersection observer
- Optimized images
- Code splitting with Vite
- Fast build times

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

2. Build and push:
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

## SEO Optimization

1. Update meta tags in `index.html`
2. Add Open Graph tags for social sharing
3. Ensure fast page load times
4. Use semantic HTML
5. Add structured data (optional)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on buttons

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling issues
- Clear browser cache
- Restart dev server
- Check Tailwind config

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)

## Support

For issues or questions, refer to the component files for detailed comments and structure.

---

Happy customizing! 🎨
