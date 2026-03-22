import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const experiences = [
  {
    id: 1,
    role: {
      pt: 'Analista de Dados Senior (Senior Data Analyst)',
      en: 'Senior Data Analyst'
    },
    company: 'Nestlé',
    location: {
      pt: 'Ribeirão Preto, São Paulo, Brasil',
      en: 'Ribeirão Preto, São Paulo, Brazil'
    },
    employmentType: {
      pt: 'Tempo integral',
      en: 'Full-time'
    },
    period: {
      pt: 'set de 2025 — o momento · 7 meses',
      en: 'Sep 2025 — Present · 7 months'
    },
    bullets: {
      pt: [
        'Estruturação e liderança do novo pilar de desenvolvimento web, ampliando projetos e clientes atendidos.',
        'Gestão de equipe de desenvolvimento web (front-end e back-end).',
        'Desenvolvimento full stack com React (front-end) e Python (back-end).',
        'Configuração e gerenciamento de serviços em nuvem na Microsoft Azure.',
        'Gestão de DevOps: CI/CD, versionamento, automação e governança de pipelines.',
        'Mapeamento e negociação de requisitos de projetos com stakeholders.',
        'Desenvolvimento de soluções na Power Platform (Power Apps, Power Automate e Power BI).',
      ],
      en: [
        'Structuring and leading the new web development pillar, expanding projects and clients served.',
        'Managing web development team (front-end and back-end).',
        'Full stack development with React (front-end) and Python (back-end).',
        'Configuration and management of cloud services on Microsoft Azure.',
        'DevOps management: CI/CD, versioning, automation, and pipeline governance.',
        'Mapping and negotiating project requirements with stakeholders.',
        'Development of solutions on Power Platform (Power Apps, Power Automate, and Power BI).',
      ]
    },
    skills: [
      { name: 'Team Leadership', pt: 'Liderança de equipe' },
      { name: 'Azure DevOps' },
      { name: 'Azure' },
      { name: 'React.js' },
      { name: 'Python' },
      { name: 'Microsoft Power Platform' },
    ],
  },
  {
    id: 2,
    role: {
      pt: 'Analista de Dados Pleno (PL Data Analyst)',
      en: 'Mid-Level Data Analyst'
    },
    company: 'Nestlé',
    location: {
      pt: 'Ribeirão Preto, São Paulo, Brasil',
      en: 'Ribeirão Preto, São Paulo, Brazil'
    },
    employmentType: {
      pt: 'Tempo integral',
      en: 'Full-time'
    },
    period: {
      pt: 'set de 2022 — set de 2025 · 3 anos 1 mês',
      en: 'Sep 2022 — Sep 2025 · 3 years 1 month'
    },
    bullets: {
      pt: [
        'Desenvolvimento de aplicativos e softwares utilizando a Microsoft Power Platform (Power Apps, Power Automate e Power BI).',
        'Gestão de stakeholders e contato com clientes e parceiros para definição de requisitos e fluxos de processo.',
        'Desenvolvimento de mockups e acompanhamento do ciclo de vida dos projetos.',
      ],
      en: [
        'Development of applications and software using Microsoft Power Platform (Power Apps, Power Automate, and Power BI).',
        'Stakeholder management and contact with clients and partners for requirements definition and process flows.',
        'Mockup development and project lifecycle tracking.',
      ]
    },
    skills: [
      { name: 'SQL' },
      { name: 'Web Development', pt: 'Desenvolvimento web' },
      { name: 'Microsoft Power Platform' },
      { name: 'Front-end' },
      { name: 'Stakeholder Management', pt: 'Gestão de stakeholders' },
      { name: 'Software Development', pt: 'Desenvolvimento de software' },
      { name: 'React.js' },
      { name: 'Python' },
      { name: 'Azure DevOps' },
    ],
  },
  {
    id: 3,
    role: {
      pt: 'Analista de Dados Junior (JR Data Analyst)',
      en: 'Junior Data Analyst'
    },
    company: 'Nestlé',
    location: {
      pt: 'Ribeirão Preto, São Paulo, Brasil',
      en: 'Ribeirão Preto, São Paulo, Brazil'
    },
    employmentType: {
      pt: 'Tempo integral',
      en: 'Full-time'
    },
    period: {
      pt: 'nov de 2021 — set de 2022 · 11 meses',
      en: 'Nov 2021 — Sep 2022 · 11 months'
    },
    bullets: {
      pt: [
        'Desenvolvimento de dashboards, aplicativos e automações com foco na Microsoft Power Platform.',
        'Utilização de metodologias ágeis (SCRUM) para organização e gestão de projetos.',
        'Contato com clientes para mapeamento de processos e levantamento de requisitos.',
      ],
      en: [
        'Development of dashboards, applications, and automations focused on Microsoft Power Platform.',
        'Use of agile methodologies (SCRUM) for project organization and management.',
        'Client contact for process mapping and requirements gathering.',
      ]
    },
    skills: [
      { name: 'Continuous Improvement', pt: 'Melhoria contínua' },
      { name: 'Project Management', pt: 'Gestão de projetos' },
      { name: 'English', pt: 'Inglês' },
      { name: 'Microsoft PowerApps' },
      { name: 'Scrum' },
      { name: 'Bootstrap' },
      { name: 'HTML5' },
      { name: 'Data Analysis', pt: 'Análise de dados' },
      { name: 'Web Development', pt: 'Desenvolvimento web' },
      { name: 'Microsoft Power Automate' },
      { name: 'Microsoft Power BI' },
      { name: 'CSS' },
      { name: 'UX' },
      { name: 'JavaScript' },
      { name: 'Software Development', pt: 'Desenvolvimento de software' },
    ],
  },
  {
    id: 4,
    role: {
      pt: 'Aprendiz',
      en: 'Apprentice'
    },
    company: 'Nestlé',
    location: {
      pt: 'São José do Rio Pardo, São Paulo, Brasil',
      en: 'São José do Rio Pardo, São Paulo, Brazil'
    },
    employmentType: {
      pt: 'Tempo integral',
      en: 'Full-time'
    },
    period: {
      pt: 'jul de 2020 — out de 2021 · 1 ano 4 meses',
      en: 'Jul 2020 — Oct 2021 · 1 year 4 months'
    },
    bullets: {
      pt: [
        'Participação no Pilar DIGITAL: ideação de soluções, coordenação e treinamento de colaboradores nas novas ferramentas.',
        'Desenvolvimento de ferramenta em PHP para gestão de projetos (hierarquia de usuários, cadastro e gerenciamento, calendário, notificações e filtros).',
        'Desenvolvimento Front-End para portal de treinamentos autônomos (HTML, CSS e JavaScript).',
        'Criação e atualização de dashboards em Power BI para análise de dados da fábrica.',
        'Apoio na implementação e suporte de soluções em Azure.',
        'Participação no Pilar LEAN: atualização de GBO e treinamento de colaboradores.',
      ],
      en: [
        'Participation in DIGITAL Pillar: ideation of solutions, coordination, and training of employees on new tools.',
        'Development of PHP tool for project management (user hierarchy, registration and management, calendar, notifications, and filters).',
        'Front-End development for autonomous training portal (HTML, CSS, and JavaScript).',
        'Creation and updating of Power BI dashboards for factory data analysis.',
        'Support in implementation and support of Azure solutions.',
        'Participation in LEAN Pillar: GBO update and employee training.',
      ]
    },
    skills: [
      { name: 'Continuous Improvement', pt: 'Melhoria contínua' },
      { name: 'English', pt: 'Inglês' },
      { name: 'Microsoft PowerApps' },
      { name: 'Microsoft SQL Server' },
      { name: 'Scrum' },
      { name: 'Bootstrap' },
      { name: 'HTML5' },
      { name: 'Microsoft Power Platform' },
      { name: 'Standardized Work', pt: 'Trabalho padronizado' },
      { name: 'PHP' },
      { name: 'Microsoft Power BI' },
      { name: 'CSS' },
      { name: 'JavaScript' },
    ],
  },
]

function Experience() {
  const { language, theme } = useLanguage()
  const labels = language === 'pt' ? { title: 'Experiências' } : { title: 'Experience' }
  return (
    <section className="w-full h-full px-2 py-4 flex flex-col">
      <header className="mb-4">
        <h1 className="text-xl font-semibold">{labels.title}</h1>
      </header>

      <div className="flex flex-col gap-6 overflow-y-auto flex-1 min-h-0 pr-1">
        {experiences.map((exp) => (
          <article key={exp.id} className={`rounded-md p-4 ${
            theme === 'light' 
              ? 'border border-gray-400 bg-white' 
              : 'border border-gray-600 bg-gray-800'
          }`}>
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <h2 className="text-lg font-bold">{typeof exp.role === 'object' ? exp.role[language] : exp.role}</h2>
              <span className={theme === 'light' ? 'text-gray-500' : 'text-gray-400'}>•</span>
              <span className="font-medium">{exp.company}</span>
              <span className="ml-auto text-sm text-gray-500">{typeof exp.period === 'object' ? exp.period[language] : exp.period}</span>
            </div>
            {exp.location && (
              <div className="text-sm text-gray-500 mb-3">
                {typeof exp.location === 'object' ? exp.location[language] : exp.location}
                {exp.employmentType ? ` · ${typeof exp.employmentType === 'object' ? exp.employmentType[language] : exp.employmentType}` : ''}
              </div>
            )}
            <ul className="list-disc pl-5 space-y-1 mb-3">
              {(typeof exp.bullets === 'object' && !Array.isArray(exp.bullets) ? exp.bullets[language] : exp.bullets)?.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((s, i) => (
                <span
                  key={i}
                  className="bg-sky-700 text-white border border-white py-1 px-2 rounded-md text-sm"
                >
                  {language === 'pt' && s.pt ? s.pt : s.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
