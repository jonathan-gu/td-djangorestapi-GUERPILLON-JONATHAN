import { useNavigate, useParams } from "react-router-dom";
import EditResearcherForm from "../../components/EditResearcherForm/EditResearcherForm"
import { useEffect } from "react";

const EditResearcherPage = () => {
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

    const navigate = useNavigate()

    if(!id) {
        navigate('/researchers')
    }
    
    return (
        <EditResearcherForm id={id}/>
    )
}

export default EditResearcherPage