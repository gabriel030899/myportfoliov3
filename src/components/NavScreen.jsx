import React, { useState } from 'react'
import Projects from './Projects'
import Experience from './Experience'
import { useLanguage } from '../contexts/LanguageContext'

function NavScreen() {
  const { language, theme } = useLanguage()
  const labels = language === 'pt' ? { projects: 'Projetos', experience: 'Experiência' } : { projects: 'Projects', experience: 'Experience' }
  const [tab, setTab] = useState('projects')
  return (
  <div className={`w-3/5 h-full py-4 px-2 flex flex-col overflow-hidden ${theme === 'light' ? 'border-l-1 border-l-gray-400' : 'border-l-1 border-l-gray-300'}`}>
        <div className={`w-full flex items-center px-2 pb-2 shrink-0 ${theme === 'light' ? 'border-b-1 border-b-gray-400' : 'border-b-1 border-b-gray-300'}`}>
            <nav className='w-full flex items-center gap-3'>
                <button
                  type="button"
                  onClick={() => setTab('projects')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    tab === 'projects' 
                      ? theme === 'light' ? 'bg-sky-100 text-sky-900' : 'bg-gray-300 text-gray-900'
                      : theme === 'light' ? 'hover:bg-gray-200 text-gray-900' : 'hover:bg-gray-200'
                  }`}
                  aria-current={tab === 'projects' ? 'page' : undefined}
                >
                  {labels.projects}
                </button>
                <button
                  type="button"
                  onClick={() => setTab('experience')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    tab === 'experience' 
                      ? theme === 'light' ? 'bg-sky-100 text-sky-900' : 'bg-gray-300 text-gray-900'
                      : theme === 'light' ? 'hover:bg-gray-200 text-gray-900' : 'hover:bg-gray-200'
                  }`}
                  aria-current={tab === 'experience' ? 'page' : undefined}
                >
                  {labels.experience}
                </button>
            </nav>
            
        </div>
        <div className='flex-1 min-h-0'>
          {tab === 'projects' ? <Projects /> : <Experience />}
        </div>
    </div>
  )
}

export default NavScreen