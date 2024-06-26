import React from 'react';
import './ResearchersPage.css'
import ResearchersTable from '../../components/ResearchersTable/ResearchersTable';

const ResearchersPage: React.FC = () => {
  return (
    <>
      <h2>Chercheurs</h2>
      <ResearchersTable />
    </>
  )
};

export default ResearchersPage;