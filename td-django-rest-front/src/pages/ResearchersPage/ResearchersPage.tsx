import React from 'react';
import './ResearchersPage.css'
import ResearchersTable from '../../components/ResearchersTable/ResearchersTable';
import { useNavigate } from 'react-router-dom';

const ResearchersPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Chercheurs</h2>
      <button onClick={() => navigate('/add-researcher')}>Ajouter un Chercheur</button>
      <ResearchersTable />
    </>
  )
};

export default ResearchersPage;