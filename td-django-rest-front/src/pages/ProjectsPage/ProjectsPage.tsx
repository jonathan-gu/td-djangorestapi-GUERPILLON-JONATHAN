import React from 'react';
import './ProjectsPage.css'
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable';

const Projects: React.FC = () => {
  return (
    <>
      <h2>Projets</h2>
      <ProjectsTable />
    </>
  )
};

export default Projects;