import React, {useState} from 'react';

let red = 0;
let green = 200;
let blue = 150;

// ? estilo para usuario loggeado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
};

// ? estilo para usuario no logueado
const unloggedStyle ={
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login Logout buttons
const LoginButton = ({loginAction, propstyle}) => {
    return (
        <button style={propstyle} onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({logoutAction, propstyle}) => {
    return (
        <button style={propstyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (expresion true) && expresion => se renderiza la expresion
// ? (expresion falsa) && expresion => no se renderiza la expresion


const OpcionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0); //mensajes sin leer

    /* const updateAccess = () => {
        setAccess(!access);
    } */

    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }

    let opcionalButton;

    /* if (access) {
        opcionalButton = <button onClick={ updateAccess }>Logout</button>
    } else {
        opcionalButton = <button onClick={ updateAccess }>Login</button>
    } */

    if (access) {
        opcionalButton = <LogoutButton propstyle={unloggedStyle} logoutAction = {logoutAction}></LogoutButton>
    } else {
        opcionalButton = <LoginButton propstyle={loggedStyle} loginAction = {loginAction}></LoginButton>
    }

    //unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }
    
    return (
        <div>
        {/* optional button */}
            { opcionalButton }
            {/* N mesagges unread */}
            {/* {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message ....</p>}
            {nMessages > 1 && <p>You have {nMessages} new messages</p>}
            {nMessages === 0 && <p>There are no new messages</p>} */}
            {/* operador ternario */}
            {access ? (
                <div>
                    {nMessages > 0 ? 
                    <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}</p> : 
                    <p>There are no new messages</p>
                    }            
                    <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message' : 'Add new message'}</button>
                </div>) : null}
        </div>
    );
}

export default OpcionalRender;
