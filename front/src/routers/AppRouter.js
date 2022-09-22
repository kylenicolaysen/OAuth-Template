import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../components/pages/LoginPage'
import DashboardPage from '../components/pages/DashboardPage'
import NotFoundPage from '../components/pages/NotFoundPage'

// const AppSRouter = () => (
//   <BrowserRouter>
//     <div>
//       <Switch>
//         <Route path='/' component={LoginPage} exact />
//         <Route path='/dashboard' component={DashboardPage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// )

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter