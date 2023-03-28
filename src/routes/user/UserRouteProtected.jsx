import { useAuth } from '../../hooks/export'
import { Navigate, Outlet } from 'react-router-dom'
import { Spinner } from '@/components'

const UserRouteProtected = () => {
  const { user } = useAuth()

  if (user === false) return <main><Spinner /></main>

  if (user === null) return <Navigate to='/login' />

  return <Outlet />
}

export { UserRouteProtected }
