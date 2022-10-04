import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { redirect, useNavigate, useNavigation } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()
  const [ loggedIn, setLoggedIn ] = useState(false)
  const onLogin = ({ credential }) => {
    const decoded = jwt_decode(credential)
    console.log('Signed In: ', decoded)
    setLoggedIn(true)
    navigate('/dashboard')
  }
  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
        onSuccess={onLogin}
        onError={(cR) => {
          console.log("FAILED", cR)
        }}
      />
    </div>
  )
}

      // return redirect('/dashboard')

