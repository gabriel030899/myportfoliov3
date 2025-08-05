import React from 'react'
import projects from '../lists/MyProjects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {
  return (
    <section className='w-full h-202 px-2 py-4'>
        <form className="flex items-center gap-4 mb-4">
            <select name="Featured" id="" className="p-2 border border-gray-300 rounded-md">
                <option value="name">Name</option>
                <option value="creation-date">Creation Date</option>
                <option value="last-update">Last Update</option>
            </select>
        </form>
        <div className="flex flex-col gap-8 overflow-y-scroll h-full">
            {projects.map((project) => (
                <div key={project.id}>
                    <div>
                        <a href="#project">
                            <img src={project.image} alt="Project Image" className="w-1/2 rounded-md mb-4" />
                        </a>
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
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline underline mr-5">
                            {project.linkName}
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects