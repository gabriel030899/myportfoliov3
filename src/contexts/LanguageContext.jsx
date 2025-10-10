import React, { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext({ language: 'pt', setLanguage: () => {} })

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt')
  const value = useMemo(() => ({ language, setLanguage }), [language])
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
