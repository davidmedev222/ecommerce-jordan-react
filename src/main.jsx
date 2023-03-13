import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './services/firebase/config'
import { GlobalProvider } from './context/GlobalProvider'
import { GlobalStyles } from './styles/GlobalStyles'
import { App } from './routes/App'

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
