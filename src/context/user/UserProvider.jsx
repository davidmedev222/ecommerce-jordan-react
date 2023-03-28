import { UserContext } from '@/context'
import { auth } from '@/services/firebase'
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'

const UserProvider = ({ children }) => {
  const [user, updateUser] = useState(false)

  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('existe un usuario')
        updateUser(user)
      } else {
        console.log('no existe')
        updateUser(null)
      }
    })

    return () => onSubscribe()
  }, [])

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

  const signInWithGithub = () => {
    const provider = new GithubAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const signInWithTwitter = () => {
    console.log('sign in with twitter')
  }

  const signOutUser = () => {
    return signOut(auth)
  }

  const updateProfileUser = ({ username, photoURL }) => {
    const data = { displayName: username, photoURL }
    return updateProfile(auth.currentUser, data)
  }

  const data = {
    user,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    signInWithTwitter,
    signOutUser,
    updateProfileUser
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }
