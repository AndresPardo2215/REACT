/**
 * Ejemplo de uso de ciclo de vida del metodo
 * em componente clase y el hook de ciclo de vida
 * en componente funcional
 */
import React, { Component, useEffect } from 'react'

export default class DidMount extends Component {

    componentDidMount(){
        console.log('comportamiento antes que el compononte sea añadido al DOM(renderice)')
    }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}


export const DidMountHook = () => {
    useEffect(()=>{
        console.log('comportamiento antes que el compononte sea añadido al DOM(renderice)')
    },[])
    return (
        <div>
          <h1>DidMount</h1>
        </div>
      )
}


