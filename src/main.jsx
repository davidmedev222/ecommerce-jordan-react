import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './services/firebase/config'
import { App } from './routes/App'
import { ThemeProvider } from './context/theme/ThemeProvider'

initializeApp(firebaseConfig)

const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
