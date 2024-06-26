import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Researcher from '../../interfaces/Researcher';
import './ResearchersTable.css';

const ResearchersTable: React.FC = () => {
  const [researchers, setResearchers] = useState<Researcher[]>([]);

  useEffect(() => {
    axios.get<Researcher[]>('http://localhost:8000/api/researchers/')
      .then((response: AxiosResponse<Researcher[]>) => {
        setResearchers(response.data);
      })
      .catch((error: AxiosError) => {
        console.error('There was an error fetching the researchers!', error);
      });
  }, []);

  return (
    <div className="table-container">
      <table className="researchers-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Spécialité</th>
          </tr>
        </thead>
        <tbody>
          {researchers.map(researcher => (
            <tr key={researcher.id}>
              <td>{researcher.name}</td>
              <td>{researcher.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchersTable;
