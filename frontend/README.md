<img width="1895" height="989" alt="image" src="https://github.com/user-attachments/assets/fff54e0e-8ed3-44e6-b5ff-642edc06a326" /># Frontend - React Authentication App
<img width="1896" height="981" alt="image" src="https://github.com/user-attachments/assets/51466077-ab92-4bf3-9587-c58bc0e52735" />
<img width="1902" height="992" alt="image" src="https://github.com/user-attachments/assets/eeacaecd-0c5e-4e65-abb7-3ff3aab92913" />
<img width="1494" height="1005" alt="image" src="https://github.com/user-attachments/assets/60d963fa-7bc1-4ee7-8872-f8ba290d32e6" />


A modern React application built with Vite for user authentication and profile management.

## Features


- User-friendly registration and login forms
- Real-time form validation
- Toast notifications for user feedback
- JWT token-based authentication
- Secure token storage in localStorage
- Responsive design (mobile-friendly)
- Professional gradient UI
- Protected routes
- User profile page with information display

## Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── home/
│   │   │   └── Home.jsx              # Welcome page
│   │   ├── login/
│   │   │   └── Login.jsx             # Login form
│   │   ├── signup/
│   │   │   └── Signup.jsx            # Registration form
│   │   └── profile/
│   │       └── Profile.jsx           # User profile page
│   ├── services/
│   │   └── api.js                    # API service with axios
│   ├── App.jsx                       # Main app component with routing
│   ├── App.css                       # Global styles
│   └── main.jsx                      # Entry point
├── index.html                        # HTML template
├── vite.config.js                    # Vite configuration
├── package.json
└── node_modules/
```

## Installation

```bash
cd frontend
npm install
```

## Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

## Pages and Routes

### 1. Home Page (`/`)
- Welcome screen
- Navigation buttons to Login and Sign Up
- Introduction message

### 2. Signup Page (`/signup`)
- User registration form
- Fields: Full Name, Email, Password, Confirm Password
- Form validation:
  - All fields required
  - Passwords must match
  - Password minimum 6 characters
  - Email format validation
- Link to login page
- Success notification and redirect to profile

### 3. Login Page (`/login`)
- User login form
- Fields: Email, Password
- Form validation:
  - All fields required
  - Valid email format
- Link to signup page
- Success notification and redirect to profile

### 4. Profile Page (`/profile`)
- Display authenticated user information:
  - Full name
  - Email address
  - User ID
  - Member since date
- Refresh profile button
- Logout button
- Token validation on mount

## Technologies Used

- **React 18.3**: UI library
- **Vite 5.0**: Build tool and dev server
- **React Router 6.20**: Client-side routing
- **Axios 1.6**: HTTP client
- **React Hot Toast 2.4**: Toast notifications

## API Integration

### API Service (`src/services/api.js`)

The API service handles all backend communication:

```javascript
// Endpoints
- POST /auth/signup    // User registration
- POST /auth/login     // User login
- GET /auth/me         // Get user profile (requires token)
```

### Axios Configuration

- Base URL: `http://localhost:3000`
- Automatic token injection in request headers
- Bearer token format: `Authorization: Bearer <token>`

### Example API Calls

```javascript
import { authService } from './services/api'

// Signup
const response = await authService.signup({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123'
})

// Login
const response = await authService.login({
  email: 'john@example.com',
  password: 'password123'
})

// Get Profile
const response = await authService.getProfile()
```

## Styling

The application uses a modern gradient design with:
- Purple gradient background (`#667eea` to `#764ba2`)
- Clean white form containers
- Smooth transitions and hover effects
- Responsive grid layouts
- Mobile-first design approach

### Color Scheme
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark Purple)
- Success: `#27ae60` (Green)
- Error: `#e74c3c` (Red)
- Text: `#333` (Dark Gray)

## Authentication Flow

1. **Signup Flow**:
   - User enters name, email, password
   - Form validates input
   - API sends signup request
   - Token received and stored in localStorage
   - User redirected to profile page

2. **Login Flow**:
   - User enters email and password
   - Form validates input
   - API sends login request
   - Token received and stored in localStorage
   - User redirected to profile page

3. **Profile Access**:
   - Check if token exists in localStorage
   - Fetch user data from `/auth/me` endpoint
   - Display user information
   - Allow refresh and logout

## Notifications

Toast notifications are used for user feedback:

- **Success**: Account created, Login successful, Profile loaded
- **Error**: Missing fields, Invalid credentials, API errors
- **Info**: Loading states

## Environment Configuration

The frontend communicates with backend on:
```
http://localhost:3000
```

To change the backend URL, update `src/services/api.js`:
```javascript
const API_BASE_URL = 'http://your-backend-url'
```

## Token Management

- Token is stored in `localStorage` with key `token`
- Token is automatically included in API requests
- Token is cleared on logout

## Error Handling

The application handles various error scenarios:
- Network errors
- Invalid credentials
- Missing form fields
- Session expiration
- API errors with user-friendly messages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Tips

1. **Hot Module Replacement**: Changes are automatically reflected without page reload
2. **Fast Refresh**: React components update in real-time
3. **Debugging**: Use React DevTools browser extension
4. **Network Debugging**: Use browser's Network tab to inspect API calls

## Performance

- Lazy loading of components (via Vite)
- Optimized bundle size
- Efficient state management with React Hooks
- CSS optimization and minification

## Responsive Design

The application is fully responsive with breakpoints for:
- Mobile (< 600px)
- Tablet (600px - 1024px)
- Desktop (> 1024px)

## Troubleshooting

### Cannot connect to backend
- Ensure backend is running on `http://localhost:3000`
- Check CORS configuration in backend
- Verify backend port in `src/services/api.js`

### Form not submitting
- Check browser console for errors
- Verify all required fields are filled
- Ensure backend is responding

### Token not persisting
- Check browser's localStorage
- Verify localStorage key is `token`
- Check browser privacy settings

### Pages not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Restart Vite dev server
- Check console for routing errors

## License

ISC
