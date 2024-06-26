import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import ResearchProject from '../../interfaces/ResearchProject';
import Researcher from '../../interfaces/Researcher';
import './EditProjectForm.css';

interface EditProjectFormProps {
  id: string;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({ id }) => {
  const navigate = useNavigate();
  const [project, setProject] = useState<ResearchProject | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDateExpected, setEndDateExpected] = useState('');
  const [projectLeader, setProjectLeader] = useState<number | null>(null);
  const [researchers, setResearchers] = useState<Researcher[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get<ResearchProject>(`http://localhost:8000/api/projects/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response: AxiosResponse<ResearchProject>) => {
      setProject(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setStartDate(response.data.start_date);
      setEndDateExpected(response.data.end_date_expected);
      setProjectLeader(response.data.project_leader);
    })
    .catch((error: AxiosError) => {
      console.error('There was an error fetching the project!', error);
    });

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
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `http://localhost:8000/api/projects/${id}/`,
        { title, description, start_date: startDate, end_date_expected: endDateExpected, project_leader: projectLeader },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Projet modifié avec succès!');
      setTimeout(() => navigate('/projects'), 2000);
    } catch (error : any) {
      if (error.response) {
        console.error('Error details:', error.response.data);
        setError(`Erreur: ${JSON.stringify(error.response.data)}`);
      } else {
        setError("Il y a une erreur dans la modification du projet!");
      }
      console.error('Error:', error);
    }
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-project-form-container">
      <h2>Modifier Projet</h2>
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
          <label htmlFor="endDateExpected">Date de fin prévue</label>
          <input
            type="date"
            id="endDateExpected"
            value={endDateExpected}
            onChange={(e) => setEndDateExpected(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectLeader">Chef de projet</label>
          <select
            id="projectLeader"
            value={projectLeader || ''}
            onChange={(e) => setProjectLeader(Number(e.target.value))}
            required
          >
            <option value="">Sélectionner le chef de projet</option>
            {researchers.map((researcher) => (
              <option key={researcher.id} value={researcher.id}>
                {researcher.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Modifier Projet</button>
      </form>
    </div>
  );
};

export default EditProjectForm;
