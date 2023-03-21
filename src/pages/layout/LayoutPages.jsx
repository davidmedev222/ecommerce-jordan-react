import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header/Header'
import { Toastify } from '../../components/export'

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
