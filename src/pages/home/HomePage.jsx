import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in route: ', location.pathname); ///about or faqs

    const goToHome = () => {
        navigate('/'); //navega a la pagina de inicio
    }

    const goBack = () => {
        navigate(-1); //vuelve a la pagina anterior
    }

    const goForward = () => {
        navigate(+1);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile')}>
                Go To Profile
            </button>
        </div>
    );
}

export default HomePage;
