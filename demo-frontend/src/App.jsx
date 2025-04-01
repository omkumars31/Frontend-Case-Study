import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/NavBar'
import AuthContext from './context/AuthContext'

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App