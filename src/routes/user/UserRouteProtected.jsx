import { useAuth } from '../../hooks/export'
import { Navigate, Outlet } from 'react-router-dom'

const UserRouteProtected = () => {
  const { user } = useAuth()

  if (user === false) return 'loading...'

  if (user === null) return <Navigate to='/login' />

  return <Outlet />
}

export { UserRouteProtected }
