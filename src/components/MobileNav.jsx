import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFolderOpen, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../contexts/LanguageContext'

function MobileNav({ activeTab, onTabChange }) {
  const { language, theme } = useLanguage()
  
  const tabs = [
    { 
      id: 'info', 
      icon: faUser, 
      label: language === 'pt' ? 'Perfil' : 'Profile' 
    },
    { 
      id: 'projects', 
      icon: faFolderOpen, 
      label: language === 'pt' ? 'Projetos' : 'Projects' 
    },
    { 
      id: 'experience', 
      icon: faBriefcase, 
      label: language === 'pt' ? 'Experiência' : 'Experience' 
    },
  ]

  return (
    <nav 
      className={`fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-16 border-t ${
        theme === 'light' 
          ? 'bg-white border-gray-300' 
          : 'bg-gray-800 border-gray-600'
      }`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
            activeTab === tab.id
              ? 'text-sky-500'
              : theme === 'light'
              ? 'text-gray-600 hover:text-sky-500'
              : 'text-gray-400 hover:text-sky-500'
          }`}
          aria-label={tab.label}
        >
          <FontAwesomeIcon icon={tab.icon} className="text-xl mb-1" />
          <span className="text-xs">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default MobileNav
