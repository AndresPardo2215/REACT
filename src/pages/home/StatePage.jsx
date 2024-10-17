import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation();

    const isOnline = location.state?.online ?? false; // Default to false if state is not defined

    // Obtener query params
    const queryParams = new URLSearchParams(location.search);
    const onlineParam = queryParams.get('online'); // Obtiene el valor del parámetro 'online'


    return (
        <div>
           <h1>State: {isOnline ? 'The user is Online' : 'The user is Offline'}</h1> {/* Muestra un mensaje basado en el estado */}
           <h1>Query Params: {onlineParam}</h1> {/* Muestra el valor del parámetro 'online' */}
        </div>
    );
}

export default StatePage;
