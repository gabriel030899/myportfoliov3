import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function MyInfo() {
  return (
    <div className='w-2/5 h-full py-4 px-2 bg-sky-950 border-1 border-gray-300 rounded-md'>
        <div className='w-full h-10'>
            <span className='underline'>gabrielzanella.com.br</span>
        </div>
        <div className='flex justify-between items-center mb-2'>
            <h1 className='text-3xl font-bold text-center'>Gabriel Zanella</h1>
            <div className='flex items-center'>
                <button className='w-10 border-1 border-gray-300 rounded p-1 hover:bg-gray-300 hover:text-sky-900 mr-1'>PT</button>
                <button className='w-10 hover:bg-gray-300 hover:border-2 hover:border-gray-300 hover:text-sky-900 p-1 rounded'>EN</button>
                <a href="#" className='flex items-center'><FontAwesomeIcon className='text-xl mx-1' icon={faSun}/></a>
            </div>
        </div>
        <div className='mb-5 gap-2 flex flex-col'>
            <h2 className='text-xl mb-5 font-semibold'>Fullstack Developer</h2>
            <p>Sou Analista de Dados e Desenvolvedor Web Full Stack, atualmente trabalhando como Analista de Dados Pleno na NBS Latam, onde desenvolvo aplicações e softwares utilizando a Power Platform da Microsoft (Power BI, Power Apps e Power Automate), otimizando processos e melhorando a eficiência operacional.</p>
            <p>Trabalho diretamente com clientes e stakeholders para definir requisitos, modelar fluxos de processos e desenvolver mockups, aplicando metodologias ágeis como SCRUM.</p>
            <p>Minha expertise vai além da Power Platform. Possuo conhecimento sólido em desenvolvimento web, com proficiência em HTML, CSS, Javascript, React.js, Typescript, Next.js, PHP e Python.</p>
        </div>
        <div className='flex gap-3 items-center h-12 mb-5'>
            <a href="#" className='bg-sky-700 border-1 border-gray-300 rounded py-1 px-2 h-8 hover:bg-sky-800'>Curriculum</a>
            <a href="#" className='flex items-center'><FontAwesomeIcon className='text-4xl w-auto hover:text-gray-400' icon={faGithubSquare}/></a>
            <a href="#" className='flex items-center'><FontAwesomeIcon className='text-4xl w-auto hover:text-gray-400' icon={faLinkedin}/></a>
            <a href="#" className='flex items-center'><FontAwesomeIcon className='text-4xl w-auto hover:text-gray-400' icon={faEnvelopeSquare}/></a>
            <a href="#" className='flex items-center'><FontAwesomeIcon className='text-4xl w-auto hover:text-gray-400' icon={faWhatsappSquare}/></a>
            
            <span className='flex items-center gap-1'><FontAwesomeIcon className='text-xl w-auto flex items-center' icon={faMobileAlt}/> (19) 9 9999-0000</span>
        </div>
        <div>
            <ul className='gap-2 flex flex-col'>
                <li><b className='text-sky-500'>Front-End:</b> HTML, CSS, Javascript, React, React Native, Next.js, TailwindCSS</li>
                <li><b className='text-sky-500'>Back-End:</b> Python, FlaskAPI, FastAPI, PHP, Laravel</li>
                <li><b className='text-sky-500'>Database:</b> SQL Database, SQL Server, PostegreSQL</li>
                <li><b className='text-sky-500'>Cloud:</b> Microsoft Azure</li>
                <li><b className='text-sky-500'>Other:</b> Azure DevOps, Github DevOps, Docker</li>
            </ul>
        </div>
    </div>
  )
}

export default MyInfo