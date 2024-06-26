import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const get_expiration_date = localStorage.getItem('expiration_date')
        if (get_expiration_date) {
          if (new Date(get_expiration_date) > new Date()) {
            navigate('/researchers')
          }
        }
        navigate('/login')
    }, [])

    return (
        <></>
    )
}

export default HomePage;
