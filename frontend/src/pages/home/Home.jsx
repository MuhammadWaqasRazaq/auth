import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title text-red-500">Welcome to Auth App</h1>
      <p className="home-subtitle">Secure authentication made simple</p>
      <div className="home-buttons">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/signup" className="btn">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
