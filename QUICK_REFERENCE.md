# Full Stack Portfolio System - Quick Reference Guide

## 🚀 Quick Start Commands

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
mysql -u root -p < database/schema.sql
npm run dev
```

### Frontend Setup
```bash
cd preetham-portfolio
npm install
npm run dev
```

### Access Points
- **Frontend**: http://localhost:5173
- **Admin Login**: http://localhost:5173/admin/login
- **Admin Dashboard**: http://localhost:5173/admin/dashboard
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

---

## 📝 Environment Variables

### Backend (.env)
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
DB_PORT=3306
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🔐 Authentication

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "Admin@123",
    "first_name": "Admin",
    "last_name": "User"
  }'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "Admin@123"
  }'
```

### Get Current User
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 📊 API Endpoints Quick Reference

### Skills
```bash
# Get all skills
curl http://localhost:5000/api/skills

# Get featured skills
curl http://localhost:5000/api/skills/featured

# Create skill
curl -X POST http://localhost:5000/api/skills \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"skill_name":"JavaScript","category":"Programming","proficiency_level":"Expert"}'

# Update skill
curl -X PUT http://localhost:5000/api/skills/1 \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"skill_name":"JavaScript","proficiency_level":"Expert"}'

# Delete skill
curl -X DELETE http://localhost:5000/api/skills/1 \
  -H "Authorization: Bearer TOKEN"
```

### Projects
```bash
# Get all projects
curl http://localhost:5000/api/projects

# Get featured projects
curl http://localhost:5000/api/projects/featured

# Get single project
curl http://localhost:5000/api/projects/1

# Create project
curl -X POST http://localhost:5000/api/projects \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"project_name":"My Project","description":"Description","technologies":"React,Node.js"}'

# Update project
curl -X PUT http://localhost:5000/api/projects/1 \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"project_name":"Updated Project"}'

# Delete project
curl -X DELETE http://localhost:5000/api/projects/1 \
  -H "Authorization: Bearer TOKEN"
```

### Experience
```bash
# Get all experience
curl http://localhost:5000/api/experience

# Create experience
curl -X POST http://localhost:5000/api/experience \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"company_name":"Company","job_title":"Designer","start_date":"2023-01-01"}'

# Update experience
curl -X PUT http://localhost:5000/api/experience/1 \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"job_title":"Senior Designer"}'

# Delete experience
curl -X DELETE http://localhost:5000/api/experience/1 \
  -H "Authorization: Bearer TOKEN"
```

### Education
```bash
# Get all education
curl http://localhost:5000/api/education

# Create education
curl -X POST http://localhost:5000/api/education \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"institution_name":"University","degree":"Bachelor","start_date":"2018-09-01"}'

# Update education
curl -X PUT http://localhost:5000/api/education/1 \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"degree":"Master"}'

# Delete education
curl -X DELETE http://localhost:5000/api/education/1 \
  -H "Authorization: Bearer TOKEN"
```

### Testimonials
```bash
# Get all testimonials
curl http://localhost:5000/api/testimonials

# Get featured testimonials
curl http://localhost:5000/api/testimonials/featured

# Create testimonial
curl -X POST http://localhost:5000/api/testimonials \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"client_name":"John","client_company":"Company","testimonial_text":"Great work!","rating":5}'

# Update testimonial
curl -X PUT http://localhost:5000/api/testimonials/1 \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"rating":5}'

# Delete testimonial
curl -X DELETE http://localhost:5000/api/testimonials/1 \
  -H "Authorization: Bearer TOKEN"
```

### Contact Messages
```bash
# Get all messages
curl http://localhost:5000/api/contact \
  -H "Authorization: Bearer TOKEN"

# Get unread count
curl http://localhost:5000/api/contact/unread/count \
  -H "Authorization: Bearer TOKEN"

# Submit contact form
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"admin_id":1,"sender_name":"John","sender_email":"john@example.com","subject":"Inquiry","message":"Hello"}'

# Mark as read
curl -X PUT http://localhost:5000/api/contact/1/read \
  -H "Authorization: Bearer TOKEN"

# Reply to message
curl -X PUT http://localhost:5000/api/contact/1/reply \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"reply_message":"Thank you for your message"}'

# Delete message
curl -X DELETE http://localhost:5000/api/contact/1 \
  -H "Authorization: Bearer TOKEN"
```

### Social Links
```bash
# Get all social links
curl http://localhost:5000/api/social-links

# Create social link
curl -X POST http://localhost:5000/api/social-links \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"platform_name":"LinkedIn","profile_url":"https://linkedin.com/in/preetham"}'

# Update social link
curl -X PUT http://localhost:5000/api/social-links/1 \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"profile_url":"https://linkedin.com/in/preetham-new"}'

# Delete social link
curl -X DELETE http://localhost:5000/api/social-links/1 \
  -H "Authorization: Bearer TOKEN"
```

### Settings
```bash
# Get all settings
curl http://localhost:5000/api/settings \
  -H "Authorization: Bearer TOKEN"

# Get single setting
curl http://localhost:5000/api/settings/site_title \
  -H "Authorization: Bearer TOKEN"

# Create/Update setting
curl -X POST http://localhost:5000/api/settings \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"setting_key":"site_title","setting_value":"My Portfolio"}'

# Update setting by key
curl -X PUT http://localhost:5000/api/settings/site_title \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"setting_value":"My New Portfolio"}'

# Delete setting
curl -X DELETE http://localhost:5000/api/settings/site_title \
  -H "Authorization: Bearer TOKEN"
```

---

## 🗄️ Database Commands

### Create Database
```bash
mysql -u root -p < database/schema.sql
```

### Connect to Database
```bash
mysql -u root -p portfolio_db
```

### View Tables
```sql
SHOW TABLES;
```

### View Table Structure
```sql
DESCRIBE admin_users;
DESCRIBE profile_information;
DESCRIBE skills;
DESCRIBE projects;
```

### View Data
```sql
SELECT * FROM admin_users;
SELECT * FROM skills;
SELECT * FROM projects;
SELECT * FROM experience;
```

### Backup Database
```bash
mysqldump -u root -p portfolio_db > backup.sql
```

### Restore Database
```bash
mysql -u root -p portfolio_db < backup.sql
```

---

## 🧪 Testing

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Test All Endpoints
```bash
# Get all data
curl http://localhost:5000/api/skills
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/experience
curl http://localhost:5000/api/education
curl http://localhost:5000/api/testimonials
curl http://localhost:5000/api/social-links
```

### Test with Postman
1. Import collection from backend/postman_collection.json
2. Set environment variables
3. Run requests

---

## 🐛 Troubleshooting Commands

### Check if MySQL is Running
```bash
# Mac/Linux
ps aux | grep mysql

# Windows
tasklist | findstr mysql
```

### Check if Port is in Use
```bash
# Mac/Linux
lsof -i :5000
lsof -i :5173

# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :5173
```

### Kill Process Using Port
```bash
# Mac/Linux
kill -9 <PID>

# Windows
taskkill /PID <PID> /F
```

### View Backend Logs
```bash
# Check console output
# Look for errors in terminal where npm run dev is running
```

### View Frontend Logs
```bash
# Open browser console (F12)
# Check Network tab for API calls
# Check Console tab for errors
```

### Test Database Connection
```bash
mysql -u root -p -h localhost -e "SELECT 1"
```

---

## 📦 NPM Commands

### Backend
```bash
npm install              # Install dependencies
npm run dev             # Start development server
npm start               # Start production server
npm test                # Run tests
```

### Frontend
```bash
npm install              # Install dependencies
npm run dev             # Start development server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run linter
```

---

## 🔑 Important Files

### Backend
- `server.js` - Main server file
- `config/database.js` - Database connection
- `middleware/auth.js` - JWT authentication
- `routes/*.js` - API endpoints
- `database/schema.sql` - Database schema
- `.env` - Environment variables

### Frontend
- `src/App.jsx` - Main app component
- `src/services/api.js` - API client
- `src/services/authService.js` - Auth service
- `src/services/dataService.js` - Data service
- `src/pages/AdminLogin.jsx` - Admin login
- `src/pages/AdminDashboard.jsx` - Admin dashboard
- `.env` - Environment variables

---

## 📚 Documentation Files

- `FULLSTACK_SETUP_INSTRUCTIONS.md` - Complete setup guide
- `FULLSTACK_IMPLEMENTATION_GUIDE.md` - Implementation details
- `FULLSTACK_COMPLETE_SUMMARY.md` - Project summary
- `backend/README.md` - Backend overview
- `backend/SETUP_GUIDE.md` - Backend setup
- `backend/API_DOCUMENTATION.md` - API reference
- `backend/FRONTEND_INTEGRATION.md` - Frontend integration
- `backend/TESTING_GUIDE.md` - Testing guide

---

## 🎯 Common Tasks

### Add New Skill
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "skill_name": "React",
    "category": "Frontend",
    "proficiency_level": "Expert",
    "years_of_experience": 3,
    "is_featured": true
  }'
```

### Add New Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project_name": "E-Commerce Platform",
    "description": "Full-stack e-commerce solution",
    "technologies": "React, Node.js, MongoDB",
    "project_url": "https://example.com",
    "is_featured": true
  }'
```

### Add New Experience
```bash
curl -X POST http://localhost:5000/api/experience \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "company_name": "Tech Company",
    "job_title": "Senior Designer",
    "description": "Led design team",
    "start_date": "2023-01-01",
    "is_current": true
  }'
```

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "admin_id": 1,
    "sender_name": "John Doe",
    "sender_email": "john@example.com",
    "sender_phone": "+1234567890",
    "subject": "Project Inquiry",
    "message": "I am interested in your services"
  }'
```

---

## 🚀 Deployment Checklist

- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] Database created and populated
- [ ] Environment variables configured
- [ ] Backend server running
- [ ] Frontend server running
- [ ] Admin account created
- [ ] API endpoints tested
- [ ] Frontend connected to backend
- [ ] Admin dashboard working
- [ ] Contact form working
- [ ] All CRUD operations working
- [ ] No console errors
- [ ] Ready for production deployment

---

## 📞 Quick Help

**Backend won't start?**
- Check MySQL is running
- Check .env file is configured
- Check port 5000 is available

**Frontend won't connect to backend?**
- Check VITE_API_URL in .env
- Check backend is running
- Check CORS_ORIGIN in backend .env

**Admin login not working?**
- Check admin account exists
- Check credentials are correct
- Check JWT_SECRET is configured

**Database errors?**
- Check MySQL is running
- Check database credentials
- Check schema.sql was imported

---

**Last Updated:** June 1, 2026
**Version:** 1.0.0
