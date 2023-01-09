import React, { useEffect, useState } from 'react'
import { gapi, loadAuth2 } from 'gapi-script'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticated } from '../../actions/authentication'
// import { isAuthenticated, isNotAuthenticated } from '../../actions/authentication'

const ProfilePage = (props) => {
  const navigate = useNavigate()

  const [ firstName, setFirstName ] = useState('Joe')
  const [ lastName, setLastName ] = useState('Smith')

  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, process.env.CLIENTID, '')
      if (!auth2.isSignedIn.get()) {
        console.log(`PROFILE: NOT LOGGED IN`)
        return navigate('/login')
      } else {
        const currentUser = auth2.currentUser.get()
        console.log(currentUser)
        setFirstName(currentUser.wt.rV)
        setLastName(currentUser.wt.uT)
        props.dispatch(isAuthenticated(currentUser.Ca))
      }
    }
    setAuth2()
  }, [])

  const onDashboardClick = () => {
    return navigate('/dashboard')
  }
  const onLogoutClick = () => {
    // props.dispatch(isNotAuthenticated())
    return navigate('/login')
  }

  return (
    <div>
      <h1>PROFILE</h1>
      <p>Welcome Mr {lastName}. Or should we call you {firstName}.</p>
      <button 
        onClick={onDashboardClick}
      >
        DASHBOARD
      </button>
      <button 
        onClick={onLogoutClick}
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

export default connect(mapStateToProps)(ProfilePage)