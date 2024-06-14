/**
 * Ejemplo hooks:
 * useState()
 * useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * dispoine de un contexto  ue va a tener un valor que recibe desde el padre
 */
const miContexto = React.createContext(null)

const Componente1 = () => {

    //inicializamos un estado vacio que va a llenarse con los
    // datos del contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {state.token}
                {/* pintamos el componente 2 */}
                <Componente2></Componente2>
            </h1>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                la sesion es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {
        token : '1234567',
        sesion: 1
    }

    //creamos el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData(
            {
                token: 'JWT123456789',
                sesion: sesionData.sesion + 1
            }
        )
    }


  return (
    <miContexto.Provider value={sesionData}>
        {/* todo lo que este aqui dentro puede leer los datos de sesionData */}
        {/* ademas si se actualizan los comopinentes awui tambien lo actualizan */}
        <h1>*** ejemplo de useState y useContext</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  )
}


