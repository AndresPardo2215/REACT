/**
 * Ejemplo de compoinente de tipi clase que dispone de los metodos
 * de ciclo de vida
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: ANTES DEL MONTAJE DEL COMPONENTE')
    }

    componentDidMount() {
        console.log('DIDMOUNT: justo al acabar montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('willRecieveProps: si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * controlar si el componente debe o no actualilzarse
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('willUpdate: justo antes de actualizarse')

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: justo despues de actualizarse')


    }

    componentWillUnmount() {
        console.log('WillAmount: justo antes de desapatecer')


    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;