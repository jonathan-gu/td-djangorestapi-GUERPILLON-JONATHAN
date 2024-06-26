// src/components/PublicationsTable/PublicationsTable.tsx
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Publication } from '../../interfaces/Publication';
import './PublicationsTable.css';
import { Link } from 'react-router-dom';

const PublicationsTable: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get<Publication[]>('http://localhost:8000/api/publications/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response: AxiosResponse<Publication[]>) => {
        setPublications(response.data);
      })
      .catch((error: AxiosError) => {
        console.error('There was an error fetching the publications!', error);
      });
  }, []);

  const onDelete = (id: number) => {
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:8000/api/publications/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        setPublications(publications.filter(publication => publication.id !== id));
      })
      .catch((error: AxiosError) => {
        console.error('There was an error deleting the publication!', error);
      });
  };

  return (
    <div className="table-container">
      <table className="publications-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Résumé</th>
            <th>Date de Publication</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {publications.map(publication => (
            <tr key={publication.id}>
              <td>{publication.title}</td>
              <td>{publication.summary}</td>
              <td>{publication.publication_date}</td>
              <td><Link to={`/edit-publication/${publication.id}`}>Modifier</Link></td>
              <td className='action' onClick={() => onDelete(publication.id)}>Supprimer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicationsTable;
