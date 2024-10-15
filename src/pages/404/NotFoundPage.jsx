import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFoundPage = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/'); //navega a la pagina de inicio
    }

    return (
        <div>
            <h1>404 - NotFoundPage</h1>
            <button onClick={goToHome}>Go to Home</button>
        </div>
    );
}

export default NotFoundPage;
