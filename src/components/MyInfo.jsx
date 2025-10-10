import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { useLanguage } from '../contexts/LanguageContext'

const myLinks = [
    { name: 'GitHub', url: 'https://github.com/gabriel030899' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gabrielzanella99/' },
    { name: 'Email', url: 'mailto:gabrieldoissteam@hotmail.com' },
    { name: 'WhatsApp', url: 'https://wa.me/5519999009796' },
    { name: 'Phone', url: '+55 (19) 9 9900-9796' }
]

function MyInfo() {
    const { language, setLanguage } = useLanguage()
    const t = {
        pt: {
            title: 'Gabriel Zanella',
            role: 'Desenvolvedor Full Stack',
            about: [
                'Sou Analista de Dados e Desenvolvedor Web Full Stack, atualmente trabalhando como Analista de Dados Pleno na NBS Latam, onde desenvolvo aplicações e softwares utilizando a Power Platform da Microsoft (Power BI, Power Apps e Power Automate), otimizando processos e melhorando a eficiência operacional.',
                'Trabalho diretamente com clientes e stakeholders para definir requisitos, modelar fluxos de processos e desenvolver mockups, aplicando metodologias ágeis como SCRUM.',
                'Minha expertise vai além da Power Platform. Possuo conhecimento sólido em desenvolvimento web, com proficiência em HTML, CSS, Javascript, React.js, Typescript, Next.js, PHP e Python.',
            ],
            curriculum: 'Currículo',
            phoneLabel: '',
        },
        en: {
            title: 'Gabriel Zanella',
            role: 'Full Stack Developer',
            about: [
                "I'm a Data Analyst and Full Stack Web Developer. I build apps and software using Microsoft's Power Platform (Power BI, Power Apps, Power Automate), optimizing processes and operational efficiency.",
                'I work directly with clients and stakeholders to define requirements, model process flows, and develop mockups, applying agile methodologies such as SCRUM.',
                'Beyond the Power Platform, I have solid web development skills with HTML, CSS, JavaScript, React.js, TypeScript, Next.js, PHP, and Python.',
            ],
            curriculum: 'Resume',
            phoneLabel: '',
        },
    }[language]
  return (
    <section className='w-2/5 h-full py-4 px-2 border-1 border-gray-300 rounded-md'>
        <div className='w-full h-10'>
            <span className='underline'>gabrielzanella.com.br</span>
        </div>
        <div className='flex justify-between items-center mb-2'>
            <h1 className='text-3xl font-bold text-center'>{t.title}</h1>
            <div className='flex items-center'>
                <button
                  className={`w-10 border-1 border-gray-300 rounded p-1 mr-1 ${language==='pt' ? 'bg-gray-300 text-sky-900' : 'hover:bg-gray-300 hover:text-sky-900'}`}
                  onClick={() => setLanguage('pt')}
                >PT</button>
                <button
                  className={`w-10 p-1 rounded ${language==='en' ? 'bg-gray-300 text-sky-900' : 'hover:bg-gray-300 hover:text-sky-900'}`}
                  onClick={() => setLanguage('en')}
                >EN</button>
                <a href="#" className='flex items-center'><FontAwesomeIcon className='text-xl mx-1' icon={faSun}/></a>
            </div>
        </div>
        <div className='mb-5 gap-2 flex flex-col'>
            <h2 className='text-xl mb-5 font-semibold'>{t.role}</h2>
            {t.about.map((txt, i) => (<p key={i}>{txt}</p>))}
        </div>
        <div className='flex gap-3 items-center h-12 mb-5'>
            <a href="#" className='bg-sky-700 border-1 border-gray-300 rounded py-1 px-2 h-8 hover:bg-sky-800'>Curriculum</a>
            <a href={myLinks[0].url} target='_blank' className='flex items-center'><FontAwesomeIcon className='text-4xl w-auto hover:text-gray-400' icon={faGithubSquare}/></a>
            <a href={myLinks[1].url} target='_blank' className='flex items-center'><FontAwesomeIcon className='text-4xl w-auto hover:text-gray-400' icon={faLinkedin}/></a>
            <a href={myLinks[2].url} className='flex items-center'><FontAwesomeIcon className='text-4xl w-auto hover:text-gray-400' icon={faEnvelopeSquare}/></a>
            <a href={myLinks[3].url} target='_blank' className='flex items-center'><FontAwesomeIcon className='text-4xl w-auto hover:text-gray-400' icon={faWhatsappSquare}/></a>

            <span className='flex items-center gap-1'><FontAwesomeIcon className='text-xl w-auto flex items-center' icon={faMobileAlt}/> {myLinks[4].url}</span>
        </div>
        <div>
            <ul className='gap-2 flex flex-col'>
                <li><b className='text-sky-500'>Front-End:</b> HTML, CSS, JavaScript, React, React Native, Next.js, TailwindCSS</li>
                <li><b className='text-sky-500'>Back-End:</b> Python, FlaskAPI, FastAPI, PHP</li>
                <li><b className='text-sky-500'>Database:</b> SQL Database, SQL Server, PostgreSQL</li>
                <li><b className='text-sky-500'>Cloud:</b> Microsoft Azure</li>
                <li><b className='text-sky-500'>Other:</b> Azure DevOps, Github DevOps, Docker</li>
            </ul>
        </div>
    </section>
  )
}

export default MyInfo