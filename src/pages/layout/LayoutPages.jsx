import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header/Header'

const LayoutPages = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export { LayoutPages }
