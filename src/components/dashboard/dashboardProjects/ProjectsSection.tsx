import React, { useContext } from 'react'
import ProjectsManager from './ProjectsManager'
import ProjectsHandler from './ProjectsHandler'
import { ProjectsContext, ProjectsContextProvider } from '../../../utils/contexts/ProjectsContext'
import ProjectModal from './ProjectModal'
import { AnimatePresence } from 'framer-motion'

export default function ProjectsSection() {
  const {project_data} = useContext(ProjectsContext)
  console.log(project_data.project_modal)

  return (
    <div className={`bg-dark-dark h-screen relative`}>
        <ProjectsHandler />
    </div>
  )
}