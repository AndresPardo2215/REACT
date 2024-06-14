/**
 * ejemplo de uso de metodo componentDidUpdate en comonente de clase t uso de hookj en 
 * comopnente funvional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('comportamiento cuendo el componente recibne nuecvos props o cambios en estado privado')
    }

    render() {
        return (
            <div>DidUpdate</div>
        );
    }
}


export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('comportamiento cuendo el componente recibne nuecvos props o cambios en estado privado')

    })
    return (
        <div>DidUpdate</div>
    );
}


