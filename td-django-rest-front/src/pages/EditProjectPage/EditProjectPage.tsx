import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EditProjectForm from '../../components/EditProjectForm/EditProjectForm';
import { useEffect } from 'react';

const EditProjectPage: React.FC = () => {
    useEffect(() => {
        const get_expiration_date = localStorage.getItem('expiration_date')
        if (!get_expiration_date) {
            navigate('/login')
        }
        else if (new Date(get_expiration_date) < new Date()) {
            navigate('/login')
        }
    }, [])

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    if (!id) {
        navigate('/projects');
        return null;
    }
  
    return (
        <EditProjectForm id={id} />
    );
}

export default EditProjectPage;
