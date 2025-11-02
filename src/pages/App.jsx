import { React, useState } from 'react'
import MyInfo from '../components/MyInfo'
import NavScreen from '../components/NavScreen'
import MobileMyInfo from '../components/MobileMyInfo'
import MobileProjects from '../components/MobileProjects'
import MobileExperience from '../components/MobileExperience'
import MobileNav from '../components/MobileNav'
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext'
import { useIsMobile } from '../hooks/useIsMobile'

function AppContent() {
  const { theme } = useLanguage()
  const isMobile = useIsMobile()
  const [activeTab, setActiveTab] = useState('info')
  
  if (isMobile) {
    return (
      <div className={`w-screen h-screen flex flex-col ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'}`}>
        {/* Mobile Content */}
        {activeTab === 'info' && <MobileMyInfo />}
        {activeTab === 'projects' && <MobileProjects />}
        {activeTab === 'experience' && <MobileExperience />}
        
        {/* Mobile Navigation */}
        <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    )
  }
  
  // Desktop version
  return (
    <div className={`w-screen h-screen p-3 flex gap-2 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'}`}>
      <MyInfo />
      <NavScreen />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
