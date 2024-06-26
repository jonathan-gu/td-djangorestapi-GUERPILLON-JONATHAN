import React from 'react';
import './ProjectsPage.css'
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Projets</h2>
      <button onClick={() => navigate('/add-project')}>Ajouter un Chercheur</button>
      <ProjectsTable />
    </>
  )
};

export default Projects;