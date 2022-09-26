import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { Navigate, useNavigate } from 'react-router-dom'

class LoginPage extends React.Component {
  onLogin = ({ credential }) => {
    let navigate = useNavigate()
    const decoded = jwt_decode(credential)
    console.log(decoded.sub)
    navigate('/dashboard')
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <GoogleLogin
          onSuccess={this.onLogin}
          onError={(cR) => {
            console.log("FAILED", cR)
          }}
        />
      </div>
    )
  }
}
export default LoginPage
