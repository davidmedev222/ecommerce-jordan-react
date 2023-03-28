import { GlobalProvider } from '@/context'
import { App } from '@/routes'
import { firebaseConfig } from '@/services/firebase'
import { GlobalStyles } from '@/styles'
import { initializeApp } from 'firebase/app'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

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
