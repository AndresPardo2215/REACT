import React, {useRef} from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        alert(`text in input ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName (e) {
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('on mouse over')}>
            Hello, {name}!
            </p>
            <button onClick={() => console.log('boton 1 pulsado')}>
                botón 1
            </button>
            <button onClick={pressButton}>
                botón 2
            </button>
            <button onClick={() => pressButtonParams('hello')}>
                botón 3
            </button>
            <input 
                placeholder = 'send a text to your father' 
                onFocus={() => console.log('input focused')}
                onChange={(e) => console.log('input changed: ', e.target.value)}
                onCopy={() => console.log('copied text from input')}
                ref={messageRef}
                />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop: '20 px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New name'/>
                        <button type='submit'>
                            Update name
                        </button>
                </form>
            </div>
        </div>
    );
}

export default Child;
