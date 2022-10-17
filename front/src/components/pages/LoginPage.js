import React, { useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticated } from '../../actions/authentication'

const LoginPage = (props) => {
  const navigate = useNavigate()
  
  useEffect(() => {
    if(props.isAuthenticated) {
      return navigate('/dashboard')
    }
  },[ props.isAuthenticated ])
  
    const onLogin = ({ credential, code }) => {
      const decoded = jwt_decode(credential)
      console.log('Signed In: ', decoded)
      props.dispatch(isAuthenticated('abc123xyz'))
      // navigate('/dashboard')
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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  }
}

export default connect(mapStateToProps)(LoginPage)