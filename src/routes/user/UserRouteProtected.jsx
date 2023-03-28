import { Spinner } from '@/components'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/export'

const UserRouteProtected = () => {
  const { user } = useAuth()

  if (user === false) return <main><Spinner /></main>

  if (user === null) return <Navigate to='/login' />

  return <Outlet />
}

export { UserRouteProtected }
