import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Onboarding from './pages/Onboarding'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Reports from "./pages/Reports"
import Community from "./pages/Community"
import CommunityDetail from "./pages/CommunityDetail"
import Settings from "./pages/Settings"
import Feedback from "./pages/Feedback"
import ForgotPassword from './pages/ForgotPassword'
import ProtectedRoute from "./components/auth/ProtectedRoute"
import PublicRoute from "./components/auth/PublicRoute"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
        <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
        <Route path="/community/:id" element={<ProtectedRoute><CommunityDetail /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
