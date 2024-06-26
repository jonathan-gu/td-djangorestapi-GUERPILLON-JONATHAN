import { useNavigate } from "react-router-dom"
import AddProjectForm from "../../components/AddProjectForm/AddProjectForm"
import { useEffect } from "react"

const AddProjectPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const get_expiration_date = localStorage.getItem('expiration_date')
        if (!get_expiration_date) {
          navigate('/login')
        }
        else if (new Date(get_expiration_date) < new Date()) {
          navigate('/login')
        }
      }, [])

    return (
        <AddProjectForm />
    )
}

export default AddProjectPage