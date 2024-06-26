import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import './AddPublicationForm.css';
import ResearchProject from '../../interfaces/ResearchProject';

const AddPublicationForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [project, setProject] = useState<number | null>(null);
  const [projects, setProjects] = useState<ResearchProject[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
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
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    try {
      const response: AxiosResponse = await axios.post(
        'http://localhost:8000/api/publications/',
        { title, summary, publication_date: publicationDate, associated_project: project },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Publication ajouté avec succès!');
      setTitle('');
      setSummary('');
      setPublicationDate('');
      setProject(null);
    } catch (error) {
      setError("Il y a une erreur dans l'ajout de la publication!");
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-publication-form-container">
      <h2>Ajout de publication</h2>
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
            <option value="">Selection du projet</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Ajout de la publication</button>
      </form>
    </div>
  );
};

export default AddPublicationForm;
