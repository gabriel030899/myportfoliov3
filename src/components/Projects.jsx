import React, { useMemo, useState } from 'react'
import projects from '../lists/MyProjects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ProjectModal from './ProjectModal'
import { useLanguage } from '../contexts/LanguageContext'

function Projects() {
  const [openProject, setOpenProject] = useState(null)
    const [sortBy, setSortBy] = useState('name')
    const { language } = useLanguage()
    const labels = language === 'pt'
        ? { sortBy: 'Ordenar por', name: 'Nome', creationDate: 'Data de criação', lastUpdate: 'Última atualização' }
        : { sortBy: 'Sort by', name: 'Name', creationDate: 'Creation Date', lastUpdate: 'Last Update' }

  const openModal = (project) => setOpenProject(project)
  const closeModal = () => setOpenProject(null)

    const parseDate = (value) => {
        if (!value) return 0
        // Accept formats like '07-2025', '2025-07', '2025/07', or ISO strings
        const parts = String(value).replace(/\//g, '-').split('-')
        let year, month, day
        if (parts.length === 2) {
            // MM-YYYY or YYYY-MM
            if (parts[0].length === 4) {
                year = parseInt(parts[0], 10)
                month = parseInt(parts[1], 10) - 1
            } else {
                month = parseInt(parts[0], 10) - 1
                year = parseInt(parts[1], 10)
            }
            day = 1
        } else if (parts.length === 3) {
            // YYYY-MM-DD or DD-MM-YYYY
            if (parts[0].length === 4) {
                year = parseInt(parts[0], 10)
                month = parseInt(parts[1], 10) - 1
                day = parseInt(parts[2], 10)
            } else {
                day = parseInt(parts[0], 10)
                month = parseInt(parts[1], 10) - 1
                year = parseInt(parts[2], 10)
            }
        } else {
            const d = new Date(value)
            if (!isNaN(d)) return d.getTime()
            return 0
        }
        const d = new Date(year, month, day || 1)
        return d.getTime()
    }

    const sortedProjects = useMemo(() => {
        const arr = [...projects]
        if (sortBy === 'name') {
            arr.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sortBy === 'creation-date') {
            arr.sort((a, b) => parseDate(b.creationDate) - parseDate(a.creationDate))
        } else if (sortBy === 'last-update') {
            arr.sort(
                (a, b) =>
                    parseDate(b.lastUpdate || b.last_updated || b.updatedAt || b.creationDate) -
                    parseDate(a.lastUpdate || a.last_updated || a.updatedAt || a.creationDate)
            )
        }
        return arr
    }, [sortBy])

  return (
    <section className='w-full h-full px-2 py-4 flex flex-col'>
                <form className="flex items-center gap-4 mb-4">
                    <label className="text-sm text-gray-400">{labels.sortBy}</label>
                    <select
                            name="sortBy"
                            aria-label="Ordenar projetos"
                            className="p-2 border border-gray-300 rounded-md"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                        <option value="name">{labels.name}</option>
                        <option value="creation-date">{labels.creationDate}</option>
                        <option value="last-update">{labels.lastUpdate}</option>
            </select>
        </form>
        <div className="flex flex-col gap-8 overflow-y-auto flex-1 min-h-0">
                        {sortedProjects.map((project) => (
                <div key={project.id} className="cursor-pointer" onClick={() => openModal(project)}>
                    <div>
                        <img src={project.image} alt="Project Image" className="w-1/2 rounded-md mb-4" />
                        <div className="flex gap-3 items-center mb-2">
                            <h1 className="text-lg font-bold">{project.name}</h1>
                            <span>{project.creationDate}</span>
                        </div>
                        <p className="mb-4">{project.description}</p>
                        <div className="mb-4">
                            {project.skills.map((skill, index) => (
                                <span key={index} className="bg-gray-200 text-gray-800 py-1 px-2 rounded-md mr-2">{skill.name}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-blue-500 hover:underline underline mr-5">
                            {project.linkName}
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                    </div>
                </div>
            ))}
        </div>

        <ProjectModal isOpen={!!openProject} project={openProject} onClose={closeModal} />
    </section>
  )
}

export default Projects