# Auth Application

A full-stack authentication application with user registration, login, and profile management.

## Project Structure

```
.
├── backend/          # Express.js backend server
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   ├── config.js
│   │   │   └── db.js
│   │   ├── controller/
│   │   │   └── auth.controller.js
│   │   ├── models/
│   │   │   └── user.model.js
│   │   └── Routes/
│   │       └── auth.routes.js
│   ├── server.js
│   ├── package.json
│   └── node_modules/
└── frontend/         # React + Vite frontend application
    ├── src/
    │   ├── pages/
    │   │   ├── home/
    │   │   ├── login/
    │   │   ├── signup/
    │   │   └── profile/
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── node_modules/
```

## Features

- **User Registration**: Create a new account with email and password
- **User Login**: Authenticate with email and password
- **JWT Authentication**: Secure token-based authentication
- **User Profile**: View authenticated user information
- **Notifications**: Real-time toast notifications for user feedback
- **Responsive Design**: Mobile-friendly UI

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (for database connection)

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
```

**Note**: Make sure your MongoDB Atlas IP whitelist includes your current IP address or use `0.0.0.0/0` for development.

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm run dev
```

The backend will run on `http://localhost:3000`

### 3. Frontend Setup

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port)

## API Endpoints

### Authentication Routes

- **POST** `/auth/signup` - Register a new user
  - Request body: `{ name, email, password }`
  - Response: `{ token, user: { _id, name, email } }`

- **POST** `/auth/login` - Login user
  - Request body: `{ email, password }`
  - Response: `{ token, user: { _id, name, email } }`

- **GET** `/auth/me` - Get current user profile (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ _id, name, email, createdAt }`

## Frontend Pages

- **Home Page** (`/`): Welcome page with navigation links
- **Signup Page** (`/signup`): User registration form
- **Login Page** (`/login`): User login form
- **Profile Page** (`/profile`): Display user information

## Technologies Used

### Backend
- **Express.js**: Web framework
- **Mongoose**: MongoDB ODM
- **JWT**: Authentication
- **Morgan**: HTTP request logger
- **dotenv**: Environment variables

### Frontend
- **React**: UI library
- **Vite**: Build tool
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **React Hot Toast**: Notifications

## Troubleshooting

### MongoDB Connection Error (ENOTFOUND)

This error occurs when the MongoDB connection string is incorrect or DNS cannot resolve the address.

**Solutions:**
1. Verify your `MONGO_URI` in the `.env` file
2. Check that your IP is whitelisted in MongoDB Atlas Network Access
3. Ensure you're connected to the internet
4. Restart both backend and frontend servers

### CORS Issues

If you encounter CORS errors, update the backend's Express CORS configuration in `src/app.js`:

```javascript
import cors from 'cors';
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

### Port Already in Use

If port 3000 is already in use, update the port in `backend/server.js` and the frontend's API configuration in `frontend/src/services/api.js`.

## Running Both Servers

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

Then open your browser to `http://localhost:5173`

## Development Tips

1. **Live Reload**: Both frontend and backend support hot reload during development
2. **Token Storage**: The JWT token is stored in localStorage for persistence
3. **API Interceptor**: The axios instance automatically adds the JWT token to requests
4. **Notifications**: All user actions provide visual feedback through toast notifications

## Production Build

### Frontend Build

```bash
cd frontend
npm run build
npm run preview
```

The built files will be in the `dist/` directory.

## License

ISC
