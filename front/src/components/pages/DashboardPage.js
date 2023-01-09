import React, { useEffect } from 'react'
import { gapi, loadAuth2 } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { isAuthenticated, isNotAuthenticated } from '../../actions/authentication';

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
        props.dispatch(isAuthenticated('token123'))
      }
    }
    setAuth2();
  }, []);

  const onLogout = () => {
    props.dispatch(isNotAuthenticated())
  }

  // const onTestClick = async () => {
  //   const response = await fetch('http://localhost:3000/api/test', {
  //     method: 'GET'
  //   })
  //   if (response) {
  //     console.log(`Status: ${response.status}`)
  //     console.log(`Body: ${response.body}`)
  //   }
  // }
  const onTestClick = () => {
    window.alert('asdf')
  }

  return (
    <div>
      <h1>You're In!</h1>
      <button
        onClick={onTestClick}
        style={{ backgroundColor:"red", color: "white" }}
      >
        RED BUTTON
      </button>
      <button
        onClick={() => (navigate('/profile'))}
        style={{ backgroundColor:"yellow", color: "purple" }}
      >
        PROFILE
      </button>
      <button
        onClick={onLogout}
      >
        LOGOUT
      </button>
    </div>
  )  
}

const mapStateToProps = (state) => {
  return { 
    isAuthenticated: state.authentication.isAuthenticated,
    isNotAuthenticated: state.authentication.isNotAuthenticated
  }
}

export default connect(mapStateToProps)(DashboardPage)