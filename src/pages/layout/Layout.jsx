import { Outlet } from 'react-router-dom' // COMPONENT ROUTER DOM
import { Header } from '../../components/header/Header' // COMPONENT

const Layout = () => {
  return (
    <>
      {/* COMPONENTE */}
      <Header />
      {/* CONTENIDO */}
      <Outlet />
      {/* COMPONENTE */}
      {/* <footer>
                <h5>footer</h5>
            </footer> */}
    </>
  )
}

export { Layout }
