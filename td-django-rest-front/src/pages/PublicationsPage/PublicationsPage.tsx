import React from 'react';
import './PublicationsPage.css'
import PublicationsTable from '../../components/PublicationsTable/PublicationsTable';
import { useNavigate } from 'react-router-dom';

const Publications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Publications</h2>
      <button onClick={() => navigate('/add-publication')}>Ajouter un Chercheur</button>
      <PublicationsTable />
    </>
  )
};

export default Publications;