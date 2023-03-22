import { ErrorNotFound } from '../../components/export'

const ErrorPage = () => {
  return (
    <main>
      <ErrorNotFound message='404, Page Not Found' />
    </main>
  )
}

export { ErrorPage }
