import React from 'react';
import './ProjectsPage.css'
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const get_expiration_date = localStorage.getItem('expiration_date')
    if (!get_expiration_date) {
      navigate('/login')
    }
    else if (new Date(get_expiration_date) < new Date()) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <h2>Projets</h2>
      <button onClick={() => navigate('/add-project')}>Ajouter un Projet</button>
      <ProjectsTable />
    </>
  )
};

export default Projects;