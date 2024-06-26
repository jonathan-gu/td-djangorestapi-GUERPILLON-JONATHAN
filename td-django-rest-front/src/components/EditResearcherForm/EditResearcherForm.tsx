import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Researcher from '../../interfaces/Researcher';
import './EditResearcherForm.css';

interface EditResearcherFormProps {
  id: string | undefined;
}

const EditResearcherForm: React.FC<EditResearcherFormProps> = ({id}) => {
  const navigate = useNavigate();
  const [researcher, setResearcher] = useState<Researcher | null>(null);
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get<Researcher>(`http://localhost:8000/api/researchers/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response: AxiosResponse<Researcher>) => {
      setResearcher(response.data);
      setName(response.data.name);
      setSpecialty(response.data.specialty);
    })
    .catch((error: AxiosError) => {
      console.error('There was an error fetching the researcher!', error);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    try {
      const response: AxiosResponse = await axios.put(
        `http://localhost:8000/api/researchers/${id}/`,
        { name, specialty },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Chercheur modifié avec succès!');
      setTimeout(() => navigate('/researchers'), 2000);
    } catch (error: any) {
      if (error.response) {
        console.error('Error details:', error.response.data);
        setError(`Erreur: ${JSON.stringify(error.response.data)}`);
      } else {
        setError("Il y a une erreur dans la modification du chercheur!");
      }
      console.error('Error:', error);
    }
  };

  if (!researcher) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="edit-researcher-form-container">
      <h2>Modifier Chercheur</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Spécialité</label>
          <input
            type="text"
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Modifier Chercheur</button>
      </form>
    </div>
  );
};

export default EditResearcherForm;
