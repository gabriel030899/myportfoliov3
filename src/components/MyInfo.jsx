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

function MyInfo() {
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
    <section className='w-2/5 h-full py-4 px-2'>
        <div className='w-full h-10'>
            <span className='underline'>gabrielzanella.com.br</span>
        </div>
        <div className='flex justify-between items-center mb-4'>
            <h1 className='text-3xl font-bold'>{t.title}</h1>
            <div className='flex items-center'>
                <button
                  className={`w-10 border-1 border-gray-300 rounded p-1 mr-1 ${language==='pt' ? 'bg-gray-300 text-sky-900' : 'hover:bg-gray-300 hover:text-sky-900'}`}
                  onClick={() => setLanguage('pt')}
                >PT</button>
                <button
                  className={`w-10 p-1 rounded mr-1 ${language==='en' ? 'bg-gray-300 text-sky-900' : 'hover:bg-gray-300 hover:text-sky-900'}`}
                  onClick={() => setLanguage('en')}
                >EN</button>
                <button 
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className='flex items-center hover:text-sky-500 transition-colors'
                  aria-label="Toggle theme"
                >
                  <FontAwesomeIcon className='text-xl mx-1' icon={theme === 'light' ? faMoon : faSun}/>
                </button>
            </div>
        </div>
        <div className='mb-6'>
            <h2 className='text-2xl mb-4 font-semibold text-sky-500'>{t.role}</h2>
            <div className={`space-y-3 leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              {t.about.map((txt, i) => (<p key={i}>{txt}</p>))}
            </div>
        </div>
        <div className='flex flex-wrap gap-2 items-center mb-5'>
            <a 
              href={language === 'pt' ? '/Gabriel Zanella - CV.pdf' : '/Gabriel Zanella - RESUME.pdf'} 
              download={language === 'pt' ? 'Gabriel Zanella - CV.pdf' : 'Gabriel Zanella - RESUME.pdf'}
              className='bg-sky-700 border-1 border-gray-300 rounded py-1 px-3 h-8 hover:bg-sky-800 text-white flex items-center transition-colors'
            >
              {t.curriculum}
            </a>
            <div className='flex gap-2 items-center'>
              <a href={myLinks[0].url} target='_blank' className='flex items-center'><FontAwesomeIcon className='text-4xl hover:text-gray-400 transition-colors' icon={faGithubSquare}/></a>
              <a href={myLinks[1].url} target='_blank' className='flex items-center'><FontAwesomeIcon className='text-4xl hover:text-gray-400 transition-colors' icon={faLinkedin}/></a>
              <a href={myLinks[2].url} className='flex items-center'><FontAwesomeIcon className='text-4xl hover:text-gray-400 transition-colors' icon={faEnvelopeSquare}/></a>
              <a href={myLinks[3].url} target='_blank' className='flex items-center'><FontAwesomeIcon className='text-4xl hover:text-gray-400 transition-colors' icon={faWhatsappSquare}/></a>
            </div>
            <span className='flex items-center gap-1 text-sm'>
              <FontAwesomeIcon className='text-lg' icon={faMobileAlt}/> 
              {myLinks[4].url}
            </span>
        </div>
        <div>
            <ul className='gap-2 flex flex-col'>
                <li><b className='text-sky-500'>Front-End:</b> React, React Native, TypeScript, JavaScript, Next.js, TailwindCSS, HTML, CSS</li>
                <li><b className='text-sky-500'>Back-End:</b> Python, FastAPI, Flask</li>
                <li><b className='text-sky-500'>Database:</b> PostgreSQL, SQL Server</li>
                <li><b className='text-sky-500'>Cloud & DevOps:</b> Microsoft Azure, Azure DevOps, CI/CD, Git</li>
                <li><b className='text-sky-500'>Other:</b> Power BI, Power Apps, Power Automate, SCRUM</li>
            </ul>
        </div>
    </section>
  )
}

export default MyInfo