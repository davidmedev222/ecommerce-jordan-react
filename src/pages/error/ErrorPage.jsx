import { ErrorNotFound } from '@/components'

const ErrorPage = () => {
  return (
    <main>
      <ErrorNotFound message='404, Page Not Found' />
    </main>
  )
}

export { ErrorPage }
