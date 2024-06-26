// src/components/PublicationsTable/PublicationsTable.tsx
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Publication } from '../../interfaces/Publication';
import './PublicationsTable.css';

const PublicationsTable: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    axios.get<Publication[]>('http://localhost:8000/api/publications/')
      .then((response: AxiosResponse<Publication[]>) => {
        setPublications(response.data);
      })
      .catch((error: AxiosError) => {
        console.error('There was an error fetching the publications!', error);
      });
  }, []);

  const onDelete = (id: number) => {
    axios.delete(`http://localhost:8000/api/publications/${id}/`)
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
            <th>ID</th>
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
              <td>{publication.id}</td>
              <td>{publication.title}</td>
              <td>{publication.summary}</td>
              <td>{publication.publication_date}</td>
              <td className='action'>Modifier</td>
              <td className='action' onClick={() => onDelete(publication.id)}>Supprimer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicationsTable;
