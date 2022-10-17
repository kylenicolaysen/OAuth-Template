import React, { useEffect } from 'react'
import { gapi, loadAuth2 } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { isNotAuthenticated } from '../../actions/authentication';

const DashboardPage = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, process.env.CLIENTID, '')
      if (!auth2.isSignedIn.get()) {
        console.log('Not logged in')
        props.dispatch(isNotAuthenticated())
      } else {
        console.log(auth2.currentUser.get())
      }
    }
    setAuth2();
    if(!props.isAuthenticated) {
      navigate('/login')
    }
  }, []);

  useEffect(() => {

  }, [ props.isAuthenticated ])

  const onLogout = () => {
    props.dispatch(isNotAuthenticated())
  }

  const onTestClick = async () => {
    const response = await fetch('/api/test', {
      method: 'GET'
    })
    if (response) {
      console.log(`Status: ${response.status}`)
      console.log(`Body: ${response.body}`)
    }
  }

  return (
    <div>
      <h1>You're In!</h1>
      <button
        onClick={onTestClick}
        style={{ backgroundColor:"red", color: "white"}}
      >RED BUTTON</button>
      <button
        onClick={onLogout}
      >Logout</button>
    </div>
  )  
}

const mapStateToProps = (state) => {
  return { 
    isAuthenticated: state.authentication.isAuthenticated
  }
}

export default connect(mapStateToProps)(DashboardPage)