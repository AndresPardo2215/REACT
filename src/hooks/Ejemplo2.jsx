/* * ejemplo de uso de:
* - useState()
* - useRef()
* - useEffect()
*/

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //vamos a crear dos contadores distintes
    //cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect 
     */

    /**
     * ? caso 1: ejectar siempre un Snippet de codigo
     * Cada vez que haya un cambhio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    /* useEffect(() => {
        console.log('cambio en el estado del componente');
        console.log('mostrando referencia al elemento del DOM');
        console.log(miRef);

    }) */

    /**
     * ? Caso 2: ejecutar solo cuando cambie contador 1
     * Cada vez que haya un cambio en el contador 1, se ejecuta lo que dice useEffect
     * En caso de que cambie contaador 2, no habrá ejecucion
     */

    /* useEffect(() => {
        console.log('cambio en el estado del componente');
        console.log('mostrando referencia al elemento del DOM');
        console.log(miRef);
    }, [contador1]) */
    
    /**
     * ? Caso 2: ejecutar solo cuando cambie contador 1 o contador 2
     * Cada vez que haya un cambio en el contador 1, se ejecuta lo que dice useEffect
     * Cada vez que haya un cambio en el contador 2, se ejecuta lo que dice useEffect
     */

    useEffect(() => {
        console.log('cambio en el estado del CONTADOR 1 / CONTADOR 2');
        console.log('mostrando referencia al elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);


    return (
        <div>
            <h1> ***ejemplo useState(), useRef(), useEffect() *** </h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* elemento referenviado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Increementar contador 1</button>
                <button onClick={incrementar2}>Increementar contador 2</button>
            </div>

        </div>
    );
}

export default Ejemplo2;
