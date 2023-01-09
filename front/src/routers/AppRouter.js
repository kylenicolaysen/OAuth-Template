import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../components/pages/LoginPage'
import DashboardPage from '../components/pages/DashboardPage'
import ProfilePage from '../components/pages/ProfilePage'
import NotFoundPage from '../components/pages/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter