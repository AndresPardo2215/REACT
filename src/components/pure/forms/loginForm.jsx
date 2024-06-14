/**
 * el componente q  va a conener un formulario pata
 * autenticacion de usuarios
 */

import React, {useState} from 'react'

const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

  return (
    <div>
      
    </div>
  )
}

export default LoginForm

