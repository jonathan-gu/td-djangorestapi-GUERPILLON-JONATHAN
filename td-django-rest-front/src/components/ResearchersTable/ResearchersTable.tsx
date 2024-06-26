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

  const onDelete = (id: number) => {
    axios.delete(`http://localhost:8000/api/researchers/${id}/`)
      .then(() => {
        setResearchers(researchers.filter(researcher => researcher.id !== id));
      })
      .catch((error: AxiosError) => {
        console.error('There was an error deleting the publication!', error);
      });
  };

  return (
    <div className="table-container">
      <table className="researchers-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Spécialité</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {researchers.map(researcher => (
            <tr key={researcher.id}>
              <td>{researcher.name}</td>
              <td>{researcher.specialty}</td>
              <td className='action'>Modifier</td>
              <td className='action' onClick={() => onDelete(researcher.id)}>Supprimer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchersTable;