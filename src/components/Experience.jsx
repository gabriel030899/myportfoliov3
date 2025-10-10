import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const experiences = [
  {
    id: 1,
    role: 'Analista de Dados Senior (Senior Data Analyst)',
    company: 'Nestlé',
    location: 'Ribeirão Preto, São Paulo, Brasil',
    employmentType: 'Tempo integral',
    period: 'set de 2025 — o momento · 2 meses',
    bullets: [
      'Estruturação e liderança do novo pilar de desenvolvimento web, ampliando projetos e clientes atendidos.',
      'Gestão de equipe de desenvolvimento web (front-end e back-end).',
      'Desenvolvimento full stack com React (front-end) e Python (back-end).',
      'Configuração e gerenciamento de serviços em nuvem na Microsoft Azure.',
      'Gestão de DevOps: CI/CD, versionamento, automação e governança de pipelines.',
      'Mapeamento e negociação de requisitos de projetos com stakeholders.',
      'Desenvolvimento de soluções na Power Platform (Power Apps, Power Automate e Power BI).',
    ],
    skills: [
      { name: 'Liderança de equipe' },
      { name: 'Azure DevOps' },
      { name: 'Azure' },
      { name: 'React.js' },
      { name: 'Python' },
      { name: 'Microsoft Power Platform' },
    ],
  },
  {
    id: 2,
    role: 'Analista de Dados Pleno (PL Data Analyst)',
    company: 'Nestlé',
    location: 'Ribeirão Preto, São Paulo, Brasil',
    employmentType: 'Tempo integral',
    period: 'set de 2022 — set de 2025 · 3 anos 1 mês',
    bullets: [
      'Desenvolvimento de aplicativos e softwares utilizando a Microsoft Power Platform (Power Apps, Power Automate e Power BI).',
      'Gestão de stakeholders e contato com clientes e parceiros para definição de requisitos e fluxos de processo.',
      'Desenvolvimento de mockups e acompanhamento do ciclo de vida dos projetos.',
    ],
    skills: [
      { name: 'SQL' },
      { name: 'Desenvolvimento web' },
      { name: 'Microsoft Power Platform' },
      { name: 'Front-end' },
      { name: 'Gestão de stakeholders' },
      { name: 'Desenvolvimento de software' },
      { name: 'React.js' },
      { name: 'Python' },
      { name: 'Azure DevOps' },
    ],
  },
  {
    id: 3,
    role: 'Analista de Dados Junior (JR Data Analyst)',
    company: 'Nestlé',
    location: 'Ribeirão Preto, São Paulo, Brasil',
    employmentType: 'Tempo integral',
    period: 'nov de 2021 — set de 2022 · 11 meses',
    bullets: [
      'Desenvolvimento de dashboards, aplicativos e automações com foco na Microsoft Power Platform.',
      'Utilização de metodologias ágeis (SCRUM) para organização e gestão de projetos.',
      'Contato com clientes para mapeamento de processos e levantamento de requisitos.',
    ],
    skills: [
      { name: 'Melhoria contínua' },
      { name: 'Gestão de projetos' },
      { name: 'Inglês' },
      { name: 'Microsoft PowerApps' },
      { name: 'Scrum' },
      { name: 'Bootstrap' },
      { name: 'HTML5' },
      { name: 'Análise de dados' },
      { name: 'Desenvolvimento web' },
      { name: 'Microsoft Power Automate' },
      { name: 'Microsoft Power BI' },
      { name: 'CSS' },
      { name: 'UX' },
      { name: 'JavaScript' },
      { name: 'Desenvolvimento de software' },
    ],
  },
  {
    id: 4,
    role: 'Aprendiz',
    company: 'Nestlé',
    location: 'São José do Rio Pardo, São Paulo, Brasil',
    employmentType: 'Tempo integral',
    period: 'jul de 2020 — out de 2021 · 1 ano 4 meses',
    bullets: [
      'Participação no Pilar DIGITAL: ideação de soluções, coordenação e treinamento de colaboradores nas novas ferramentas.',
      'Desenvolvimento de ferramenta em PHP para gestão de projetos (hierarquia de usuários, cadastro e gerenciamento, calendário, notificações e filtros).',
      'Desenvolvimento Front-End para portal de treinamentos autônomos (HTML, CSS e JavaScript).',
      'Criação e atualização de dashboards em Power BI para análise de dados da fábrica.',
      'Apoio na implementação e suporte de soluções em Azure.',
      'Participação no Pilar LEAN: atualização de GBO e treinamento de colaboradores.',
    ],
    skills: [
      { name: 'Melhoria contínua' },
      { name: 'Inglês' },
      { name: 'Microsoft PowerApps' },
      { name: 'Microsoft SQL Server' },
      { name: 'Scrum' },
      { name: 'Bootstrap' },
      { name: 'HTML5' },
      { name: 'Microsoft Power Platform' },
      { name: 'Trabalho padronizado' },
      { name: 'PHP' },
      { name: 'Microsoft Power BI' },
      { name: 'CSS' },
      { name: 'JavaScript' },
    ],
  },
]

function Experience() {
  const { language } = useLanguage()
  const labels = language === 'pt' ? { title: 'Experiências' } : { title: 'Experience' }
  return (
    <section className="w-full h-full px-2 py-4 flex flex-col">
      <header className="mb-4">
        <h1 className="text-xl font-semibold">{labels.title}</h1>
      </header>

      <div className="flex flex-col gap-6 overflow-y-auto flex-1 min-h-0 pr-1">
        {experiences.map((exp) => (
          <article key={exp.id} className="border border-gray-300 rounded-md p-4">
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <h2 className="text-lg font-bold">{exp.role}</h2>
              <span className="text-gray-400">•</span>
              <span className="font-medium">{exp.company}</span>
              <span className="ml-auto text-sm text-gray-500">{exp.period}</span>
            </div>
            {exp.location && (
              <div className="text-sm text-gray-500 mb-3">{exp.location} {exp.employmentType ? `· ${exp.employmentType}` : ''}</div>
            )}
            <ul className="list-disc pl-5 space-y-1 mb-3">
              {exp.bullets?.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((s, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 py-1 px-2 rounded-md text-sm"
                >
                  {s.name}
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
