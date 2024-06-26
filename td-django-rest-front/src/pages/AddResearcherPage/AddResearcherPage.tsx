import AddResearcherForm from "../../components/AddResearcherForm/AddResearcherForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AddResearcherPage = () => {
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
        <AddResearcherForm />
    )
}

export default AddResearcherPage