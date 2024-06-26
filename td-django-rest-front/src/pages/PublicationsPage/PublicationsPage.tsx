import React from 'react';
import './PublicationsPage.css'
import PublicationsTable from '../../components/PublicationsTable/PublicationsTable';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Publications: React.FC = () => {
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
      <h2>Publications</h2>
      <button onClick={() => navigate('/add-publication')}>Ajouter un Chercheur</button>
      <PublicationsTable />
    </>
  )
};

export default Publications;