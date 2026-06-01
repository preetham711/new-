# Component Reference Guide

A detailed guide to every component in the portfolio.

---

## 📋 Table of Contents

1. [Navigation Components](#navigation-components)
2. [Section Components](#section-components)
3. [Utility Components](#utility-components)
4. [Styling System](#styling-system)

---

## Navigation Components

### Navbar.jsx
**Location**: `src/components/Navbar.jsx`

**Purpose**: Main navigation bar with dark mode toggle

**Features**:
- Sticky positioning
- Dark mode toggle button
- Mobile hamburger menu
- Smooth scroll navigation
- Responsive design

**Key Props**: 
- `darkMode` (boolean) - Current theme
- `setDarkMode` (function) - Theme setter

**Customization**:
```javascript
// Update navigation items
const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  // Add more items
]
```

**Styling**:
- Glass effect background
- Blue gradient logo
- Smooth transitions

---

### Footer.jsx
**Location**: `src/components/Footer.jsx`

**Purpose**: Footer with navigation and social links

**Features**:
- Brand logo
- Navigation links
- Social media links
- Contact information
- Copyright notice

**Customization**:
```javascript
// Update social links
const socialLinks = [
  { name: 'LinkedIn', emoji: '💼' },
  // Add more links
]
```

**Styling**:
- Dark background
- Gradient text for logo
- Responsive grid layout

---

## Section Components

### Hero.jsx
**Location**: `src/components/Hero.jsx`

**Purpose**: Hero section with introduction

**Features**:
- Large heading with gradient text
- Professional description
- CTA buttons
- Floating profile image
- Animated badges
- Scroll indicator

**Customization**:
```javascript
// Update heading
<h1>Hi, I'm <span>Your Name</span></h1>

// Update subtitle
<h2>Your Title & Subtitle</h2>

// Update description
<p>Your professional description</p>
```

**Animations**:
- Fade in on load
- Floating profile image
- Rotating badges
- Scroll indicator animation

---

### About.jsx
**Location**: `src/components/About.jsx`

**Purpose**: About section with statistics

**Features**:
- Personal introduction
- Design philosophy
- Statistics cards
- Animated counters
- Two-column layout

**Customization**:
```javascript
// Update statistics
const stats = [
  { number: 50, label: 'Projects Completed', suffix: '+' },
  // Update numbers
]
```

**Animations**:
- Fade in on scroll
- Counter animation
- Card hover effects

---

### Skills.jsx
**Location**: `src/components/Skills.jsx`

**Purpose**: Skills showcase with proficiency bars

**Features**:
- Categorized skills
- Skill cards with icons
- Proficiency bars
- Animated bars
- Responsive grid

**Customization**:
```javascript
// Update skill categories
const skillCategories = [
  {
    title: 'Design Skills',
    skills: ['UI Design', 'UX Design', 'User Research'],
  },
  // Add more categories
]

// Update proficiency levels
{
  skill: 'UI/UX Design',
  level: 95,
}
```

**Animations**:
- Bars fill on scroll
- Card hover lift
- Icon animations

---

### Projects.jsx
**Location**: `src/components/Projects.jsx`

**Purpose**: Project showcase with filtering

**Features**:
- Project grid (3 columns)
- Category filtering
- Project cards
- Technology tags
- Action buttons
- Smooth filtering

**Customization**:
```javascript
// Add projects
const projects = [
  {
    id: 1,
    title: 'Project Title',
    category: 'Websites',
    description: 'Description',
    image: '🎨',
    technologies: ['Tech1', 'Tech2'],
    link: '#',
  },
]

// Update categories
const categories = ['All', 'Mobile Apps', 'Websites', 'Dashboards', 'SaaS Products']
```

**Animations**:
- Fade in/out on filter
- Card hover lift
- Button animations

---

### DesignProcess.jsx
**Location**: `src/components/DesignProcess.jsx`

**Purpose**: Design methodology timeline

**Features**:
- 6-step process
- Timeline layout
- Step cards
- Animated icons
- Connecting line
- Responsive design

**Customization**:
```javascript
// Update process steps
const steps = [
  {
    number: '01',
    title: 'Research',
    description: 'Description',
    icon: FiSearch,
  },
  // Update steps
]
```

**Animations**:
- Icon rotation on hover
- Card lift on hover
- Connecting line

---

### Experience.jsx
**Location**: `src/components/Experience.jsx`

**Purpose**: Professional experience timeline

**Features**:
- Timeline layout
- Experience cards
- Achievements list
- Alternating layout
- Timeline dots
- Responsive design

**Customization**:
```javascript
// Add experiences
const experiences = [
  {
    role: 'Your Role',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Description',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
]
```

**Animations**:
- Slide in from left
- Card hover lift
- Timeline dot animation

---

### Testimonials.jsx
**Location**: `src/components/Testimonials.jsx`

**Purpose**: Client testimonials showcase

**Features**:
- Testimonial cards
- Star ratings
- Client information
- Avatar emoji
- Grid layout
- Trust badge

**Customization**:
```javascript
// Add testimonials
const testimonials = [
  {
    name: 'Client Name',
    company: 'Company',
    role: 'Position',
    image: '👤',
    review: 'Their testimonial',
    rating: 5,
  },
]
```

**Animations**:
- Fade in on scroll
- Card hover lift
- Star animations

---

### Contact.jsx
**Location**: `src/components/Contact.jsx`

**Purpose**: Contact form and information

**Features**:
- Contact form
- Form validation
- Success message
- Contact information
- Social links
- Responsive design

**Customization**:
```javascript
// Update contact info
const contactInfo = [
  {
    label: 'Email',
    value: 'your-email@example.com',
    link: 'mailto:your-email@example.com',
  },
]

// Update social links
{
  name: 'LinkedIn',
  emoji: '💼',
  link: 'https://linkedin.com/in/your-profile',
}
```

**Form Fields**:
- Name (required)
- Email (required)
- Subject (required)
- Message (required)

**Animations**:
- Form fade in
- Button animations
- Success message

---

## Utility Components

### ScrollProgress.jsx
**Location**: `src/components/ScrollProgress.jsx`

**Purpose**: Scroll progress indicator

**Features**:
- Fixed position at top
- Gradient color
- Smooth animation
- Shows scroll percentage

**How it works**:
- Listens to scroll events
- Calculates scroll percentage
- Updates width dynamically

**Customization**:
```javascript
// Change gradient color in index.css
.scroll-progress {
  background: linear-gradient(90deg, #2563EB, #3B82F6);
}
```

---

### BackToTop.jsx
**Location**: `src/components/BackToTop.jsx`

**Purpose**: Back to top button

**Features**:
- Appears after scrolling 300px
- Smooth scroll animation
- Floating position
- Hover effects

**How it works**:
- Listens to scroll events
- Shows/hides based on scroll position
- Smooth scroll to top on click

**Customization**:
```javascript
// Change scroll threshold
if (window.scrollY > 300) {
  setIsVisible(true)
}
```

---

### CountUp.jsx
**Location**: `src/utils/CountUp.jsx`

**Purpose**: Animated counter component

**Features**:
- Smooth counting animation
- Customizable end number
- Optional suffix
- 30ms interval

**Usage**:
```javascript
<CountUp end={50} suffix="+" />
```

**Props**:
- `end` (number) - Final count value
- `suffix` (string) - Text after number

---

### useInView.js
**Location**: `src/utils/useInView.js`

**Purpose**: Custom intersection observer hook

**Features**:
- Detects when element enters viewport
- Trigger once option
- Customizable threshold
- Cleanup on unmount

**Usage**:
```javascript
const { ref, inView } = useInView({ 
  threshold: 0.3, 
  triggerOnce: true 
})

return <div ref={ref}>{inView && <Content />}</div>
```

**Props**:
- `threshold` (number) - Visibility threshold (0-1)
- `triggerOnce` (boolean) - Only trigger once

---

## Styling System

### Color Palette
**File**: `tailwind.config.js`

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

### Typography
**Font**: Inter (Google Fonts)
**Weights**: 300, 400, 500, 600, 700, 800

### Spacing
- **Small**: 4px (1 unit)
- **Medium**: 8px (2 units)
- **Large**: 16px (4 units)
- **XL**: 24px (6 units)
- **2XL**: 32px (8 units)

### Border Radius
- **Small**: 8px
- **Medium**: 12px
- **Large**: 16px
- **XL**: 24px

### Shadows
- **Soft**: `0 4px 6px rgba(0, 0, 0, 0.07)`
- **Soft-lg**: `0 10px 15px rgba(0, 0, 0, 0.1)`
- **Glass**: `0 8px 32px rgba(31, 38, 135, 0.37)`

### Glass Effect
```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## Component Hierarchy

```
App
├── Navbar
├── Hero
├── About
├── Skills
├── Projects
├── DesignProcess
├── Experience
├── Testimonials
├── Contact
├── Footer
├── ScrollProgress
└── BackToTop
```

---

## Animation Patterns

### Fade In
```javascript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

### Slide Up
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Hover Scale
```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Stagger
```javascript
variants={{
  container: {
    staggerChildren: 0.1,
  },
}}
```

---

## Responsive Patterns

### Mobile First
```javascript
// Mobile (default)
className="w-full"

// Tablet and up
className="md:w-1/2"

// Desktop and up
className="lg:w-1/3"
```

### Grid Layouts
```javascript
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 3 columns
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
```

---

## Best Practices

### Component Organization
- One component per file
- Clear naming conventions
- Reusable components
- Proper prop types

### Styling
- Use Tailwind classes
- Avoid inline styles
- Use CSS variables for colors
- Maintain consistency

### Animations
- Use Framer Motion
- Keep animations smooth
- Avoid excessive animations
- Test performance

### Accessibility
- Use semantic HTML
- Add ARIA labels
- Ensure keyboard navigation
- Test with screen readers

---

## Common Customizations

### Change Primary Color
**File**: `tailwind.config.js`
```javascript
primary: '#YOUR_COLOR',
```

### Add New Section
1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add to JSX
4. Add to navigation

### Update Content
- Edit component files directly
- Update arrays and objects
- Replace text and images

### Add New Project
**File**: `src/components/Projects.jsx`
```javascript
{
  id: 7,
  title: 'New Project',
  category: 'Category',
  description: 'Description',
  image: '🎨',
  technologies: ['Tech1', 'Tech2'],
  link: '#',
}
```

---

## Troubleshooting

### Component Not Showing
- Check import statement
- Verify component is added to App.jsx
- Check console for errors

### Styling Not Applied
- Clear browser cache
- Restart dev server
- Check Tailwind config
- Verify class names

### Animation Not Working
- Check Framer Motion import
- Verify animation props
- Check browser console
- Test in different browser

---

## Performance Tips

- Use React.memo for expensive components
- Lazy load images
- Optimize animations
- Use production build
- Monitor bundle size

---

## Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons)

---

**Happy coding! 🚀**
