import React, { useState } from 'react';
//definiendo estiloa en constantes

// ?estilo para usuario loggeado
const loggedStyle = {
    color: 'white'
};

// estilo para usuario no logueado
const unloggedStyle ={
    color: 'tomato',
    fontWeight: 'bold'
}
const GreetingStyled = (props) => {

    // generamos un estado para el componente
    // y asi controlar si el usuario esta o no logueado

    const [logged, setLogged] = useState(false);

    const greetingUser = (<p> hola, {props.name}</p>);
    const pleaseLogin = (<p>Please login</p>)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            {logged ? greetingUser : pleaseLogin}
            
            <button onClick={() => {
                console.log('boton pulsado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
