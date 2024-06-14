/**
 * ejemplo de uso de metodo wilUnMount pata componente clase
 * ejemplo de uso de hooks para componente funcional
 * * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

class WillUnMount extends Component {
    componentWillUnmount(){
        console.log('comportamiento antes de q ek componente desaparezca')
    }
    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        );
    }
}


export const WillUnMountHook = () => {
  useEffect(() => {
    // aqui no ponemos nada
    return (
      <div>
        console.log('comportamiento antes de q ek componente desaparezca')
      </div>
    );
  }, []);
};
