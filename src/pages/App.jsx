import { React } from 'react'
import MyInfo from '../components/MyInfo'
import NavScreen from '../components/NavScreen'
import { LanguageProvider } from '../contexts/LanguageContext'

function App() {

  return (
    <LanguageProvider>
      <div className='w-screen h-screen p-3 bg-gray-900 flex gap-2'>
        <MyInfo />
        <NavScreen />
      </div>
    </LanguageProvider>
  )
}

export default App
