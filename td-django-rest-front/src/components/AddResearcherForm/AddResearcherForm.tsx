import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './AddResearcherForm.css';

const AddResearcherForm: React.FC = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    const token = localStorage.getItem('token');
    try {
      const response: AxiosResponse = await axios.post(
        'http://localhost:8000/api/researchers/',
        { name, specialty },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Checheur ajouté avec succès!');
      setName('');
      setSpecialty('');
    } catch (error) {
      setError("Il y a eu une erreur dans l'ajout du chercheur!");
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-researcher-form-container">
      <h2>Ajout de chercheur</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
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
        <button type="submit" className="submit-button">Ajouter un chercheur</button>
      </form>
    </div>
  );
};

export default AddResearcherForm;
