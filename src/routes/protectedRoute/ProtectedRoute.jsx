import { UserContext } from '../.././context/user/UserContext' // CONTEXT
import { Navigate, Outlet } from 'react-router-dom' // ROUTER DOM
import { useContext } from 'react' // HOOKS

const ProtectedRoute = () => {
  const { user } = useContext(UserContext) // CONTEXT

  if (user === false) {
    return <h1 className='h1'>loadingggg</h1> // LOADING
  }

  if (user === null) {
    return <Navigate to='/login' /> // REDIRECT
  }
  return <Outlet />
}

export { ProtectedRoute }
