import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import ResearcherProject from '../../interfaces/ResearchProject';
import './ProjectsTable.css';

const ResearcherProjectsTable: React.FC = () => {
  const [researcherProjects, setResearcherProjects] = useState<ResearcherProject[]>([]);

  useEffect(() => {
    axios.get<ResearcherProject[]>('http://localhost:8000/api/projects/')
      .then((response: AxiosResponse<ResearcherProject[]>) => {
        setResearcherProjects(response.data);
      })
      .catch((error: AxiosError) => {
        console.error('There was an error fetching the researchers!', error);
      });
  }, []);

  return (
    <div className="table-container">
      {researcherProjects.map(researcherProject => (
        <div key={researcherProject.id} className="researcher-section">
          <table className="projects-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Description</th>
                <th>Date de début</th>
                <th>Date de fin prévue</th>
              </tr>
            </thead>
            <tbody>
              {researcherProjects.map(researcherProject => (
                <tr key={researcherProject.id}>
                  <td>{researcherProject.title}</td>
                  <td>{researcherProject.description}</td>
                  <td>{researcherProject.start_date}</td>
                  <td>{researcherProject.end_date_expected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ResearcherProjectsTable;
