import React from 'react';
import './PublicationsPage.css'
import PublicationsTable from '../../components/PublicationsTable/PublicationsTable';

const Publications: React.FC = () => {
  return (
    <>
      <h2>Publications</h2>
      <PublicationsTable />
    </>
  )
};

export default Publications;