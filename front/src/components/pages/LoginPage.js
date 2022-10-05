import React, { useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()
  const onLogin = ({ credential }) => {
    const decoded = jwt_decode(credential)
    console.log('Signed In: ', decoded)
    navigate('/dashboard')
  }
  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
        auto_select="true"
        onSuccess={onLogin}
        onError={(cR) => {
          console.log("FAILED", cR)
        }}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}