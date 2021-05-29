import * as React from 'react'
import PropTypes from 'prop-types'

import './ProjectsList.scss'

export interface ProjectProps {
  projectName: string
  deploymentLink?: string
  githubRepo?: string
  role: string
  gif?: string
  description: string
  techStack?: string
  imgClass?: string
}

const Project: React.SFC<ProjectProps> = ({
  projectName,
  deploymentLink,
  githubRepo,
  role,
  gif,
  description,
  techStack,
  imgClass
}) => {
  const deploymentIcon = deploymentLink ? <i className="iconP fas fa-link"></i> : null
  const githubIcon = githubRepo ? <i className="iconP fab fa-github"></i> : null
 
  return (
    <>
      <br />
      <div className="project">
        <h3>
          {projectName}{' '}
          <a href={deploymentLink} target="_blank" rel="noopener noreferrer">
            {deploymentIcon}
          </a>{' '}
          <a href={githubRepo} target="_blank" rel="noopener noreferrer">
            {githubIcon}
          </a>
        </h3>
        <p>
          <span style={{ textDecoration: 'underline' }}>Role:</span> {role}
        </p>
        <a href={deploymentLink} target="_blank" rel="noopener noreferrer">
          <img src={gif} alt="app" className={imgClass} />
        </a>
        <div className="desc-stack">
          <p className="description">
            <p style={{ textDecoration: 'underline' }}>Description: </p>
            {description}
          </p>
          <p className="stack">
            <p style={{ textDecoration: 'underline' }}>Tech Stack: </p>
            {techStack}
          </p>
        </div>
      </div>
      <br />
    </>
  )
}

Project.propTypes = {
  deploymentLink: PropTypes.string,
  githubRepo: PropTypes.string,
  role: PropTypes.string.isRequired,
  gif: PropTypes.string,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.string,
  imgClass: PropTypes.string
}

export default Project
