import React from 'react';
import './ResearchersPage.css'
import ResearchersTable from '../../components/ResearchersTable/ResearchersTable';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ResearchersPage: React.FC = () => {
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
      <h2>Chercheurs</h2>
      <button onClick={() => navigate('/add-researcher')}>Ajouter un Chercheur</button>
      <ResearchersTable />
    </>
  )
};

export default ResearchersPage;