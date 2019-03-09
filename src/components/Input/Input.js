
import React from 'react';
import '../../Global/global.sass';
import './Input.sass';


function Input(props) {
    return(
        <div>
            <label htmlFor={props.name} className="" >{ props.name }</label>
            <input 
            className=""
            id={props.name}
            name={props.name}
            type={props.inputType}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            {...props} 
            />
        </div>
    )
}

export default Input;