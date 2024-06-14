/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** ejemplo de children props ***</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* props.children pintará por defecto
            aquello que se encurntre entre las etiquetas de aperturra y cierre
            de este componente desde el componente de orden superior */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
