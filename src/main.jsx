import { GlobalProvider } from '@/context'
import { App } from '@/routes'
import { initializeApp } from 'firebase/app'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { firebaseConfig } from './services/firebase/config'
import { GlobalStyles } from './styles/GlobalStyles'

initializeApp(firebaseConfig)

const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <GlobalProvider>
      <GlobalStyles />
      <App />
    </GlobalProvider>
  </StrictMode>
)
