
import React from 'react';
import '../../Global/global.sass';
import './Input.sass';


const Input = (props) => {
    return(
        <div className="align-content-bl" id="pad-comp" >
            <label htmlFor={props.name} >{ props.title }</label>
            <input className={props.className}
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input;