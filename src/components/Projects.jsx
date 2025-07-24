import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Projects() {
  return (
    <section>
        <form>
            <input type="text" />
            <select name="Featured" id="">
                <option value="name">Name</option>
                <option value="creation-date">Creation Date</option>
                <option value="last-update">Last Update</option>
            </select>
        </form>
        <div>
            <div>
                <a href="#project">
                    <div>
                        <h1>Name</h1>
                        <span>01/01/2025</span>
                    </div>
                    <p>Project Desc</p>
                </a>
                <div>
                    <div>React</div>
                </div>
                <div>
                    <a href="#"><FontAwesomeIcon icon={faGithub} alt="github"/></a>
                </div>
            </div>
            <div>
                <img src="" alt="Project Image" />
            </div>
        </div>
    </section>
  )
}

export default Projects