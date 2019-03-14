
import React from 'react';
import '../../Global/global.sass';
import './Input.sass';


function Input(props) {
    return(
        <div className="align-content-bl" id="pad-comp" >
            <label htmlFor={props.name} >{ props.name }</label>
            <input 
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            {...props} 
            />
        </div>
    )
}

export default Input;