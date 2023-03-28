import { Outlet } from 'react-router-dom'
import { Header, Toastify } from '@/components'

const LayoutPages = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toastify />
    </>
  )
}

export { LayoutPages }
