import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

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
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={ goToHome}>
                    Go to Home
                </button>
                <button onClick={goBack}>
                    Go Back
                </button>
                <button onClick={goForward}>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
