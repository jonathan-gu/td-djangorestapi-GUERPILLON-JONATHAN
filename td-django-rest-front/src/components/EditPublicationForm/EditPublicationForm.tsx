import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import ResearchProject from '../../interfaces/ResearchProject';
import { Publication } from '../../interfaces/Publication';
import './EditPublicationForm.css';

interface EditPublicationFormProps {
  id: string;
}

const EditPublicationForm: React.FC<EditPublicationFormProps> = ({ id }) => {
  const navigate = useNavigate();
  const [publication, setPublication] = useState<Publication | null>(null);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [project, setProject] = useState<number | null>(null);
  const [projects, setProjects] = useState<ResearchProject[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get<Publication>(`http://localhost:8000/api/publications/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response: AxiosResponse<Publication>) => {
      setPublication(response.data);
      setTitle(response.data.title);
      setSummary(response.data.summary);
      setPublicationDate(response.data.publication_date);
      setProject(response.data.associated_project);
    })
    .catch((error: AxiosError) => {
      console.error('There was an error fetching the publication!', error);
    });

    axios.get<ResearchProject[]>('http://localhost:8000/api/projects/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response: AxiosResponse<ResearchProject[]>) => {
      setProjects(response.data);
    })
    .catch((error: AxiosError) => {
      console.error('There was an error fetching the projects!', error);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `http://localhost:8000/api/publications/${id}/`,
        { title, summary, publication_date: publicationDate, associated_project: project },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Publication modifiée avec succès!');
      setTimeout(() => navigate('/publications'), 2000);
    } catch (error: any) {
      if (error.response) {
        console.error('Error details:', error.response.data);
        setError(`Erreur: ${JSON.stringify(error.response.data)}`);
      } else {
        setError("Il y a une erreur dans la modification de la publication!");
      }
      console.error('Error:', error);
    }
  };

  if (!publication) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-publication-form-container">
      <h2>Modifier Publication</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="summary">Résumé</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="publicationDate">Date de publication</label>
          <input
            type="date"
            id="publicationDate"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="project">Projet associé</label>
          <select
            id="project"
            value={project || ''}
            onChange={(e) => setProject(Number(e.target.value))}
            required
          >
            <option value="">Sélectionner le projet</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Modifier Publication</button>
      </form>
    </div>
  );
};

export default EditPublicationForm;
