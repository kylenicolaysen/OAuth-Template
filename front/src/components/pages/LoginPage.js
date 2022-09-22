import React from 'react'

// function init() {
//   gapi.load('auth2', function() {
//     /* Ready. Make a call to gapi.auth2.init or some other API */
//   });
// }
// gapi.auth2.init({
//   client_id: '218915995641-pmaencqvs4uqqkhnkngutkvorbec80eh.apps.googleusercontent.com'
// })


class LoginPage extends React.Component {
  onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile()
    console.log('id: ', profile.getId())
  }
  init() {
    gapi.load('auth2', function() {
      /* Ready. Make a call to gapi.auth2.init or some other API */
    });
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
    )
  }
}
export default LoginPage
