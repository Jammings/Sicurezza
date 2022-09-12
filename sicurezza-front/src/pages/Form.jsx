import React from "react";
import './Form.scss';
// rfce -> Crear componentes
import {useRef} from 'react';

function Form() {
    const inputRef = useRef(null);

    function handleClick() {
        // 👇️ update input value
        inputRef.current.value = 'New value';
        // 👇️ access input value
        console.log(inputRef.current.value);
    }
  return (
    <div className='row'>
        <div className='row-1'>
            <h1>Creador</h1>
            <input ref={inputRef} type="text" id="creater" name="creater" placeholder='Nombre del creador'/>
        </div>
        <div className='row-2'>
            <h1>Espacio</h1>
            <input ref={inputRef} type="text" id="space" name="space" placeholder='Nombre del espacio'/>
        </div>
        <button onClick={handleClick}>Add Space</button>
    </div>
  )
}
// rfce -> Crear componentes
export default Form
