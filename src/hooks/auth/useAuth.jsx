import { useContext } from 'react'
import { UserContext } from '@/context'

const useAuth = () => {
  const context = useContext(UserContext)
  return context
}

export { useAuth }
