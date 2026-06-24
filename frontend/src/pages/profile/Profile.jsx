import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { authService } from '../../services/api'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        toast.error('Please login first')
        navigate('/login')
        return
      }

      const response = await authService.getProfile()
      setUser(response.data)
      toast.success('Profile loaded successfully')
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to load profile'
      toast.error(message)
      navigate('/login')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    toast.success('Logged out successfully')
    navigate('/')
  }

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading">Loading profile...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="profile-container">
        <div className="error">Failed to load user profile</div>
      </div>
    )
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">Your Profile</h1>
      </div>

      <div className="profile-info">
        <div className="profile-info-row">
          <span className="profile-info-label">Name:</span>
          <span className="profile-info-value">{user.name}</span>
        </div>

        <div className="profile-info-row">
          <span className="profile-info-label">Email:</span>
          <span className="profile-info-value">{user.email}</span>
        </div>

        <div className="profile-info-row">
          <span className="profile-info-label">User ID:</span>
          <span className="profile-info-value">{user._id}</span>
        </div>

        {user.createdAt && (
          <div className="profile-info-row">
            <span className="profile-info-label">Member Since:</span>
            <span className="profile-info-value">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
        )}
      </div>

      <div className="profile-actions">
        <button className="btn" onClick={fetchProfile}>
          Refresh Profile
        </button>
        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
