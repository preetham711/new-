# Full Stack Portfolio System - Complete Implementation Guide

## 🎯 Project Overview

A complete full-stack portfolio management system with:
- **Frontend**: React + Vite with Tailwind CSS and Framer Motion
- **Backend**: Node.js + Express.js with JWT authentication
- **Database**: MySQL with 12 tables and proper relationships
- **Admin Panel**: Secure dashboard for managing portfolio content

---

## 📁 Project Structure

```
preetham-portfolio/
├── frontend/                          # React frontend
│   ├── src/
│   │   ├── components/               # React components
│   │   ├── pages/                    # Page components
│   │   │   ├── AdminLogin.jsx        # Admin login page
│   │   │   └── AdminDashboard.jsx    # Admin dashboard
│   │   ├── services/                 # API services
│   │   │   ├── api.js                # Axios instance
│   │   │   ├── authService.js        # Authentication
│   │   │   └── dataService.js        # Data operations
│   │   ├── App.jsx                   # Main app with routing
│   │   └── main.jsx
│   ├── package.json
│   ├── .env                          # Frontend config
│   └── vite.config.js
│
└── backend/                           # Node.js backend
    ├── config/
    │   └── database.js               # MySQL connection
    ├── middleware/
    │   ├── auth.js                   # JWT middleware
    │   └── errorHandler.js           # Error handling
    ├── routes/
    │   ├── auth.js                   # Auth endpoints
    │   ├── profile.js                # Profile endpoints
    │   ├── skills.js                 # Skills endpoints
    │   ├── projects.js               # Projects endpoints
    │   ├── experience.js             # Experience endpoints
    │   ├── education.js              # Education endpoints
    │   ├── testimonials.js           # Testimonials endpoints
    │   ├── contact.js                # Contact endpoints
    │   ├── socialLinks.js            # Social links endpoints
    │   └── settings.js               # Settings endpoints
    ├── database/
    │   └── schema.sql                # Database schema
    ├── server.js                     # Main server
    ├── package.json
    ├── .env                          # Backend config
    └── README.md
```

---

## 🚀 Quick Start Guide

### Step 1: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your database credentials
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=your_password
# DB_NAME=portfolio_db
# PORT=5000
# JWT_SECRET=your_secret_key
```

### Step 2: Database Setup

```bash
# Create database and tables
mysql -u root -p < database/schema.sql

# Or use MySQL Workbench to import schema.sql
```

### Step 3: Start Backend Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Backend runs on: `http://localhost:5000`

### Step 4: Frontend Setup

```bash
# Navigate to frontend directory
cd preetham-portfolio

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## 🔐 Authentication Flow

### 1. User Registration
```javascript
POST /api/auth/register
{
  "username": "preetham",
  "email": "preetham@example.com",
  "password": "password123",
  "first_name": "Preetham",
  "last_name": "Kumar"
}
```

### 2. User Login
```javascript
POST /api/auth/login
{
  "email": "preetham@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "username": "preetham",
    "email": "preetham@example.com",
    "first_name": "Preetham"
  }
}
```

### 3. Token Usage
All protected endpoints require the token in the Authorization header:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

---

## 📊 Database Schema

### 1. Admin Users
```sql
CREATE TABLE admin_users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Profile Information
```sql
CREATE TABLE profile_information (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  title VARCHAR(100),
  bio TEXT,
  profile_image_url VARCHAR(255),
  resume_url VARCHAR(255),
  location VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(100),
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

### 3. Skills
```sql
CREATE TABLE skills (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  skill_name VARCHAR(100) NOT NULL,
  category VARCHAR(50),
  proficiency_level ENUM('Beginner', 'Intermediate', 'Advanced', 'Expert'),
  years_of_experience INT,
  is_featured BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

### 4. Projects
```sql
CREATE TABLE projects (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  project_name VARCHAR(150) NOT NULL,
  description TEXT,
  technologies VARCHAR(255),
  project_url VARCHAR(255),
  thumbnail_url VARCHAR(255),
  is_featured BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

### 5. Project Gallery
```sql
CREATE TABLE project_gallery (
  id INT PRIMARY KEY AUTO_INCREMENT,
  project_id INT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id)
);
```

### 6. Experience
```sql
CREATE TABLE experience (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  company_name VARCHAR(150) NOT NULL,
  job_title VARCHAR(100) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  is_current BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

### 7. Education
```sql
CREATE TABLE education (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  institution_name VARCHAR(150) NOT NULL,
  degree VARCHAR(100) NOT NULL,
  field_of_study VARCHAR(100),
  start_date DATE NOT NULL,
  end_date DATE,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

### 8. Testimonials
```sql
CREATE TABLE testimonials (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  client_name VARCHAR(100) NOT NULL,
  client_company VARCHAR(150),
  testimonial_text TEXT NOT NULL,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

### 9. Design Process
```sql
CREATE TABLE design_process (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  step_number INT NOT NULL,
  step_title VARCHAR(100) NOT NULL,
  step_description TEXT,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

### 10. Contact Messages
```sql
CREATE TABLE contact_messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  sender_name VARCHAR(100) NOT NULL,
  sender_email VARCHAR(100) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

### 11. Social Links
```sql
CREATE TABLE social_links (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  platform_name VARCHAR(50) NOT NULL,
  profile_url VARCHAR(255) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

### 12. Website Settings
```sql
CREATE TABLE website_settings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT NOT NULL,
  setting_key VARCHAR(100) NOT NULL,
  setting_value LONGTEXT,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id)
);
```

---

## 🔌 API Endpoints

### Authentication (4 endpoints)
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - Logout user

### Profile (3 endpoints)
- `GET /api/profile` - Get user profile (protected)
- `GET /api/profile/public/:adminId` - Get public profile
- `POST /api/profile` - Create/Update profile (protected)

### Skills (6 endpoints)
- `GET /api/skills` - Get all skills
- `GET /api/skills/featured` - Get featured skills
- `GET /api/skills/:id` - Get single skill
- `POST /api/skills` - Create skill (protected)
- `PUT /api/skills/:id` - Update skill (protected)
- `DELETE /api/skills/:id` - Delete skill (protected)

### Projects (6 endpoints)
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project with gallery
- `POST /api/projects` - Create project (protected)
- `PUT /api/projects/:id` - Update project (protected)
- `DELETE /api/projects/:id` - Delete project (protected)

### Experience (6 endpoints)
- `GET /api/experience` - Get all experience
- `GET /api/experience/:id` - Get single experience
- `POST /api/experience` - Create experience (protected)
- `PUT /api/experience/:id` - Update experience (protected)
- `DELETE /api/experience/:id` - Delete experience (protected)

### Education (6 endpoints)
- `GET /api/education` - Get all education
- `GET /api/education/:id` - Get single education
- `POST /api/education` - Create education (protected)
- `PUT /api/education/:id` - Update education (protected)
- `DELETE /api/education/:id` - Delete education (protected)

### Testimonials (6 endpoints)
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/featured` - Get featured testimonials
- `GET /api/testimonials/:id` - Get single testimonial
- `POST /api/testimonials` - Create testimonial (protected)
- `PUT /api/testimonials/:id` - Update testimonial (protected)
- `DELETE /api/testimonials/:id` - Delete testimonial (protected)

### Contact (7 endpoints)
- `GET /api/contact` - Get all messages (protected)
- `GET /api/contact/unread/count` - Get unread count (protected)
- `GET /api/contact/:id` - Get single message (protected)
- `POST /api/contact/submit` - Submit contact form (public)
- `PUT /api/contact/:id/read` - Mark as read (protected)
- `PUT /api/contact/:id/reply` - Reply to message (protected)
- `DELETE /api/contact/:id` - Delete message (protected)

### Social Links (5 endpoints)
- `GET /api/social-links` - Get all social links
- `GET /api/social-links/:id` - Get single social link
- `POST /api/social-links` - Create social link (protected)
- `PUT /api/social-links/:id` - Update social link (protected)
- `DELETE /api/social-links/:id` - Delete social link (protected)

### Settings (5 endpoints)
- `GET /api/settings` - Get all settings (protected)
- `GET /api/settings/:key` - Get single setting (protected)
- `POST /api/settings` - Create/Update setting (protected)
- `PUT /api/settings/:key` - Update setting by key (protected)
- `DELETE /api/settings/:key` - Delete setting (protected)

---

## 🛡️ Security Features

### 1. Password Security
- Passwords hashed with bcryptjs
- Minimum 6 characters required
- Never stored in plain text

### 2. JWT Authentication
- Tokens expire after 7 days
- Tokens stored in localStorage
- Validated on every protected request

### 3. Data Protection
- SQL injection prevention via parameterized queries
- Input validation on all endpoints
- CORS configured for frontend only

### 4. Access Control
- Ownership verification for resources
- Admin-only endpoints protected
- Public endpoints for portfolio viewing

---

## 📝 Frontend Integration

### 1. API Service Setup

```javascript
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### 2. Authentication Service

```javascript
// src/services/authService.js
import api from './api';

const authService = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};

export default authService;
```

### 3. Data Service

```javascript
// src/services/dataService.js
import api from './api';

const dataService = {
  getSkills: async () => {
    const response = await api.get('/skills');
    return response.data;
  },

  getProjects: async () => {
    const response = await api.get('/projects');
    return response.data;
  },

  // ... more methods
};

export default dataService;
```

### 4. Using in Components

```javascript
import { useEffect, useState } from 'react';
import dataService from '../services/dataService';

export default function SkillsComponent() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await dataService.getSkills();
        setSkills(response.data);
      } catch (error) {
        console.error('Error loading skills:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.id}>{skill.skill_name}</div>
      ))}
    </div>
  );
}
```

---

## 🧪 Testing API Endpoints

### Using cURL

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "preetham",
    "email": "preetham@example.com",
    "password": "password123",
    "first_name": "Preetham",
    "last_name": "Kumar"
  }'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "preetham@example.com",
    "password": "password123"
  }'

# Get Skills (with token)
curl -X GET http://localhost:5000/api/skills \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Create Skill
curl -X POST http://localhost:5000/api/skills \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "skill_name": "JavaScript",
    "category": "Programming",
    "proficiency_level": "Expert",
    "years_of_experience": 5
  }'
```

### Using Postman

1. Create a new collection
2. Set base URL: `http://localhost:5000/api`
3. Create requests for each endpoint
4. Use environment variables for token

---

## 🚀 Deployment

### Backend Deployment (Heroku)

```bash
# Create Procfile
echo "web: npm start" > Procfile

# Deploy to Heroku
heroku create your-app-name
heroku config:set DB_HOST=your_db_host
heroku config:set DB_USER=your_db_user
heroku config:set DB_PASSWORD=your_db_password
heroku config:set JWT_SECRET=your_secret
git push heroku main
```

### Frontend Deployment (Vercel)

```bash
# Build
npm run build

# Deploy
vercel deploy --prod
```

### Database Deployment

Use managed database services:
- AWS RDS
- DigitalOcean Managed Databases
- Google Cloud SQL
- Azure Database for MySQL

---

## 📚 Documentation Files

1. **backend/README.md** - Backend overview
2. **backend/SETUP_GUIDE.md** - Setup instructions
3. **backend/API_DOCUMENTATION.md** - API reference
4. **backend/FRONTEND_INTEGRATION.md** - Frontend integration
5. **FULLSTACK_IMPLEMENTATION_GUIDE.md** - This file

---

## 🔧 Troubleshooting

### Database Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:3306
```
- Ensure MySQL is running
- Check DB credentials in .env
- Verify database exists

### CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
- Check CORS_ORIGIN in backend .env
- Ensure it matches frontend URL
- Restart backend after changes

### JWT Token Error
```
Error: Invalid token
```
- Ensure token is in Authorization header
- Check token hasn't expired
- Verify JWT_SECRET matches

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
- Change PORT in .env
- Or kill process using the port

---

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review error messages carefully
3. Check backend logs
4. Verify database connection
5. Test API endpoints with cURL

---

## ✅ Checklist

- [ ] Backend installed and running
- [ ] Database created and populated
- [ ] Frontend installed and running
- [ ] Admin login working
- [ ] API endpoints tested
- [ ] Frontend connected to backend
- [ ] Admin dashboard functional
- [ ] Portfolio pages loading data from database
- [ ] Contact form submitting to database
- [ ] All CRUD operations working

---

## 🎉 Summary

You now have a complete full-stack portfolio system with:
- ✅ Secure authentication
- ✅ Complete database schema
- ✅ 40+ API endpoints
- ✅ Admin dashboard
- ✅ Frontend integration
- ✅ Input validation
- ✅ Error handling
- ✅ CORS configuration
- ✅ JWT token management
- ✅ Comprehensive documentation

The system is production-ready and can be deployed to any hosting platform.

---

**Created:** June 1, 2026
**Version:** 1.0.0
**Status:** Production Ready
