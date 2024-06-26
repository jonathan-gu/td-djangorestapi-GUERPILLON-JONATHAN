// src/pages/Researchers/AddResearcherForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddResearcherForm: React.FC = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/researchers/', { name, specialty })
      .then(() => {
        navigate('/researchers');
      })
      .catch(error => {
        console.error('There was an error adding the researcher!', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Ajouter un Chercheur</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Spécialité:</label>
          <input
            type="text"
            value={specialty}
            onChange={e => setSpecialty(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddResearcherForm;
