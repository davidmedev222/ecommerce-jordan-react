import { useEffect, useState } from 'react'
import { ThemeContext } from '@/context'

const ThemeProvider = ({ children }) => {
  const [theme, updateTheme] = useState(window.localStorage.getItem('theme') || 'light')

  const toggleTheme = () => (theme === 'light' ? updateTheme('dark') : updateTheme('light'))

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const data = { theme, toggleTheme }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }
