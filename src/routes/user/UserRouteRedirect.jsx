import { Spinner } from '@/components'
import { useAuth } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'

const UserRouteRedirect = () => {
  const { user } = useAuth()

  if (user === false) return <main><Spinner /></main>

  if (user) return <Navigate to='/account' />

  return <Outlet />
}

export { UserRouteRedirect }
