import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useLanguage } from '../contexts/LanguageContext'

function ProjectModal({ isOpen, project, onClose }) {
  if (!isOpen || !project) return null
  const { language } = useLanguage()
  const t = language === 'pt'
    ? { techs: 'Tecnologias', visit: 'Visitar site', imageAlt: (name) => `Imagem do projeto ${name}` }
    : { techs: 'Technologies', visit: 'Visit site', imageAlt: (name) => `Project image ${name}` }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="w-full max-w-5xl max-h-[90vh] overflow-auto bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-xl">
        <div className="flex items-start justify-between gap-4 p-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 id="project-modal-title" className="text-2xl font-bold">{project.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.creationDate}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start justify-center">
            <img
              src={project.image}
              alt={t.imageAlt(project.name)}
              className="w-full h-auto max-h-[60vh] object-contain rounded-md"
            />
          </div>

          <div className="flex flex-col gap-4 min-w-0">
            <p className="leading-relaxed">{project.description}</p>

            <div>
              <h3 className="font-semibold mb-2">{t.techs}</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills?.map((skill, idx) => (
                  <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-1 px-2 rounded-md text-sm">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {project.linkName || t.visit}
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
