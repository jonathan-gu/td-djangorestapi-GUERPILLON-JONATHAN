import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import ResearcherProject from '../../interfaces/ResearchProject';
import './ProjectsTable.css';
import { Link } from 'react-router-dom';

const ResearcherProjectsTable: React.FC = () => {
  const [researcherProjects, setResearcherProjects] = useState<ResearcherProject[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get<ResearcherProject[]>('http://localhost:8000/api/projects/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response: AxiosResponse<ResearcherProject[]>) => {
        setResearcherProjects(response.data);
      })
      .catch((error: AxiosError) => {
        console.error('There was an error fetching the researchers!', error);
      });
  }, []);

  const onDelete = (id: number) => {
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:8000/api/projects/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        setResearcherProjects(researcherProjects.filter(researcherProject => researcherProject.id !== id));
      })
      .catch((error: AxiosError) => {
        console.error('There was an error deleting the publication!', error);
      });
  };

  return (
    <div className="table-container">
      <table className="projects-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Date de début</th>
            <th>Date de fin prévue</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {researcherProjects.map(researcherProject => (
            <tr key={researcherProject.id}>
              <td>{researcherProject.title}</td>
              <td>{researcherProject.description}</td>
              <td>{researcherProject.start_date}</td>
              <td>{researcherProject.end_date_expected}</td>
              <td><Link to={`/edit-project/${researcherProject.id}`}>Modifier</Link></td>
              <td className='action' onClick={() => onDelete(researcherProject.id)}>Supprimer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default ResearcherProjectsTable;
