import { Spinner } from '@/components'
import { useAuth } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'

const UserRouteProtected = () => {
  const { user } = useAuth()

  if (user === false) return <main><Spinner /></main>

  if (user === null) return <Navigate to='/login' />

  return <Outlet />
}

export { UserRouteProtected }
