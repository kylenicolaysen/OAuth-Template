import React, { useEffect } from 'react'
import { gapi, loadAuth2 } from 'gapi-script';

export default () => {
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, process.env.CLIENTID, '')
      if (auth2.isSignedIn.get()) {
          console.log(auth2.currentUser.get())
      } else {
          console.log('Not logged in')
      }
    }
    setAuth2();
  }, []);


  return (
    <div>
      <h1>You're In!</h1>
      <button>Logout</button>
    </div>
  )
}