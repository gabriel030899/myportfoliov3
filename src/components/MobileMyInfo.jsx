import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import { useLanguage } from '../contexts/LanguageContext'

const myLinks = [
    { name: 'GitHub', url: 'https://github.com/gabriel030899' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gabrielzanella99/' },
    { name: 'Email', url: 'mailto:gabrieldoissteam@hotmail.com' },
    { name: 'WhatsApp', url: 'https://wa.me/5519999009796' },
    { name: 'Phone', url: '+55 (19) 9 9900-9796' }
]

function MobileMyInfo() {
    const { language, setLanguage, theme, setTheme } = useLanguage()
    const t = {
        pt: {
            title: 'Gabriel Zanella',
            role: 'Desenvolvedor Full Stack | React • Python • Azure',
            about: [
                'Desenvolvedor Full Stack com mais de 5 anos de experiência construindo aplicações web escaláveis e soluções digitais. Atualmente na Nestlé como Senior Data Analyst / Software Developer, liderando iniciativas de desenvolvimento web e criando aplicações full stack com React, Python e Microsoft Azure.',
                'Possuo forte background em analytics, cloud e automação de processos, com experiência em conectar necessidades de negócio a soluções técnicas. Trabalho diretamente com stakeholders para definição de requisitos, arquitetura de soluções e entrega de valor real.',
                'Meu stack principal inclui React, Python (FastAPI, Flask), Microsoft Azure, Azure DevOps, PostgreSQL, Power Platform e TypeScript. Aberto a oportunidades internacionais.',
            ],
            curriculum: 'Currículo',
            phoneLabel: '',
        },
        en: {
            title: 'Gabriel Zanella',
            role: 'Full Stack Developer | React • Python • Azure',
            about: [
                'Full Stack Software Developer with 5+ years of experience building scalable web applications and digital solutions. Currently at Nestlé as Senior Data Analyst / Software Developer, leading web development initiatives and building full-stack applications with React, Python, and Microsoft Azure.',
                'Strong background in data analytics, cloud solutions, and process automation — with experience bridging business needs and technical delivery. I work directly with stakeholders to define requirements, design architectures, and ship real value.',
                'My core stack includes React, Python (FastAPI, Flask), Microsoft Azure, Azure DevOps, PostgreSQL, Power Platform, and TypeScript. Open to international opportunities.',
            ],
            curriculum: 'Resume',
            phoneLabel: '',
        },
    }[language]
    
  return (
    <div className='w-full h-full overflow-y-auto pb-20 px-4 pt-4'>
        <div className='flex justify-between items-center mb-4'>
            <div>
                <span className='text-xs underline'>gabrielzanella.com.br</span>
                <h1 className='text-2xl font-bold mt-1'>{t.title}</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-1'>
                    <button
                      className={`w-8 h-8 text-xs border-1 border-gray-300 rounded p-1 ${language==='pt' ? 'bg-gray-300 text-sky-900' : 'hover:bg-gray-300 hover:text-sky-900'}`}
                      onClick={() => setLanguage('pt')}
                    >PT</button>
                    <button
                      className={`w-8 h-8 text-xs p-1 rounded ${language==='en' ? 'bg-gray-300 text-sky-900' : 'hover:bg-gray-300 hover:text-sky-900'}`}
                      onClick={() => setLanguage('en')}
                    >EN</button>
                </div>
                <button 
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className='flex items-center justify-center hover:text-sky-500 transition-colors'
                  aria-label="Toggle theme"
                >
                  <FontAwesomeIcon className='text-lg' icon={theme === 'light' ? faMoon : faSun}/>
                </button>
            </div>
        </div>
        
        <div className='mb-6'>
            <h2 className='text-xl mb-3 font-semibold text-sky-500'>{t.role}</h2>
            <div className={`space-y-3 text-sm leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              {t.about.map((txt, i) => (<p key={i}>{txt}</p>))}
            </div>
        </div>
        
        <div className='mb-6'>
            <a 
              href={language === 'pt' ? '/Gabriel Zanella - CV.pdf' : '/Gabriel Zanella - RESUME.pdf'} 
              download={language === 'pt' ? 'Gabriel Zanella - CV.pdf' : 'Gabriel Zanella - RESUME.pdf'}
              className='bg-sky-700 border-1 border-gray-300 rounded py-2 px-4 hover:bg-sky-800 text-white flex items-center justify-center w-full text-sm'
            >
              {t.curriculum}
            </a>
        </div>
        
        <div className='flex justify-center gap-4 mb-6'>
            <a href={myLinks[0].url} target='_blank' className='flex items-center'><FontAwesomeIcon className='text-3xl hover:text-gray-400' icon={faGithubSquare}/></a>
            <a href={myLinks[1].url} target='_blank' className='flex items-center'><FontAwesomeIcon className='text-3xl hover:text-gray-400' icon={faLinkedin}/></a>
            <a href={myLinks[2].url} className='flex items-center'><FontAwesomeIcon className='text-3xl hover:text-gray-400' icon={faEnvelopeSquare}/></a>
            <a href={myLinks[3].url} target='_blank' className='flex items-center'><FontAwesomeIcon className='text-3xl hover:text-gray-400' icon={faWhatsappSquare}/></a>
        </div>
        
        <div className='text-center mb-4'>
            <span className='flex items-center justify-center gap-2 text-sm'><FontAwesomeIcon icon={faMobileAlt}/> {myLinks[4].url}</span>
        </div>
        
        <div>
            <ul className='gap-2 flex flex-col text-sm'>
                <li><b className='text-sky-500'>Front-End:</b> React, React Native, TypeScript, JavaScript, Next.js, TailwindCSS, HTML, CSS</li>
                <li><b className='text-sky-500'>Back-End:</b> Python, FastAPI, Flask</li>
                <li><b className='text-sky-500'>Database:</b> PostgreSQL, SQL Server</li>
                <li><b className='text-sky-500'>Cloud & DevOps:</b> Microsoft Azure, Azure DevOps, CI/CD, Git</li>
                <li><b className='text-sky-500'>Other:</b> Power BI, Power Apps, Power Automate, SCRUM</li>
            </ul>
        </div>
    </div>
  )
}

export default MobileMyInfo
