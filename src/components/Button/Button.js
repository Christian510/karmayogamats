import React from 'react';
import './button.sass';


function Button(props) {
    
    const { kind, name } = props
    const className = kind === "button-solid";
    return (
        <button className={ className } > { name } </button>
    )
}

export default Button;