# Backend - Authentication API

Express.js backend API for user authentication with JWT tokens.

## Features

- User registration with email validation
- Secure login with password hashing (SHA-256)
- JWT token generation and verification
- Get authenticated user profile (/me endpoint)
- CORS enabled for frontend communication
- MongoDB integration with Mongoose
- Request logging with Morgan

## Project Structure

```
backend/
├── src/
│   ├── app.js                 # Express app configuration
│   ├── config/
│   │   ├── config.js          # Environment configuration
│   │   └── db.js              # Database connection
│   ├── controller/
│   │   └── auth.controller.js # Authentication logic
│   ├── models/
│   │   └── user.model.js      # User schema
│   └── Routes/
│       └── auth.routes.js     # API routes
├── server.js                  # Server entry point
├── package.json
└── node_modules/
```

## Installation

```bash
cd backend
npm install
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
```

## Running the Server

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### Authentication Routes

#### 1. Signup (Register New User)
- **Endpoint**: `POST /auth/signup`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response** (201):
  ```json
  {
    "message": "User registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```
- **Error Responses**:
  - 400: Missing fields
  - 409: Email already exists

#### 2. Login
- **Endpoint**: `POST /auth/login`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response** (200):
  ```json
  {
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```
- **Error Responses**:
  - 400: Missing credentials
  - 401: Invalid email or password

#### 3. Get User Profile
- **Endpoint**: `GET /auth/me`
- **Headers**:
  ```
  Authorization: Bearer <token>
  ```
- **Success Response** (200):
  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
  ```
- **Error Responses**:
  - 401: No token or invalid token
  - 404: User not found

## Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## Middleware

- **CORS**: Allows requests from `http://localhost:5173`
- **Express JSON**: Parses JSON request bodies
- **Morgan**: Logs HTTP requests in development mode

## Password Security

Passwords are hashed using SHA-256 algorithm before being stored in the database.

## JWT Token

- **Expiration**: 7 days
- **Algorithm**: HS256
- **Payload**: User ID

## Error Handling

All endpoints return appropriate HTTP status codes:
- 200: Success
- 201: Resource created
- 400: Bad request (missing/invalid data)
- 401: Unauthorized (invalid credentials or token)
- 404: Not found
- 409: Conflict (resource already exists)
- 500: Server error

## Testing with cURL

### Signup
```bash
curl -X POST http://localhost:3000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Profile
```bash
curl -X GET http://localhost:3000/auth/me \
  -H "Authorization: Bearer <token>"
```

## Development

- Hot reload is enabled with `nodemon`
- Changes to any file in the `src/` directory will automatically restart the server
- Check the terminal for server logs

## Troubleshooting

### MongoDB Connection Failed
- Verify `MONGO_URI` in `.env` file
- Check MongoDB Atlas IP whitelist
- Ensure network connectivity

### CORS Errors
- Frontend must be running on `http://localhost:5173`
- Update the CORS origin in `src/app.js` if using different port

### Port Already in Use
- Change the port in `server.js`
- Or kill the process using port 3000

## License

ISC
