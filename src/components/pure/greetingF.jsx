import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // breve ibtroduccion a useState
    // const [variable, metodo para actualizarlo] = useState(valor inivial)
    const [age, setage] = useState(29);

    const birthday = () => {
        //actualizar el state
        setage(age + 1)
    }

    return (
        <div>
                <h1>
                    HOLA! {props.name} desde componente funcional
                </h1>
                <h2>
                    tu edad es de: {age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        cumplir años
                    </button>
                </div>
            </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
