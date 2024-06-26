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

  return (
    <div className="table-container">
      <h2>Liste des Publications</h2>
      <table className="publications-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Résumé</th>
            <th>Date de Publication</th>
          </tr>
        </thead>
        <tbody>
          {publications.map(publication => (
            <tr key={publication.id}>
              <td>{publication.id}</td>
              <td>{publication.title}</td>
              <td>{publication.summary}</td>
              <td>{publication.publication_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicationsTable;
