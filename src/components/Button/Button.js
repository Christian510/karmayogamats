import React from 'react';
import './button.sass';


function Button(props) {
    
    const { kind, name,  ...other } = props
    return (
        <button className={ kind } {  ...other } > { name } </button>
    )
}

export default Button;