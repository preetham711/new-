# Full Stack Portfolio System - Complete Setup Instructions

## 📋 Prerequisites

Before starting, ensure you have:
- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- MySQL (v5.7 or higher) - [Download](https://www.mysql.com/downloads/)
- Git - [Download](https://git-scm.com/)
- Code Editor (VS Code recommended) - [Download](https://code.visualstudio.com/)

---

## 🔧 Installation Steps

### Phase 1: Backend Setup (30 minutes)

#### Step 1.1: Navigate to Backend Directory
```bash
cd backend
```

#### Step 1.2: Install Dependencies
```bash
npm install
```

This installs:
- express (web framework)
- mysql2 (database driver)
- jsonwebtoken (JWT authentication)
- bcryptjs (password hashing)
- cors (cross-origin requests)
- express-validator (input validation)
- dotenv (environment variables)
- multer (file uploads)
- nodemon (development auto-reload)

#### Step 1.3: Create Environment File
```bash
# Copy example file
cp .env.example .env

# Edit .env with your settings
```

#### Step 1.4: Configure .env File
```
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio_db
DB_PORT=3306

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
```

#### Step 1.5: Create MySQL Database
```bash
# Option 1: Using MySQL Command Line
mysql -u root -p < database/schema.sql

# Option 2: Using MySQL Workbench
# 1. Open MySQL Workbench
# 2. File > Open SQL Script
# 3. Select database/schema.sql
# 4. Execute (Ctrl+Shift+Enter)

# Option 3: Using MySQL CLI
mysql -u root -p
mysql> source database/schema.sql;
```

#### Step 1.6: Verify Database Creation
```bash
mysql -u root -p
mysql> USE portfolio_db;
mysql> SHOW TABLES;
```

You should see 12 tables:
- admin_users
- profile_information
- skills
- projects
- project_gallery
- experience
- education
- testimonials
- design_process
- contact_messages
- social_links
- website_settings

#### Step 1.7: Start Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Expected output:
```
╔════════════════════════════════════════╗
║   Portfolio Backend Server Started     ║
╠════════════════════════════════════════╣
║ Server: http://localhost:5000
║ Environment: development
║ Database: portfolio_db
╚════════════════════════════════════════╝
```

#### Step 1.8: Test Backend Health
```bash
# In a new terminal
curl http://localhost:5000/api/health

# Expected response:
# {"success":true,"message":"Server is running","timestamp":"2024-01-15T10:30:00.000Z"}
```

---

### Phase 2: Frontend Setup (20 minutes)

#### Step 2.1: Navigate to Frontend Directory
```bash
cd preetham-portfolio
```

#### Step 2.2: Install Dependencies
```bash
npm install
```

This installs:
- react (UI library)
- react-router-dom (routing)
- axios (HTTP client)
- framer-motion (animations)
- react-icons (icon library)
- react-scroll (smooth scrolling)
- tailwindcss (styling)
- vite (build tool)

#### Step 2.3: Verify .env File
```bash
# Check if .env exists
cat .env

# Should contain:
# VITE_API_URL=http://localhost:5000/api
```

#### Step 2.4: Start Frontend Development Server
```bash
npm run dev
```

Expected output:
```
  VITE v4.5.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

#### Step 2.5: Open in Browser
- Navigate to `http://localhost:5173`
- You should see the portfolio homepage

---

### Phase 3: Admin Panel Setup (15 minutes)

#### Step 3.1: Create Admin Account

Option A: Using API (cURL)
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

Option B: Using Postman
1. Open Postman
2. Create new POST request
3. URL: `http://localhost:5000/api/auth/register`
4. Body (JSON):
```json
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "Admin@123",
  "first_name": "Admin",
  "last_name": "User"
}
```

#### Step 3.2: Access Admin Login
- Navigate to `http://localhost:5173/admin/login`
- Enter credentials:
  - Email: `admin@example.com`
  - Password: `Admin@123`

#### Step 3.3: Access Admin Dashboard
- After login, you'll be redirected to `http://localhost:5173/admin/dashboard`
- You should see the dashboard with stats

---

### Phase 4: Add Initial Data (30 minutes)

#### Step 4.1: Add Profile Information
```bash
curl -X POST http://localhost:5000/api/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Preetham Kumar",
    "title": "UI/UX Designer & Product Designer",
    "bio": "Passionate about creating beautiful and functional digital experiences",
    "location": "San Francisco, CA",
    "phone": "+1 (555) 123-4567",
    "email": "preetham@example.com",
    "years_of_experience": 5
  }'
```

#### Step 4.2: Add Skills
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "skill_name": "UI Design",
    "category": "Design",
    "proficiency_level": "Expert",
    "years_of_experience": 5,
    "is_featured": true
  }'
```

#### Step 4.3: Add Projects
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project_name": "Hotel Booking Website",
    "description": "A modern hotel booking platform with advanced search and filters",
    "technologies": "React, Node.js, MongoDB",
    "project_url": "https://example.com",
    "is_featured": true
  }'
```

#### Step 4.4: Add Experience
```bash
curl -X POST http://localhost:5000/api/experience \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "company_name": "Tech Innovations Inc.",
    "job_title": "Senior UI/UX Designer",
    "description": "Led design for multiple product lines",
    "start_date": "2023-01-15",
    "is_current": true
  }'
```

#### Step 4.5: Add Education
```bash
curl -X POST http://localhost:5000/api/education \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "institution_name": "University of Design",
    "degree": "Bachelor of Design",
    "field_of_study": "UI/UX Design",
    "start_date": "2018-09-01",
    "end_date": "2022-05-31"
  }'
```

---

## 🧪 Testing the System

### Test 1: Backend API Health
```bash
curl http://localhost:5000/api/health
```

### Test 2: Frontend Loading
- Open `http://localhost:5173` in browser
- Check console for errors (F12)

### Test 3: Admin Login
- Navigate to `http://localhost:5173/admin/login`
- Login with admin credentials
- Verify dashboard loads

### Test 4: API Endpoints
```bash
# Get all skills
curl http://localhost:5000/api/skills

# Get all projects
curl http://localhost:5000/api/projects

# Get all experience
curl http://localhost:5000/api/experience
```

### Test 5: Contact Form
```bash
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "admin_id": 1,
    "sender_name": "John Doe",
    "sender_email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I am interested in your services"
  }'
```

---

## 🐛 Troubleshooting

### Issue 1: MySQL Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

**Solution:**
1. Ensure MySQL is running
2. Check credentials in .env
3. Verify database exists: `mysql -u root -p -e "SHOW DATABASES;"`
4. Restart MySQL service

### Issue 2: Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:**
```bash
# Find process using port 5000
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill process
kill -9 <PID>  # Mac/Linux
taskkill /PID <PID> /F  # Windows

# Or change port in .env
PORT=5001
```

### Issue 3: CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**
1. Check CORS_ORIGIN in backend .env
2. Ensure it matches frontend URL exactly
3. Restart backend server

### Issue 4: JWT Token Error
```
Error: Invalid token
```

**Solution:**
1. Ensure token is in Authorization header
2. Check token hasn't expired
3. Verify JWT_SECRET matches in .env
4. Re-login to get new token

### Issue 5: Database Schema Not Imported
```
Error: Table 'portfolio_db.admin_users' doesn't exist
```

**Solution:**
```bash
# Re-import schema
mysql -u root -p portfolio_db < database/schema.sql

# Or manually create database
mysql -u root -p
mysql> CREATE DATABASE portfolio_db;
mysql> USE portfolio_db;
mysql> source database/schema.sql;
```

---

## 📊 Verification Checklist

- [ ] MySQL is running
- [ ] Backend dependencies installed
- [ ] Backend .env configured
- [ ] Database created with schema
- [ ] Backend server running on port 5000
- [ ] Backend health check passes
- [ ] Frontend dependencies installed
- [ ] Frontend .env configured
- [ ] Frontend running on port 5173
- [ ] Admin account created
- [ ] Admin login works
- [ ] Admin dashboard loads
- [ ] API endpoints respond
- [ ] Contact form works
- [ ] No console errors

---

## 🚀 Next Steps

1. **Add More Data**
   - Add testimonials
   - Add design process steps
   - Add social links
   - Upload project images

2. **Customize Admin Dashboard**
   - Implement CRUD forms
   - Add file upload functionality
   - Add data validation
   - Add success/error notifications

3. **Enhance Frontend**
   - Load data from API
   - Add loading states
   - Add error handling
   - Add caching

4. **Deploy to Production**
   - Set up production database
   - Configure environment variables
   - Deploy backend to hosting
   - Deploy frontend to hosting
   - Set up SSL certificates

---

## 📚 Documentation

- **Backend README**: `backend/README.md`
- **API Documentation**: `backend/API_DOCUMENTATION.md`
- **Setup Guide**: `backend/SETUP_GUIDE.md`
- **Frontend Integration**: `backend/FRONTEND_INTEGRATION.md`
- **Implementation Guide**: `FULLSTACK_IMPLEMENTATION_GUIDE.md`

---

## 💡 Tips & Best Practices

1. **Development**
   - Use Postman for API testing
   - Check browser console for errors
   - Monitor backend logs
   - Use VS Code extensions for debugging

2. **Security**
   - Never commit .env files
   - Use strong passwords
   - Change JWT_SECRET in production
   - Enable HTTPS in production

3. **Performance**
   - Use database indexes
   - Implement caching
   - Optimize images
   - Minimize API calls

4. **Maintenance**
   - Regular database backups
   - Monitor error logs
   - Update dependencies
   - Test before deploying

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review error messages carefully
3. Check backend logs
4. Verify database connection
5. Test API endpoints with cURL
6. Check browser console for errors

---

## ✅ Summary

You now have a complete full-stack portfolio system:
- ✅ Backend API running
- ✅ Database configured
- ✅ Frontend connected
- ✅ Admin panel working
- ✅ Authentication functional
- ✅ Ready for customization

**Congratulations! Your full-stack portfolio system is ready to use!**

---

**Created:** June 1, 2026
**Version:** 1.0.0
**Status:** Ready for Development
