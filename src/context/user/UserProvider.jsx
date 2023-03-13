import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../../services/firebase/config'
import { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({ children }) => {
  const [user, updateUser] = useState(false)

  const signUp = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }
  const signInWithFacebook = () => {
    console.log('sign in with facebook')
  }
  const signInWithGithub = () => {
    console.log('sign in with github')
  }
  const signInWithTwitter = () => {
    console.log('sign in with twitter')
  }

  const signOut = () => {
    console.log('sign out')
  }

  const data = {
    user,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    signInWithTwitter,
    signOut
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }
