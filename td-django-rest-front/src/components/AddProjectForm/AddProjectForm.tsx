import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import './AddProjectForm.css';
import Researcher from '../../interfaces/Researcher';

const AddProjectForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [projectLeader, setProjectLeader] = useState<number | null>(null);
  const [researchers, setResearchers] = useState<Researcher[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    try {
      const response: AxiosResponse = await axios.post(
        'http://localhost:8000/api/projects/',
        { title, description, start_date: startDate, end_date_expected: endDate, project_leader: projectLeader },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Projet ajouté avec succès!');
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      setProjectLeader(null);
    } catch (error) {
      setError("Il y a eu une erreur dans l'ajout du projet!");
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-project-form-container">
      <h2>Ajout d'un projet</h2>
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
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Date de début</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Date de fin prévue</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectLeader">Chercheur assigné</label>
          <select
            id="projectLeader"
            value={projectLeader || ''}
            onChange={(e) => setProjectLeader(Number(e.target.value))}
            required
          >
            <option value="">Selection du chercheur</option>
            {researchers.map((researcher) => (
              <option key={researcher.id} value={researcher.id}>
                {researcher.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Ajout d'un projet</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
