import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Onboarding from './pages/Onboarding'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Reports from "./pages/Reports"
import Community from "./pages/Community"
import Settings from "./pages/Settings"
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/community" element={<Community />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
