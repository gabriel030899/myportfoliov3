import React, { useState } from 'react'
import Projects from './Projects'
import Experience from './Experience'
import { useLanguage } from '../contexts/LanguageContext'

function NavScreen() {
  const { language } = useLanguage()
  const labels = language === 'pt' ? { projects: 'Projetos', experience: 'Experiência' } : { projects: 'Projects', experience: 'Experience' }
  const [tab, setTab] = useState('projects')
  return (
  <div className='w-3/5 h-full py-4 px-2 border-1 border-gray-300 rounded-md flex flex-col overflow-hidden'>
        <div className='w-full flex items-center px-2 pb-2 border-b-1 border-b-gray-300 shrink-0'>
            <nav className='w-full flex items-center gap-3'>
                <button
                  type="button"
                  onClick={() => setTab('projects')}
                  className={`px-3 py-1 rounded-md transition-colors ${tab === 'projects' ? 'bg-gray-300 text-gray-900' : 'hover:bg-gray-200'}`}
                  aria-current={tab === 'projects' ? 'page' : undefined}
                >
                  {labels.projects}
                </button>
                <button
                  type="button"
                  onClick={() => setTab('experience')}
                  className={`px-3 py-1 rounded-md transition-colors ${tab === 'experience' ? 'bg-gray-300 text-gray-900' : 'hover:bg-gray-200'}`}
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