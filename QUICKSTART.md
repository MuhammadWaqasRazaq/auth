# Quick Start Guide - Auth Application

This guide will help you get the full-stack authentication application up and running.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account (for cloud database)
- **Git** (optional)

## Project Overview

```
auth/
├── backend/          # Express.js API server
└── frontend/         # React web application
```

## Step 1: MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new project and cluster
3. Create a database user with a password
4. Get your connection string (it should look like):
   ```
   mongodb+srv://<username>:<password>@cluster-name.xxxxx.mongodb.net/database-name?retryWrites=true&w=majority
   ```
5. **Important**: Add your IP address to the IP Whitelist:
   - Go to Network Access → IP Whitelist
   - Click "Add IP Address"
   - For development, you can add `0.0.0.0/0` (allows all IPs)

## Step 2: Backend Setup

### 2.1 Configure Environment

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Create a `.env` file:
   ```bash
   # Windows (PowerShell)
   echo "" > .env
   
   # macOS/Linux
   touch .env
   ```

3. Add your MongoDB connection string to `.env`:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster-name.xxxxx.mongodb.net/auth-app?retryWrites=true&w=majority
   JWT_SECRET=your_secret_key_here_change_this
   ```

### 2.2 Install Dependencies

```bash
npm install
```

### 2.3 Start the Backend Server

```bash
npm run dev
```

You should see:
```
Server is running on port 3000
Connected to MongoDB
```

**Keep this terminal open** - the backend will continue running and automatically restart on file changes.

## Step 3: Frontend Setup

Open a **new terminal window** and navigate to the frontend folder:

```bash
cd frontend
```

### 3.1 Install Dependencies

```bash
npm install
```

### 3.2 Start the Frontend Server

```bash
npm run dev
```

You should see:
```
VITE v5.0.x ready in xxx ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

## Step 4: Access the Application

Open your browser and go to:
```
http://localhost:5173
```

You should see the home page with "Login" and "Sign Up" buttons.

## Testing the Application

### Test Signup

1. Click "Sign Up"
2. Enter:
   - Name: `John Doe`
   - Email: `john@example.com`
   - Password: `password123`
   - Confirm Password: `password123`
3. Click "Sign Up"
4. You should see a success notification and be redirected to the profile page

### Test Login

1. Click "Login"
2. Enter:
   - Email: `john@example.com`
   - Password: `password123`
3. Click "Login"
4. You should see a success notification and be redirected to the profile page

### Test Profile

1. On the profile page, you should see:
   - Your name
   - Your email
   - Your user ID
   - Member since date
2. Click "Refresh Profile" to reload data
3. Click "Logout" to clear session

## Troubleshooting

### MongoDB Connection Error (ENOTFOUND)

**Problem**: `Error: querySrv ENOTFOUND _mongodb._tcp.cluster0.xxxxx.mongodb.net`

**Solutions**:
1. Check your MongoDB connection string in `.env`
2. Add your IP to MongoDB Atlas IP Whitelist
3. Verify your internet connection
4. Try using the direct connection string instead of SRV

### CORS Error in Browser Console

**Problem**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**:
- Ensure backend is running on `http://localhost:3000`
- Frontend should be on `http://localhost:5173`
- Check that CORS is enabled in `backend/src/app.js`

### Port Already in Use

**Problem**: `Port 3000 is already in use` or `Port 5173 is already in use`

**Solution**:
```bash
# Find process using port 3000
# Windows (PowerShell)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### "Cannot find module" Error

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Changes not reflecting

**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Restart both backend and frontend servers
- Hard refresh (Ctrl+F5)

## File Structure

```
auth/
├── backend/
│   ├── src/
│   │   ├── app.js                 # Express configuration
│   │   ├── server.js              # Server entry point
│   │   ├── config/
│   │   │   ├── config.js          # Config loader
│   │   │   └── db.js              # Database connection
│   │   ├── controller/
│   │   │   └── auth.controller.js # Auth logic
│   │   ├── models/
│   │   │   └── user.model.js      # User schema
│   │   └── Routes/
│   │       └── auth.routes.js     # API routes
│   ├── package.json
│   ├── .env                       # Environment variables (create this)
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── home/Home.jsx
│   │   │   ├── login/Login.jsx
│   │   │   ├── signup/Signup.jsx
│   │   │   └── profile/Profile.jsx
│   │   ├── services/
│   │   │   └── api.js             # API calls
│   │   ├── App.jsx                # Main component
│   │   ├── App.css                # Styles
│   │   └── main.jsx               # Entry point
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
│
├── .env                           # Root level (optional)
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register new user |
| POST | `/auth/login` | Login user |
| GET | `/auth/me` | Get user profile |

## Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [JWT Introduction](https://jwt.io/introduction)
- [Vite Documentation](https://vitejs.dev/)

## Next Steps

After getting the application running:

1. **Add More Features**:
   - Password reset functionality
   - User profile editing
   - Delete account option
   - Email verification

2. **Improve Security**:
   - Implement bcrypt for password hashing (instead of SHA-256)
   - Add rate limiting
   - Implement HTTPS
   - Add session management

3. **Deploy**:
   - Deploy backend to Heroku, Railway, or Render
   - Deploy frontend to Vercel, Netlify, or GitHub Pages
   - Set up CI/CD pipeline

## Need Help?

- Check the `README.md` files in `backend/` and `frontend/` folders
- Review the console logs for error messages
- Check the browser's Network tab to inspect API requests
- Verify environment variables are set correctly

## License

ISC

---

**Happy Coding! 🎉**
