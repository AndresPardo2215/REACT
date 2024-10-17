import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in route: ', location.pathname); ///about or faqs

    const navigateProps = (path) => {
        navigate(`${path}?online=true`, {
            state: {
                online: true,
            },
        });
    };


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigateProps('/online-state')}>
                Go To Page with State / Query Params
            </button>
            <button onClick={() => navigate('/profile')}>
                Go To Profile
            </button>
        </div>
    );
}

export default HomePage;
