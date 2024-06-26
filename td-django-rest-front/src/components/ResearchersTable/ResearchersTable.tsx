import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Researcher from '../../interfaces/Researcher';
import './ResearchersTable.css';
import { Link } from 'react-router-dom';

const ResearchersTable: React.FC = () => {
  const [researchers, setResearchers] = useState<Researcher[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get<Researcher[]>('http://localhost:8000/api/researchers/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response: AxiosResponse<Researcher[]>) => {
        setResearchers(response.data);
      })
      .catch((error: AxiosError) => {
        console.error('There was an error fetching the researchers!', error);
      });
  }, []);

  const onDelete = (id: number) => {
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:8000/api/researchers/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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
              <td><Link to={`/edit-researcher/${researcher.id}`}>Modifier</Link></td>
              <td className='action' onClick={() => onDelete(researcher.id)}>Supprimer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchersTable;
