/*
 *ejemplo de uso Hook useState
 *Crear un vomponente de tipo funvion y acceder a su estado
 *privado a traves de un hook y, ademass poder modificarlo
*/

import { useState } from "react";
import React from 'react';

const Ejemplo = () => {

    // valor inicial para un contador
    const valorInicial = 0;

    //valor inivial pata una persona
    const personaInicial = {
        nombre: "Martin",
        email: "martin@imaginagroup.com"
    }
    /**
     * *queremos el VALORINICIAL y PERSONAINICIAL sean parte del estado del componente
     * *para asi poder gestionar su cambio y que este se vea reflejado en la vista
     * *del componente
     * 
     * *const [nombreVariable, funvion para cambiar] = useState(valorInicial)
     */ 

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /*
    funcion para actualizar el estado privado que contiene el contador
    */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    function actualizarPersona (nombre){
        setPersona(
            {
                nombre: 'pepe',
                email: 'pepe@imaginagroup.com'
            }
        )
    }


    return (
        <div>
            <h1>Ejemplo de useState() *** </h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA: </h2>
            <h3> NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* bloque de botones pata actuaslizar el estaso del componente */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo;
