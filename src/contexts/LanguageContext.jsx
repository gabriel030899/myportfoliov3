import React, { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext({ 
  language: 'pt', 
  setLanguage: () => {},
  theme: 'dark',
  setTheme: () => {}
})

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt')
  const [theme, setTheme] = useState('dark')
  const value = useMemo(() => ({ language, setLanguage, theme, setTheme }), [language, theme])
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
