import { Spinner } from '@/components'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/export'

const UserRouteRedirect = () => {
  const { user } = useAuth()

  if (user === false) return <main><Spinner /></main>

  if (user) return <Navigate to='/account' />

  return <Outlet />
}

export { UserRouteRedirect }
